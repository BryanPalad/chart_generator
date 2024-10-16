import React, { useState, useEffect } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TextField,
  Button,
  Paper,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { BasicSelect } from './SelectField';
import { activityData } from "../context/utils/constants/MockData"
import { BasicDialogForm } from './BasicDialogForm';
import { BasicButtons } from './Button';

export const EditableTable = ({ data, setData, saveData }) => {

  const [editIdx, setEditIdx] = useState(-1);
  const [editedData, setEditedData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    // If data is empty, initialize with a new row and set it to edit mode
    if (data.length === 0) {
      const newRow = {
        id: 1,
        startTime: dayjs().hour(0).minute(0).second(0),
        endTime: dayjs().hour(0).minute(0).second(0),
        totalTime: '',
        activity: '',
        deliverable: '',
        docsGenerated: '',
        description: '',
        remarks: '',
      };
      setData([newRow]);
      setEditIdx(0);  // Set first row to edit mode
      setEditedData(newRow);  // Set editedData to the new row
    }
  }, [data, setData]);

  useEffect(() => {
    // Step 2: Calculate total time whenever data changes
    const calculateTotal = () => {
      return data.reduce((acc, row) => {
        if (row.startTime && row.endTime) {
          const start = dayjs(row.startTime);
          const end = dayjs(row.endTime);
          const diffInMinutes = end.diff(start, 'minute');
          return acc + diffInMinutes; // Sum up total minutes
        }
        return acc;
      }, 0);
    };
    const totalMinutes = calculateTotal();
    setTotalTime(totalMinutes); // Convert minutes to hours if necessary
  }, [data]);
  
  const formatTotalTime = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`; // Format as "hh:mm"
  };

  // const calculateTotalTime = (startTime, endTime) => {
  //   if (startTime && endTime) {
  //     const diffInMinutes = dayjs(endTime).diff(dayjs(startTime), 'minute');
  //     const hours = Math.floor(diffInMinutes / 60);
  //     const minutes = diffInMinutes % 60;
  //     return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`; // Format as "hh:mm"
  //   }
  //   return '';
  // };  

  const calculateTotalTime = (startTime, endTime) => {
    if (startTime && endTime) {
      const diff = dayjs(endTime).diff(dayjs(startTime), 'hour', true);
      return diff.toFixed(2);
    }
    return '';
  };

  const handleEdit = (index) => {
    setEditIdx(index);
    setEditedData(data[index]);
    setAnchorEl(null);
  };

  const handleSave = (index) => {
    const updatedData = [...data];
    updatedData[index] = editedData;

    // // Recalculate total time for the row
    // const startTime = dayjs(editedData.startTime);
    // const endTime = dayjs(editedData.endTime);
    // if (startTime.isValid() && endTime.isValid()) {
    //   const diffInMinutes = endTime.diff(startTime, 'minute');
    //   updatedData[index].totalTime = diffInMinutes; // Store total time in minutes
    // } else {
    //   updatedData[index].totalTime = 0; // If times are invalid, set totalTime to 0
    // }

    setData(updatedData);
    setEditIdx(-1);
    setAnchorEl(null);
  };

  const handleCancel = () => {
    setEditIdx(-1);
    setEditedData({});
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleTimeChange = (name, value) => {
    const updatedData = { ...editedData, [name]: value };
    // Calculate total time only if both startTime and endTime are set
    if (updatedData.startTime && updatedData.endTime) {
      updatedData.totalTime = calculateTotalTime(updatedData.startTime, updatedData.endTime);
    }
  
    setEditedData(updatedData);
  };

  const handleActivityChange = (value) => {
    setEditedData({ ...editedData, activity: value });
  };

  const handleAddRow = () => {
    const lastRow =  data[data.length -1];
    const newStartTime = lastRow ? dayjs(lastRow.endTime) : dayjs().hour(0).minute(0).second(0);
    
    const newRow = {
      id: data.length + 1,
      startTime: newStartTime,
      endTime: newStartTime,
      totalTime: '',
      activity: '',
      deliverable: '',
      docsGenerated: '',
      description: '',
      remarks: '',
    };

    const updatedData = [...data, newRow]
    setData(updatedData);

    setEditIdx(updatedData.length - 1);
    setEditedData(newRow);
    setAnchorEl(null);
  };

  const handleDeleteRow = (index) => {
    const updatedData = data.filter((_, idx) => idx !== index);
    setData(updatedData);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedRowIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowIndex(-1);
  };

  const handleKeyPress = async (event, index) => {
    if (event.key === "Enter") {
      handleSave(index)
    }
  };

  return (
    <React.Fragment>
      <Box className="flex justify-center gap-2 lg:justify-between">
        <Box className="flex flex-col items-center justify-center border border-slate-300 px-4 py-8 rounded-[5px] h-[60px]">
          <h4 className="text-[16px] font-bold">
            {formatTotalTime(totalTime)}
          </h4>
          <h4 className="text-[14px] font-bold">Total Hours</h4>
        </Box>

        <Box className="flex gap-2">
          <BasicButtons variant='contained' label="Add Activity" handleClick={handleAddRow}/>
          <BasicDialogForm
            dialogTitle="Generate Report"
            dialogHeader="Generate your Report"
            dialogContent="Are you sure you want to save this report?"
            agreeBtnTitle="Submit"
            disagreeBtnTitle="Cancel"
            handleAgree={saveData}
          />
        </Box>
      </Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "bold" }}>
                    Start Time
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "bold" }}>
                    End Time
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "bold" }}>
                    Time Spent (hrs)
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "bold" }}>
                    Activity
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "bold" }}>
                    Deliverable
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "bold" }}>
                    No. of Docs Generated
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "bold" }}>
                    Description
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel sx={{ fontWeight: "bold" }}>
                    Remarks
                  </TableSortLabel>
                </TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>
                    {editIdx === index ? (
                      <TimePicker
                        views={["hours", "minutes"]}
                        value={
                          editedData.startTime
                            ? dayjs(editedData.startTime)
                            : null
                        }
                        onChange={(newValue) =>
                          handleTimeChange("startTime", newValue)
                        }
                        renderInput={(params) => <TextField {...params}/>}
                      />
                    ) : row.startTime ? (
                      dayjs(row.startTime).format("HH:mm")
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === index ? (
                      <TimePicker
                        views={["hours", "minutes"]}
                        value={
                          editedData.endTime ? dayjs(editedData.endTime) : null
                        }
                        onChange={(newValue) =>
                          handleTimeChange("endTime", newValue)
                        }
                        renderInput={(params) => <TextField {...params} />}
                      />
                    ) : row.endTime ? (
                      dayjs(row.endTime).format("HH:mm")
                    ) : (
                      ""
                    )}
                  </TableCell>
                  <TableCell>
                    <TextField
                      name="totalTime"
                      value={
                        editIdx === index ? editedData.totalTime : row.totalTime
                      }
                      disabled
                    />
                  </TableCell>
                  <TableCell>
                    {editIdx === index ? (
                      <BasicSelect
                        options={activityData}
                        label="Activity"
                        value={editedData.activity} // Pass the current value
                        onChange={handleActivityChange} // Handle change
                      />
                    ) : (
                      // <TextField name="activity" value={editedData.activity} onChange={handleChange} />
                      row.activity
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === index ? (
                      <TextField
                        name="deliverable"
                        value={editedData.deliverable}
                        onChange={handleChange}
                      />
                    ) : (
                      row.deliverable
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === index ? (
                      <TextField
                        type="number"
                        name="docsGenerated"
                        value={editedData.docsGenerated}
                        onChange={handleChange}
                      />
                    ) : (
                      row.docsGenerated
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === index ? (
                      <TextField
                        name="description"
                        value={editedData.description}
                        onChange={handleChange}
                      />
                    ) : (
                      row.description
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === index ? (
                      <TextField
                        name="remarks"
                        value={editedData.remarks}
                        onChange={handleChange}
                        onKeyDown={(event) => handleKeyPress(event, index)}
                      />
                    ) : (
                      row.remarks
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === index ? (
                      <Box className="flex flex-col">
                        <Button
                          onClick={() => handleSave(index)}
                          color="primary"
                        >
                          Save
                        </Button>
                        <Button onClick={handleCancel} color="secondary">
                          Cancel
                        </Button>
                      </Box>
                    ) : (
                      <>
                        <IconButton onClick={(e) => handleMenuOpen(e, index)}>
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl) && selectedRowIndex === index}
                          onClose={handleMenuClose}
                        >
                          <MenuItem onClick={() => handleEdit(index)}>
                            Edit
                          </MenuItem>
                          <MenuItem onClick={() => handleDeleteRow(index)}>
                            Delete
                          </MenuItem>
                        </Menu>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </LocalizationProvider>
    </React.Fragment>
  );
};

export default EditableTable;

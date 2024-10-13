import React, { useState } from 'react';
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
import { activityData } from "../utils/constants/MockData"
import { BasicButtons } from './Button';
import { BasicDialogForm } from './BasicDialogForm';

export const EditableTable = ({ data, setData }) => {

  const [editIdx, setEditIdx] = useState(-1);
  const [editedData, setEditedData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

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

    if (name === 'startTime' || name === 'endTime') {
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

  return (
    <React.Fragment>
      <Box className="flex justify-center lg:justify-between">
        <BasicButtons
          label="Add Activity"
          handleClick={handleAddRow}
          btnWidth="160px"
          btnHeight="40px"
        />
        <BasicDialogForm
          dialogTitle="Generate Report"
          dialogHeader="Generate your Report"
          dialogContent="Are you sure you want to save this report?"
          agreeBtnTitle="Submit"
          disagreeBtnTitle="Cancel"
        />
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
                    Total Time Spent (hrs)
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
                        renderInput={(params) => <TextField {...params} />}
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
                      />
                    ) : (
                      row.remarks
                    )}
                  </TableCell>
                  <TableCell>
                    {editIdx === index ? (
                      <>
                        <Button
                          onClick={() => handleSave(index)}
                          color="primary"
                        >
                          Save
                        </Button>
                        <Button onClick={handleCancel} color="secondary">
                          Cancel
                        </Button>
                      </>
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

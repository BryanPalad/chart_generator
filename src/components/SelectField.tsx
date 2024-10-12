import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ActivityType } from '../types/types';

interface Props {
  options: ActivityType[];
  label?: string;
}

export const BasicSelect: React.FC<Props> = ({options, label}) => {
  const [selected, setSelected] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          label={label}
          onChange={handleChange}
        >
          {options.map((item) => {
            const { id, label } = item;
            return (
              <MenuItem key={id} value={10}>{label}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

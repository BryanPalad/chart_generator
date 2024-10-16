import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

interface Props {
  label?: string;
  value: dayjs.Dayjs | null;
  onChange: (date: dayjs.Dayjs | null) => void;
}

export const BasicDatePicker: React.FC<Props> = ({label, value, onChange}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label={label} value={value} onChange={onChange}/>
      </DemoContainer>
    </LocalizationProvider>
  );
}
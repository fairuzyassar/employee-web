import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label={props.desc} />
      </DemoContainer>
    </LocalizationProvider>
  );
}
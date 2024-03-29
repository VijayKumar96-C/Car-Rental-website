import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function DateTime({check,pickDateFunc,returnDateFunc}) {

    const handleChange = (value) =>{
        
        if(check === "pick"){
            pickDateFunc(value)
        } else {
            returnDateFunc(value)
        }
       
        
    }


    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Basic date time picker" onChange={(value)=>{handleChange(value)}} />
                </DemoContainer>
            </LocalizationProvider>
        </div>

    );
}
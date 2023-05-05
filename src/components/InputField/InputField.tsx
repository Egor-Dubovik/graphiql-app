import React, { FC } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '@mui/material/Box';

export type InputFieldProps = TextFieldProps & {
  error?: boolean;
  helperText?: string;
};

const InputField: FC<InputFieldProps> = ({ error, helperText, ...props }) => (
  <Box sx={{ mb: '20px' }}>
    <TextField {...props} error={error} fullWidth />
    {helperText && <FormHelperText error>{helperText}</FormHelperText>}
  </Box>
);

export default InputField;

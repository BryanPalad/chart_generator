import * as React from 'react';
import Button from '@mui/material/Button';

interface ButtonProps {
  variant?: 'contained' | 'text' | 'outlined';
  label: string;
  handleClick: () => void;
  btnWidth?: string;
  btnHeight?: string;
  btnColor?: string;
}

export const BasicButtons: React.FC<ButtonProps> = ({variant = "contained", label, handleClick, btnWidth, btnHeight, btnColor}) => {
  return (
      <Button variant={variant} onClick={handleClick} sx={{ width: btnWidth, height: btnHeight, backgroundColor: btnColor}}>{label}</Button>
  );
}
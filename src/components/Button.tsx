import * as React from 'react';
import Button from '@mui/material/Button';
import { IoIosAddCircle } from "react-icons/io";

interface ButtonProps {
  variant?: 'contained' | 'text' | 'outlined';
  label: string;
  handleClick: () => void;
  btnWidth?: string;
  btnHeight?: string;
}

export const BasicButtons: React.FC<ButtonProps> = ({variant = "contained", label, handleClick, btnWidth, btnHeight}) => {
  return (
      <Button variant={variant} onClick={handleClick} sx={{ width: btnWidth, height: btnHeight}}>{label}<IoIosAddCircle style={{marginLeft: '10px'}}/></Button>
  );
}
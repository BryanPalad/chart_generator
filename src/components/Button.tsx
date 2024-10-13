import * as React from 'react';
import Button from '@mui/material/Button';
import { IoIosAddCircle } from "react-icons/io";
import { TbReport } from "react-icons/tb";

interface ButtonProps {
  variant?: 'contained' | 'text' | 'outlined';
  label: string;
  handleClick: () => void;
  btnWidth?: string;
  btnHeight?: string;
  btnColor?: string;
  btnIcon?: React.ReactNode;
}

export const BasicButtons: React.FC<ButtonProps> = ({variant = "contained", label, handleClick, btnWidth, btnHeight, btnColor, btnIcon}) => {
  return (
      <Button variant={variant} onClick={handleClick} sx={{ width: btnWidth, height: btnHeight, backgroundColor: btnColor}}>{label}{btnIcon}</Button>
  );
}
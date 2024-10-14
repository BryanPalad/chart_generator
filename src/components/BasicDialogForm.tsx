import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
    dialogTitle: string;
    dialogHeader: string;
    dialogContent: string;
    disagreeBtnTitle: string;
    agreeBtnTitle: string;
    handleAgree: () => void;
}

export const BasicDialogForm: React.FC<Props> = ({dialogTitle, dialogHeader, dialogContent, disagreeBtnTitle, agreeBtnTitle, handleAgree}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {dialogTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dialogHeader}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{disagreeBtnTitle}</Button>
          <Button onClick={handleAgree} autoFocus>
            {agreeBtnTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

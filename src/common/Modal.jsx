import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = ({
  openModal,
  openInviteMemberModal,
  title,
  descriptions,
  btnNameForCloseModal,
  btnNameForSubmit,
  handleOnSave,
}) => {
  return (
    <Dialog open={openModal} onClose={openInviteMemberModal}>
      <DialogTitle style={{ fontFamily: "Montserrat !important" }}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText style={{ fontFamily: "Montserrat !important" }}>
          {descriptions}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={openInviteMemberModal}>{btnNameForCloseModal}</Button>
        <Button onClick={handleOnSave}>{btnNameForSubmit}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;

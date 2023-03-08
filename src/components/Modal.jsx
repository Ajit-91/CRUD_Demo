import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const Modal = ({ open, setOpen, title, children, submitHandler, handleClose }) => {
    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <DialogTitle >{title?.toUpperCase()}</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        To create a new card, Please Enter the name.
                    </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={submitHandler}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Modal
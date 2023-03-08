import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const Modal = ({ open, setOpen, title, children, submitHandler }) => {
    return (
        <div>
            <Dialog fullWidth open={open} onClose={() => setOpen(false)}>
                <DialogTitle >{title?.toUpperCase()}</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        To create a new card, Please Enter the name.
                    </DialogContentText>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={submitHandler}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Modal
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const Modal = ({ open, title, children, submitHandler, handleClose }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        await submitHandler()
    }
    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit} >
                    <DialogTitle >{title?.toUpperCase()}</DialogTitle>
                    <DialogContent >
                        <DialogContentText>
                            To create a new card, Please Enter the name.
                        </DialogContentText>
                        {children}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type='submit'>Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default Modal
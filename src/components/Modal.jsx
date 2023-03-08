import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const Modal = ({ open, title, children, submitHandler, handleClose, type = 'form' }) => {
    const handleSubmit = async (e) => {
        e.preventDefault()
        await submitHandler()
    }
    return (
        <div>
            <Dialog fullWidth open={open} onClose={handleClose}>
                {type === 'form' ? (
                    <form onSubmit={handleSubmit} >
                        <DialogTitle >{title?.toUpperCase()}</DialogTitle>
                        <DialogContent >
                            {children}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </form>
                ) : (
                    <>
                        <DialogTitle >{title?.toUpperCase()}</DialogTitle>
                        <DialogContent >
                            {children}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    )
}

export default Modal
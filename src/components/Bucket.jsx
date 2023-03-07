import { Box, Checkbox, Divider, IconButton, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'

const Bucket = ({ name, id }) => {
    return (
        <>
            <Paper elevation={3}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }} >
                    <Checkbox />
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </Box>

                <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', py : 4}}>
                    <Typography align='center' variant="h5">{name?.toUpperCase()}</Typography>
                </Box>
            </Paper>
        </>
    )
}

export default Bucket
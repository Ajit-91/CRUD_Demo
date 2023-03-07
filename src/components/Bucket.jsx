import { Box, Checkbox, Divider, IconButton, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Bucket = ({ name, id }) => {
    const navigate = useNavigate()

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

                <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', py : 4}}
                    onClick={() => navigate(`/buckets/${id}`)}
                >
                    <Typography align='center' variant="h5">{name?.toUpperCase()}</Typography>
                </Box>
            </Paper>
        </>
    )
}

export default Bucket
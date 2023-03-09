import { Box, IconButton, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentBucket } from '../redux/slices/bucketSlice';

const Bucket = ({ name, id, setEdit }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleEdit = () => {
        setEdit(true)
        dispatch(setCurrentBucket({id, name}))
    }
    return (
        <>
            <Paper elevation={3}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }} >
                    <IconButton onClick={handleEdit}>
                        <EditIcon />
                    </IconButton>
                </Box>

                <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', py : 4, cursor : 'pointer'}}
                    onClick={() => navigate(`/buckets/${id}`)}
                >
                    <Typography align='center' variant="h5">{name?.toUpperCase()}</Typography>
                </Box>
            </Paper>
        </>
    )
}

export default Bucket
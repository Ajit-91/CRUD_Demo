import React from 'react'
import { Box, Button, Checkbox, IconButton, Paper, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

const DataCard = ({name, link, id}) => {
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

        <Box sx={{display : 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column', py : 4}}>
            <Typography align='center' variant="h5">{name?.toUpperCase()}</Typography>
            <Button mt={3} href={link} >Link</Button>
        </Box>
    </Paper>
</>
  )
}

export default DataCard
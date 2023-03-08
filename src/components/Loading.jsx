import React from 'react'
import { Backdrop, Box } from '@mui/material'
import { ScaleLoader } from 'react-spinners'
const Loading = ({ backdrop = true }) => {

    return (
        <>
            {
                backdrop ?
                    <>
                        <Backdrop
                            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open
                        >
                            <ScaleLoader/>
                        </Backdrop>
                    </>
                    : (
                        <Box sx={{height: "70vh", width : '100%', display : 'flex' , justifyContent : 'center', alignItems : 'center'}}>
                            <ScaleLoader  />
                        </Box>
                    )
            }

            {/* <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={backdrop}
            >
                <ScaleLoader />
            </Backdrop> */}

        </>
    )
}

export default Loading
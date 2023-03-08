import React from 'react'
import Modal from './Modal'
import ReactPlayer from 'react-player'

const MediaPlayer = ({ link, open, setOpen }) => {
  return (
    <Modal
      type='simple'
      open={open}
      title='Media Player'
      handleClose={() => setOpen(false)}
    >
      <ReactPlayer
         url={link} 
         controls={true} 
          width='100%'
      />
 
    </Modal>
  )
}

export default MediaPlayer
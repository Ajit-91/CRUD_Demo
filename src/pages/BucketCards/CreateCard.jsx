import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import {createCard, selectCurrentCard, updateCard} from "../../redux/slices/cardSlice"

const CreateCard = ({ open, setOpen, edit, setEdit, bucketId }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    // const [bucketId, setBucketId] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const editInfo = useSelector(selectCurrentCard)


    useEffect(() => {
        if (edit) {
            setName(editInfo.name)
            setLink(editInfo.link)
            // setBucketId(editInfo.bucketId)
        }
    }, [edit, editInfo])

    
    const handleClose = () => {
        setOpen(false)
        setEdit(false)
    }

    const submitHandler = async () => {
        try {
            setLoading(true)
            let data;
            if(edit){
                console.log("In editing mode")
                data = await dispatch(updateCard({ name, link, id: editInfo.id })).unwrap();
            }else{
                data = await dispatch(createCard({ name, link, bucketId })).unwrap();
            }
            console.log({ createCarddata : data })
            setLoading(false)
            handleClose()
        } catch (error) {
            console.log({ bucketsError: error })
            setLoading(false)
            alert(error || 'Something went wrong')
            handleClose()
        }
    }
    return (
        <Modal
            open={open || edit}
            handleClose={handleClose}
            title={edit ? 'Edit Card' : 'Create Card'}
            submitHandler={submitHandler}
        >
            {loading && <Loading />}
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                fullWidth
                variant="outlined"
                sx={{mb : 2}}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Link"
                type="url"
                fullWidth
                variant="outlined"
                sx={{mb : 2}}
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
        </Modal>
    )
}

export default CreateCard
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import { selectBuckets } from '../../redux/slices/bucketSlice'
import { createCard, selectCurrentCard, updateCard } from "../../redux/slices/cardSlice"

const CreateCard = ({ open, setOpen, edit, setEdit, bucketId, setRefetch }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [newBucketId, setNewBucketId] = useState('');
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const editInfo = useSelector(selectCurrentCard)
    const buckets = useSelector(selectBuckets)
    const navigate = useNavigate();

    console.log({buckets})

    const handleClose = () => {
        setOpen(false)
        setEdit(false)
    }

    useEffect(() => {
        if (edit) {
            if(!buckets){
                alert('Something went wrong Please try again')
                return navigate('/buckets');
            } 

            setName(editInfo?.name)
            setLink(editInfo?.link)
            setNewBucketId(editInfo?.bucketId)
        }
    }, [edit, editInfo, buckets, navigate])




    const submitHandler = async () => {
        try {
            setLoading(true)
            let data;
            if (edit) {
                console.log("In editing mode")
                data = await dispatch(updateCard({ name, link, id: editInfo.id, bucketId : newBucketId })).unwrap();
            } else {
                data = await dispatch(createCard({ name, link, bucketId })).unwrap();
            }
            console.log({ createCarddata: data })
            setLoading(false)
            setRefetch((prev) => !prev)
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
                sx={{ mb: 2 }}
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
                sx={{ mb: 2 }}
                value={link}
                onChange={(e) => setLink(e.target.value)}
            />
            {edit && (
                <FormControl fullWidth>
                    <InputLabel >Bucket</InputLabel>
                    <Select
                        label={'Bucket'}
                        onChange={(e) => setNewBucketId(e.target.value)}
                        value={newBucketId}
                    >
                        {
                            buckets?.map((bucket) => (
                                <MenuItem key={bucket?.id} value={bucket?.id}>{bucket?.name}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            )}
        </Modal>
    )
}

export default CreateCard
import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal'
import { createBucket, selectCurrentBucket, updateBucket } from '../../redux/slices/bucketSlice';

const CreateBucket = ({ open, setOpen, setRefetch, edit }) => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const editInfo = useSelector(selectCurrentBucket)

    useEffect(() => {
        if (edit) {
            setName(editInfo.name)
        }
    }, [edit])

    const submitHandler = async () => {
        try {
            setLoading(true)
            let data;

            if(edit){
                data = await dispatch(updateBucket({ name, id: editInfo.id })).unwrap();
            }else{
                data = await dispatch(createBucket({ name })).unwrap();
            }
            
            console.log({ createBucketdata : data })
            setLoading(false)
            setOpen(false)
            setRefetch(prev => !prev)
        } catch (error) {
            console.log({ bucketsError: error })
            setLoading(false)
            setOpen(false)
            alert(error || 'Something went wrong')
        }
    }

    return (
        <Modal
            open={open}
            setOpen={setOpen}
            title='Create Card'
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
        </Modal>
    )
}

export default CreateBucket
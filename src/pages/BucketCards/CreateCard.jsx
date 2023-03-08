import { TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import Loading from '../../components/Loading'
import Modal from '../../components/Modal'
import {createCard} from "../../redux/slices/cardSlice"

const CreateCard = ({ open, setOpen }) => {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const submitHandler = async () => {
        try {
            setLoading(true)
            const data = await dispatch(createCard({ name, link })).unwrap();
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
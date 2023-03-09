import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataCard from '../../components/DataCard';
import { getAllCards } from '../../redux/slices/cardSlice'
import CreateCard from './CreateCard';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Loading from '../../components/Loading';
import { deleteMultipleCards } from '../../APIs/cardApi';

const AllCards = () => {

  const [allCardData, setAllCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false)
  const [edit, setEdit] = useState(false)
  const [refetch, setRefetch] = useState(false)
  const [cardsToDelete, setCardsToDelete] = useState([])
  const [loadAgain, setLoadAgain] = useState(false)

  const dispatch = useDispatch();
  const params = useParams();

  console.log({ allCardData, params })
  useEffect(() => {
    (async () => {
      const data = await dispatch(getAllCards(params?.id)).unwrap();
      
      setAllCardData(data)
      setLoading(false)
    })()
  }, [dispatch, refetch, params?.id])

  const handleDelete = async () => {
    try {
      setLoadAgain(true)
      const data = await deleteMultipleCards(cardsToDelete)
      console.log({Deletedata : data})
    } catch (error) {
      console.log({deleteError : error})
    } finally {
      setLoadAgain(false)
      setCardsToDelete([])
      setRefetch(prev => !prev)
    }
  }

  return (
    <>
      {loading ? <Loading /> : (
        <>
        {loadAgain && <Loading />}
          {(openModal || edit) && (
            <CreateCard 
              bucketId={params?.id} 
              edit={edit} 
              setEdit={setEdit} 
              open={openModal} 
              setOpen={setOpenModal} 
              setRefetch={setRefetch}
            />
          )}
          <Typography align='center' variant='h5'>All Cards</Typography>
         
            <Box 
              sx={{
                visibility : `${cardsToDelete.length > 0 ? 'visible' : 'hidden'}`, 
                display : 'flex',
                justifyContent : 'space-between', 
                alignItems : 'center', 
                py : 2,
              }}
            >
              <Typography align='center' variant='h6'>{cardsToDelete.length} Cards Selected</Typography>
              <Button 
                variant='contained'
                onClick={handleDelete}
              >Delete <DeleteIcon sx={{ml : 1}}/>
              </Button>
            </Box>

          <Button 
            variant='contained' 
            sx={{my : 3}} 
            onClick={()=>setOpenModal(true)}
          >Create Card <AddCircleOutlineIcon sx={{ml : 1}} />
        </Button>
          <Grid container spacing={2}>
            {
              allCardData && allCardData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                  <DataCard cardInfo={item} setEdit={setEdit} setCardsToDelete={setCardsToDelete} />
                </Grid>
              ))
            }
          </Grid>
        </>
      )}
    </>
  )
}

export default AllCards
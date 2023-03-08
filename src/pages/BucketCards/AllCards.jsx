import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataCard from '../../components/DataCard';
import { getAllCards, selectCards } from '../../redux/slices/cardSlice'
import CreateCard from './CreateCard';

const AllCards = () => {

  const [allCardData, setAllCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false)
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch();
  const params = useParams();
  const cardsInfo = useSelector(selectCards)

  console.log({ allCardData, params })
  useEffect(() => {
    (async () => {
      const data = await dispatch(getAllCards(params?.id)).unwrap();
      
      setAllCardData(data)
      setLoading(false)
    })()
  }, [dispatch])

  useEffect(() => {
    if(!cardsInfo) return;
    setAllCardData(cardsInfo)
  }, [cardsInfo])

  return (
    <>
      {loading ? <Typography align='center' variant='h4'>Loading...</Typography> : (
        <>
          {(openModal || edit) && <CreateCard bucketId={params?.id} edit={edit} setEdit={setEdit} open={openModal} setOpen={setOpenModal} />}
          <Typography align='center' variant='h5'>All Cards</Typography>
          
          <Button variant='contained' sx={{my : 3}} onClick={()=>setOpenModal(true)}>Create Card</Button>
          <Grid container spacing={2}>
            {
              allCardData && allCardData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                  <DataCard cardInfo={item} setEdit={setEdit} />
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
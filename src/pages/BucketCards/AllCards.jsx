import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DataCard from '../../components/DataCard';
import { getAllCards } from '../../redux/slices/cardSlice'

const AllCards = () => {

  const [allCardData, setAllCardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();

  console.log({ allCardData, params })
  useEffect(() => {
    (async () => {
      const data = await dispatch(getAllCards(params.id)).unwrap();
      
      setAllCardData(data)
      setLoading(false)
    })()
  }, [dispatch])


  return (
    <>
      {loading ? <Typography align='center' variant='h4'>Loading...</Typography> : (
        <>
          <Typography align='center' variant='h5'>All Cards</Typography>
          <Grid container spacing={2}>
            {
              allCardData && allCardData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                  <DataCard name={item.name} link={item.link} />
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
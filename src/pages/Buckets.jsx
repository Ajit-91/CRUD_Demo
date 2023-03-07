import { Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Bucket from '../components/Bucket'
import Layout from '../components/Layout'
import { getAllBuckets, selectBuckets } from '../redux/slices/bucketSlice'

const Buckets = () => {
  const info = useSelector(selectBuckets)
  const [bucketsData, setBucketsData] = useState(info)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  // const [refetch, setRefetch] = useState(true)
  console.log({ info })

  useEffect(() => {
    (async () => {
      // if data is already in redux store, then no need to fetch again
      // if(info && !refetch){
      //   setBucketsData(info)
      //   setLoading(false)
      //   return
      // }
      const data = await dispatch(getAllBuckets()).unwrap();
      console.log({ data })
      setBucketsData(data)
      setLoading(false)
    })()
  }, [dispatch])

  return (
    <>
      {loading ? <Typography align='center' variant='h4'>Loading...</Typography> : (
        <>
          <Typography align='center' variant='h5'>Buckets</Typography>
          <Grid container spacing={2}>
            {
              bucketsData && bucketsData.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index} >
                  <Bucket name={item.name} id={item.id} />
                </Grid>
              ))
            }
          </Grid>

        </>
      )}
    </>
  )
}

export default Buckets
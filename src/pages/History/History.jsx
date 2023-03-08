import { Avatar, Box, Link, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import HistoryIcon from '@mui/icons-material/History';
import { getHistory } from '../../APIs/historyApi';

const History = () => {
  const [historyData, setHistoryData] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getHistory();
      setHistoryData(data)
    })()
  }, [])


  return (
    <div>
      <List>
        {historyData && historyData?.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <Box>
                <Typography variant='caption' >
                  {new Date(item?.time)?.toLocaleDateString()} at {new Date(item?.time)?.toLocaleTimeString()}
                  </Typography>
              </Box>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <HistoryIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item?.cardName}
              secondary={
                <Link href={item?.link}>{item?.link}</Link>
              }
            />
          </ListItem>
        ))}

      </List>
    </div>
  )
}

export default History
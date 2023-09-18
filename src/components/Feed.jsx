import { Box, Skeleton, Stack } from '@mui/material'
import React, { useState } from 'react'
import Post from './Post'

function Feed() {
  const [loading, setLoading] = useState(true)
  setTimeout(()=>{
  setLoading(false)}
  ,[2000]
  )
  return (
    <Box Box flex={4} p={{xs:0,md:2}}>
      {loading ?
        <>
          <Stack>
            <Skeleton variant="text"  height={160} />
            <Skeleton variant="text"  height={80} />
            <Skeleton variant="text"  height={80} />
            <Skeleton variant="rectangular"  height={400} />
          </Stack>
        </>:
        
        <>
          <Post image="https://housing.com/news/wp-content/uploads/2023/04/Howrah-Bridge-Kolkata-Fact-guide-f.jpg" />
          <Post image="https://cdn.pixabay.com/photo/2017/06/12/08/29/victoria-memorial-2394784_1280.jpg" />
          <Post image="https://assets.telegraphindia.com/telegraph/2021/Dec/1638357568_lake-2.jpg" />
          <Post image="https://assets.gqindia.com/photos/648185e00129d966909de09a/3:2/w_1620,h_1080,c_limit/Kolkata-City-Guide_07.jpg" />

        </>}


    </Box>

  )
}

export default Feed

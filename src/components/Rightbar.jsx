import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"block"}}}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://www.allkpop.com/upload/2021/07/content/211244/1626885849-untitled-1.jpg" />
          <Avatar alt="Travis Howard" src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/06/asfcdsafcsd-1686927820.jpg" />
          <Avatar alt="Cindy Baker" src="https://www.allkpop.com/upload/2023/04/content/302326/1682911569-image-2023-04-30t222544.png" />
          <Avatar alt="Agnes Walker" src="https://www.bollywoodhungama.com/wp-content/uploads/2021/11/Justin-Bieber-to-hold-stage-interactive-virtual-concert-in-collaboration-with-Wave.jpeg" />
          <Avatar alt="Trevor Henderson" src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/05/15/c436a58e-73e5-11e9-b91a-87f62b76a5ee_image_hires_115320.jpg?itok=3c74LGuO&v=1557892405" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={164} gap={10}>
          <ImageListItem >
            <img
              src="https://ankitapoddar.com/wp-content/uploads/2022/09/North-Kolkata-Places-to-Visit-Kolkata-Life-1024x683.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://images.saatchiart.com/saatchi/1061906/art/8066862/7133855-HSC00001-7.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src="https://miro.medium.com/v2/resize:fit:1024/1*FLD0IMZ_cIhLUxik4mnaVA.jpeg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://e1.pxfuel.com/desktop-wallpaper/562/293/desktop-wallpaper-cha-eun-woo-laptop.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://assets.vogue.in/photos/6230d54951da11b2e5b0b1a3/3:2/w_1080,h_720,c_limit/Katrina%20Kaif%E2%80%99s%20makeup%20artist%20shares%20a%20step-by-step%20guide%20to%20recreate%20her%20smoky%20eyes.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar

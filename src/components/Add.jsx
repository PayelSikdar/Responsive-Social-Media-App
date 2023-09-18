import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';
import React, { useState } from 'react'

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
})

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Add Post"
        sx={{
          position: "fixed",
          left: { xs: "calc(50% - 25px)", md: 30 },
          bottom: 20,
        }}
        onClick={() => setOpen(true)}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => { setOpen(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ width: 400, height: 280, borderRadius: 5, padding: 2 }}
        backgroundColor={"background.default"} color={"text.primary"}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQPEgIwFtUyaqgVTO85uUrBibD0oR3vDJCA&usqp=CAU"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant='spam' fontWeight={500}>
              Payel
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-flexible"
            placeholder="What's on your mind?"
            multiline
            rows={4}
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={2}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
            <Button>Post</Button>
            <Button>
              <DateRangeIcon/>
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add

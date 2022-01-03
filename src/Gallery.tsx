import React from 'react';
import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Paper,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import data from './gallery.json';

interface Photo {
  file: string;
  author: string;
  caption: string;
  star: boolean;
}

const useStyles = makeStyles({
  root: {
    marginTop: 24,
  },
  header: {
    fontSize: '48px !important',
    textAlign: 'center',
  },
  subtext: {
    textAlign: 'center',
  }
});

function Gallery() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper>
        <Box p={3}>
          <Typography variant="h1" className={classes.header}>Gallery</Typography>
          <br />
          <Typography variant="subtitle1" className={classes.subtext}>I made sure to take lots of photos on the expedition. Most of these are shown below.</Typography>
        </Box>
      </Paper>
      <ImageList cols={4} rowHeight={240}>
        {
          data.map((photo: Photo, index: number) => (
            <ImageListItem key={index}>
              <img src={`/images/gallery/${photo.file}`} alt={photo.caption} loading="lazy" />
            </ImageListItem>
          ))
        }
      </ImageList>
      <br />
    </Container>
  );
}

export default Gallery;

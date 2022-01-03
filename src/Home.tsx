import React from 'react';
import {
  Box,
  Container,
  Paper,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: 'calc(100% - 48px)',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    fontSize: 48,
    textAlign: 'center',
  },
});

function Home() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper>
        <Box p={3}>
          <Typography variant="h1" className={classes.header}>Welcome to My Tanzania Portfolio!</Typography>
          <br />
          <Typography variant="body1">Between 21st July and 16th August 2019, I travelled to Tanzania on a Camps International Expedition. Our activities there involved a safari and a mountain trek, but most importantly, we had the opportunity to make a difference in the local communities by taking part in local community projects.</Typography>
          <br />
          <Typography variant="body1">The expedition and the kit required were fundraised over the two previous years. This web portfolio is designed to show my journey from beginning to end.</Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default Home;

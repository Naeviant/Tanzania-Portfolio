import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    marginTop: 24,
  },
  header: {
    fontSize: 48,
    textAlign: 'center',
  },
  subtext: {
    textAlign: 'center',
  }
});

function Sponsors() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper>
        <Box p={3}>
          <Typography variant="h1" className={classes.header}>Sponsors</Typography>
          <br />
          <Typography variant="subtitle1" className={classes.subtext}>I would like to say a massive thank you to some organisations who were a key part in making this expediiton possible for me.</Typography>
        </Box>
      </Paper>
      <br />
      <Paper>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="West Hill School" src="/images/sponsors/whs.png" />
            </ListItemAvatar>
            <ListItemText
              primary="West Hill School"
              secondary="As well as providing this opportunity for myself and others, West Hill have been very supportive in hosting events such as car boot sales and allowing us to sell refreshments to fundraise."
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Harrison Catering" src="/images/sponsors/harrison.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Harrison Catering"
              secondary="Donated a substantial amount to my fundraising after I wrote to them and several other organisations, as well as an iPad to help the wider group."
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Manchester City Football Club" src="/images/sponsors/mcfc.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Manchester City Football Club"
              secondary="Donated a family tour voucher of their stadium which I could raffle off at school in order to raise money."
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="M&S Ashton-under-Lyne" src="/images/sponsors/ms.png" />
            </ListItemAvatar>
            <ListItemText
              primary="M&S Ashton-under-Lyne"
              secondary="Facilitated bag packing for myself and other fundraisers."
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Morrisons Dukinfield" src="/images/sponsors/morrisons.png" />
            </ListItemAvatar>
            <ListItemText
              primary="Morrisons Dukinfield"
              secondary="Facilitated bag packing for myself and other fundraisers."
            />
          </ListItem>
        </List>
      </Paper>
      <br />
    </Container>
  );
}

export default Sponsors;

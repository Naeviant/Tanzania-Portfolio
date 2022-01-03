import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Paper,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

function Fundraising() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Paper>
        <Box p={3}>
          <Typography variant="h1" className={classes.header}>Fundraising</Typography>
          <br />
          <Typography variant="subtitle1" className={classes.subtext}>Fundraising the £3,890 required for the expedition was by no means easy. Below is a summary of some of the key points in my fundraising. It is very important to note that there were other additional donations from several different people - all of which I am very grateful for.</Typography>
        </Box>
      </Paper>
      <br />
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Bag Packing - M&S</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">On the mornings of the 21st, 22nd and 23rd of December 2017, I took part in bag packing at M&S in Ashton-under-Lyne.</Typography>
            <Typography variant="body1"><strong>This raised a total of £114.84.</strong></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Raffle - Manchester City Family Tour Voucher</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">In response to a collection of letters I sent out to several local organisations, Manchester City Football Club very kindly donated a Family Tour Voucher to me. I raffled this off to all form groups and staff at West Hill School, and later drew the winner: a year 7 student.</Typography>
            <Typography variant="body1"><strong>This raised a total of £39.60.</strong></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Selling Refreshments - West Hill School</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">On the 22nd March 2018, myself and some of the other fundraisers arranged to sell refreshments during the Year 8 Parents' Evening in the school canteen.</Typography>
            <Typography variant="body1"><strong>This raised a total of £23.00.</strong></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Car Boot Sale - West Hill School</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">On the 1st June 2018, a car boot sale was held at West Hill School which I took part in - selling various items I no longer needed.</Typography>
            <Typography variant="body1"><strong>This raised a total of £52.50.</strong></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Sponsorship - Harrison Catering</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">In resposne to a collection of letters I sent out to several local organisations, Harrison Catering - who have a partnership with West Hill School - very kindly donated a cheque to contribute towards my fundraising. Additionally, they also donated an iPad to raffle off in order to raise funds for the wider group.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Bag Packing - Morrisons</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">On the afternoon of the 9th June 2018, I took part in bag packing at Morrisons in Dukinfield.</Typography>
            <Typography variant="body1"><strong>This raised a total of £39.79.</strong></Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Employment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">As of the 2nd September 2018, I have been working in a retail job which has allowed me to pay off the remaining balance and also buy the kit that I required.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <br />
    </Container>
  );
}

export default Fundraising;

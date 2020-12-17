import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useQueryParam, StringParam } from 'use-query-params';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  }
}));

const dispalyDiff = (value, label) => {
  if (isNaN(Number(value))) {
    return null;
  }
  value = Math.round((value + Number.EPSILON) * 100) / 100 
  if (value < 0) {
    return <p> {Math.abs(value)} {label}{addS(value)} from now </p>
  } else if (value > 0) {
    return <p> {Math.abs(value)} {label}{addS(value)} ago </p>
  }
}

const addS = (value) => {
  if(Math.abs(value) > 1) {
    return 's'
  }
  return ''
}


const displayFullDuration = (duration) => {
  const years =  duration.years();
  const months =  duration.months();
  const days =  duration.days();

  const value = years + months + days 
  let time = ''


  if (years) {

    time = time + `${Math.abs(years)} year${addS(years)} `
  }
  if (months) {
    time = time + `${Math.abs(months)} month${addS(months)} `
  }
  if (days) {
    time = time + `${Math.abs(days)} day${addS(days)} `
  }

  if (value === 0) {
    return;
  } else if (value < 0) {
    time = time + 'from now';
  } else {
    time = time + 'ago';
  }

  return time
}



const DateDiffrence = () => {
  const classes = useStyles();
  const [date, setDate] = useQueryParam('date', StringParam);
  const mDate = moment(date);
  const nDate = moment();
  const duration = moment.duration(nDate.diff(mDate))
  
  

  return (
    <>
      <Container maxWidth="sm">
        <Card className={classes.root}>
          <CardContent >
            <Typography gutterBottom variant="h5" component="h2">
              Date From
          </Typography>
          </CardContent>
          <CardContent>
            <TextField
              id="date"
              label="Select Date"
              type="date"
              onChange={(e) => setDate(e.target.value)}
              defaultValue={date}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </CardContent>
          <CardContent>
            <Typography gutterBottom variant="body1" component="p">
              {displayFullDuration(duration)}
              {dispalyDiff(nDate.diff(mDate, 'days'), 'Day')}
              {dispalyDiff(nDate.diff(mDate, 'weeks', true), 'Week')}
              {dispalyDiff(nDate.diff(mDate, 'months', true), 'Month')}
              {dispalyDiff(nDate.diff(mDate, 'years', true), 'Year')}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default DateDiffrence;

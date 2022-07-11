
import React from 'react';
import { makeStyles } from '@mui/styles';
import FreshCutEvent from 'components/FreshCutEvent';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(3)
  }
}));

const FreshCutEvents = ({ events }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {events.map((event, index) => {
        return (
          <FreshCutEvent key={`event-${index}`} event={event} />
        )
      })}
    </div>
  );
};

export default FreshCutEvents;
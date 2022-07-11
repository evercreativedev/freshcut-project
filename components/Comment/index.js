
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(1.5)
  },
  avatar: {
    marginRight: theme.spacing(1.5),
    marginTop: theme.spacing(0.5)
  },
  name: {
    fontWeight: 700
  },
  comment: {
    marginBottom: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  text: {
    fontSize: theme.spacing(1.5),
    fontWeight: 500
  },
  date: {
    fontSize: 11,
    fontWeight: 500,
    lineHeight: '13px',
    color: '#8C8797'
  },
  reply: {
    fontWeight: 700,
    marginLeft: theme.spacing(1.25),
    fontSize: 11,
    lineHeight: '13px',
    cursor: 'pointer'
  },
  likesContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(1),

    '& img': {
      cursor: 'pointer',
      width: theme.spacing(4.5),
      marginBottom: `-${theme.spacing(1)}`
    }
  },
  likes: {
    fontSize: 9
  }
}));

const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container wrap='nowrap' justifyContent='space-between'>
        <Grid container wrap='nowrap'>
          <div className={classes.avatar}>
            <img src={comment.avatar} alt='event_creator' />
          </div>
          <div>
            <Typography className={clsx(classes.text, classes.name)}>{comment.name}</Typography>
            <Typography className={clsx(classes.text, classes.comment)}>{comment.comment}</Typography>
            <Grid container alignItems='center'>
              <Typography className={classes.date}>{comment.date}</Typography>
              <Typography className={classes.reply}>Reply</Typography>
            </Grid>
          </div>
        </Grid>
        <div className={classes.likesContainer}>
          <img src='/assets/like.svg' alt='comment' />
          <Typography className={classes.likes}>{comment.likes}</Typography>
        </div>
      </Grid>
    </div>
  );
};

export default Comment;
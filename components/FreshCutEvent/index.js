
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography, TextField } from '@mui/material';
import clsx from 'clsx';
import Comment from 'components/Comment';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
    width: '100%',
    borderRadius: theme.spacing(1),
    overflow: 'hidden'
  },
  chatContainer: {
    background: theme.palette.background.primary,
    position: 'relative'
  },
  video: {
    objectFit: 'cover'
  },
  eventCreator: {
    padding: theme.spacing(1.5, 2),
    borderBottom: `1px solid ${theme.custom.palette.border}`
  },
  commentsSection: {
    paddingBottom: theme.spacing(9),
  },
  comments: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    maxHeight: theme.spacing(27.5),
    overflow: 'auto',

    '&::-webkit-scrollbar-track':
    {
      borderRadius: 0,
      backgroundColor: '#151417',
    },
    '&::-webkit-scrollbar':
    {
      width: 4,
      backgroundColor: '#151417',
    },
    '&::-webkit-scrollbar-thumb':
    {
      borderRadius: 0,
      backgroundColor: '#3c3942',
    },
  },
  badge: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    marginLeft: theme.spacing(0.25)
  },
  creatorAvatar: {
    marginRight: theme.spacing(1.5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  creatorName: {
    fontWeight: 700
  },
  creatorDescription: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5)
  },
  text: {
    fontSize: theme.spacing(1.5),
    fontWeight: 500
  },
  gameTitle: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(0.5)
  },
  commentsHeader: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),

    '& span': {
      color: '#8C8797',
      marginLeft: theme.spacing(0.25)
    }
  },
  commentInputContainer: {
    position: 'absolute',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
    right: theme.spacing(2),
  },
  likes: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: theme.spacing(3.75)
  },
  likesText: {
    fontSize: theme.spacing(1.5),
    color: theme.palette.text.secondary,
    fontWeight: 500
  },
  commentInput: {
    background: '#28262C',
    height: theme.spacing(5),
    borderRadius: theme.spacing(5),
    width: `calc(100% - ${theme.spacing(18)})`,

    '& .MuiOutlinedInput-root': {
      height: theme.spacing(5),
      fontSize: theme.spacing(1.5),

      '&::placeholder': {
        color: theme.palette.text.secondary
      },

      '&:-ms-input-placeholder': {
        color: theme.palette.text.secondary
      },

      '&::-ms-input-placeholder': {
        color: theme.palette.text.secondary
      }
    },

    '& fieldset': {
      border: 'none'
    }
  },
  profilePlus: {
    marginTop: `-${theme.spacing(1)}`
  }
}));

const FreshCutEvent = ({ event }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={9} md={8} sm={12} xs={12}>
          <video className={classes.video} width="100%" height="100%" autoPlay loop controls>
            <source src={event.event.videoUrl} />
          </video>
        </Grid>
        <Grid className={classes.chatContainer} item lg={3} md={4} sm={12} xs={12}>
          <Grid container className={classes.eventCreator} wrap='nowrap'>
            <div className={classes.creatorAvatar}>
              <img src={event.event.avatar} alt='event_creator' />
              <img className={classes.profilePlus} src='/assets/profile_plus.svg' alt='profile_plus' />
            </div>
            <div>
              <Grid container alignItems='center'>
                <Typography className={clsx(classes.text, classes.creatorName)}>{event.event.creatorName}</Typography>
                <img className={classes.badge} src='/assets/badge.svg' alt='badge' />
              </Grid>
              <Typography className={clsx(classes.text, classes.creatorDescription)}>{event.event.description}</Typography>
              <Grid container>
                <img src='/assets/game.svg' alt='game' />
                <Typography className={clsx(classes.text, classes.gameTitle)}>{event.event.gameTitle}</Typography>
              </Grid>
            </div>
          </Grid>
          <div className={classes.commentsSection}>
            <Typography className={clsx(classes.text, classes.commentsHeader)}>Comments <span>{event.comments.length}</span></Typography>
            <div className={classes.comments}>
              {event.comments.map((comment, index) => {
                return (
                  <Comment key={`comment-${index}`} comment={comment} />
                )
              })}
            </div>
          </div>
          <Grid container className={classes.commentInputContainer}>
            <TextField className={classes.commentInput} placeholder='Add a comment...' />
            <div className={classes.likes}>
              <img className={classes.badge} src='/assets/share.svg' alt='share' />
              <Typography className={classes.likesText}>{event.event.shares > 1000 ? `${(event.event.shares/1000).toFixed(1)}K` : event.event.shares}</Typography>
            </div>
            <div className={classes.likes}>
              <img className={classes.badge} src='/assets/like1.svg' alt='share' />
              <Typography className={classes.likesText}>{event.event.likes > 1000 ? `${(event.event.likes/1000).toFixed(1)}K` : event.event.likes}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FreshCutEvent;
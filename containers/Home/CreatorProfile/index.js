
import React from 'react';
import { Typography, Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(36),
    width: '100%',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    background: `linear-gradient(180deg, rgba(21, 20, 23, 0.1) 0%, #151417 100%), url(/assets/banner_bg.jpeg), #151417`,
    borderRadius: theme.spacing(1)
  },
  content: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingTop: theme.spacing(5.5),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6)
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginRight: theme.spacing(3)
  },
  name: {
    fontSize: theme.spacing(4.25),
    fontWeight: 700,
    lineHeight: '41px'
  },
  following: {
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(2)
  },
  followers: {
    fontSize: 17,
    lineHeight: '22px',
    fontWeight: 500,
    marginRight: theme.spacing(2),

    '& span': {
      fontWeight: 700,
      marginRight: theme.spacing(0.5)
    }
  },
  description: {
    fontSize: theme.spacing(2),
    lineHeight: '21px',
    fontWeight: 500,
    maxWidth: theme.spacing(73)
  },
  socials: {
    marginTop: theme.spacing(3.5)
  },
  socialItem: {
    marginRight: theme.spacing(2.25),
    cursor: 'pointer'
  },
  followButton: {
    background: theme.palette.primary.main,
    color: '#000',
    height: theme.spacing(6),
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1.5, 2.5),
    fontSize: 17,
    lineHeight: '22px',
    fontWeight: 700,

    '&:hover': {
      background: theme.palette.primary.main,
    }
  }
}));

const CreateProfile = ({ profile }) => {
  const classes = useStyles();

  const handleGoSocial = link => () => {
    window.open(link, '_blank');
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container justifyContent='space-between' alignItems='center' wrap='nowrap'>
          <Grid container>
            <img className={classes.avatar} src={profile.avatar} alt='creator_avatar' />
            <div>
              <Grid container alignItems='center'>
                <Typography className={classes.name}>{profile.name}</Typography>
                <img className={classes.badge} src='/assets/badge.svg' alt='badge' />
              </Grid>
              <Grid container className={classes.following}>
                <Typography className={classes.followers}><span>{profile.followers}</span>Followers</Typography>
                <Typography className={classes.followers}><span>{profile.views}</span>Views</Typography>
                <Typography className={classes.followers}><span>{profile.likes}</span>Likes</Typography>
              </Grid>
              <Typography className={classes.description}>{profile.description}</Typography>
            </div>
          </Grid>
          <Button className={classes.followButton}>Follow</Button>
        </Grid>
        <Grid container className={classes.socials}>
          {profile.socials.map(social => {
            return (
              <img key={social.type} onClick={handleGoSocial(social.link)} className={classes.socialItem} src={`/assets/social-icons/${social.type}.svg`} />
            )
          })}
        </Grid>
      </div>
    </div>
  );
};

export default CreateProfile;
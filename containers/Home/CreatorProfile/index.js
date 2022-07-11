
import React from 'react';
import { Typography, Grid, Button, useMediaQuery } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';

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
    paddingRight: theme.spacing(6),

    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    }
  },
  header: {
    alignItems: 'center',

    [theme.breakpoints.down('md')]: {
      alignItems: 'flex-start'
    }
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    marginRight: theme.spacing(3),

    [theme.breakpoints.down('md')]: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    }
  },
  name: {
    fontSize: theme.spacing(4.25),
    fontWeight: 700,
    lineHeight: '41px',
  },
  following: {
    marginBottom: theme.spacing(1.5),
    marginTop: theme.spacing(1.5),

    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2)
    }
  },
  followers: {
    fontSize: 17,
    lineHeight: '22px',
    fontWeight: 500,
    marginRight: theme.spacing(2),

    '& span': {
      fontWeight: 700,
      marginRight: theme.spacing(0.5)
    },

    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(1.75),
      lineHeight: 1.2
    }
  },
  description: {
    fontSize: theme.spacing(2),
    lineHeight: '21px',
    fontWeight: 500,
    maxWidth: theme.spacing(73),
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(1.5),
      lineHeight: 1.2,
      '-webkit-line-clamp': 3,
    }
  },
  socials: {
    marginTop: theme.spacing(3.5),
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
    textTransform: 'capitalize',

    '&:hover': {
      background: theme.palette.primary.main,
    },

    [theme.breakpoints.down('md')]: {
      height: theme.spacing(3),
      fontSize: theme.spacing(1.5),
      padding: theme.spacing(1.5, 1.5),
    }
  }
}));

const CreateProfile = ({ profile }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const handleGoSocial = link => () => {
    window.open(link, '_blank');
  };

  const renderFollowing = () => {
    return (
      <>
        <Grid container className={classes.following}>
          <Typography className={classes.followers}><span>{profile.followers}</span>Followers</Typography>
          <Typography className={classes.followers}><span>{profile.views}</span>Views</Typography>
          <Typography className={classes.followers}><span>{profile.likes}</span>Likes</Typography>
        </Grid>
        <Typography className={classes.description}>{profile.description}</Typography>
      </>
    )
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container className={classes.header} justifyContent='space-between' wrap='nowrap'>
          <Grid container wrap='nowrap'>
            <img className={classes.avatar} src={profile.avatar} alt='creator_avatar' />
            <div>
              <Grid container alignItems='center'>
                <Typography className={classes.name}>{profile.name}</Typography>
                <img className={classes.badge} src='/assets/badge.svg' alt='badge' />
              </Grid>
              {!isSmall && renderFollowing()}
              {isSmall && <Button className={classes.followButton}>Follow</Button>}
            </div>
          </Grid>
          {!isSmall && <Button className={classes.followButton}>Follow</Button>}
        </Grid>
        {isSmall && renderFollowing()}
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
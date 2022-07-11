
import React from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(16),
      marginBottom: theme.spacing(16),
    },
  }
}));

const PageWrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className={classes.root}>
      {children}
    </Container>
  );
};

export default PageWrapper;
import React from 'react';
import {
  CircularProgress,
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '40vh'
    }
  })
);

function Loading(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  );
}

export default Loading;

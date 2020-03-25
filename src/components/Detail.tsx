import React from 'react';
import { Card, CardContent, Typography, makeStyles, Theme } from '@material-ui/core';
import { DetailProps } from '../types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    textAlign: 'center',
    marginBottom: '.5em',
    fontSize: theme.spacing(3),
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

function Detail(props: DetailProps): JSX.Element {
  const { title, data } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography variant='h5' component='h3' className={classes.title}>
          {title}
        </Typography>
        {data}
      </CardContent>
    </Card>
  );
}

export default Detail;

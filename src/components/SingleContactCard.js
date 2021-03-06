import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: "30%",
    textAlign: "center",
    display: "inline-block",
    margin: "1%",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SingleContactCard({name, phoneNumber, email}) {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.pos}>
          {name}
        </Typography>
        <Typography className={classes.pos} >
          {phoneNumber}
        </Typography>
        <Typography variant="body2" component="p">
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
}

SingleContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};
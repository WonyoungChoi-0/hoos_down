import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));


export default function Event({props}) {

  const classes = useStyles();

  return (
    <Card variant="outlined" style={{maxWidth: 500, margin: '50px auto 50px auto'}}>
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
        {props.title}
        </Typography>
        <Typography color="textSecondary">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{margin: "auto"}}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  text : {
    textAlign: 'left'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Post(props) {
  const classes = useStyles();
  const {desc, email, git, imgUrl, tags, title, timestamp} = props

  const month = timestamp.getUTCMonth() + 1; //months from 1-12
  const day = timestamp.getUTCDate();
  const year = timestamp.getUTCFullYear();

  const newdate = year + "/" + month + "/" + day;



  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Grid  alignItems="center"
          container spacing={1}>
            <Grid item xs={6}>
               <Avatar aria-label="avatar" className={classes.avatar}>
                {email.charAt(0)}
                </Avatar>
           </Grid>
           <Grid item xs={6}>
               {email}
           </Grid>
          </Grid>
        }
        title={title}
        subheader={newdate}
      />
      <CardMedia
        className={classes.media}
        image="https://i.ytimg.com/vi/aircAruvnKk/maxresdefault.jpg"
      />
      <CardContent className={classes.text} >
        <Typography style={{marginBottom:'30px'}} constiant="body2" color="textPrimary" component="p">
         {desc}
        </Typography>
        <Typography constiant="body2" color="textSecondary" component="p">
          <Link href={`//${git}`}>
            {git}
          </Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{marginRight:2}} /> 0
        </IconButton>
      </CardActions>
    </Card>
  );
}
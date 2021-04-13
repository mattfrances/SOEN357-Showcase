import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';
import { ImageOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: '20px',
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

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    marginRight: '5px',
    borderRadius: 99999
  },
}))(Button);

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
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Avatar aria-label="avatar" className={classes.avatar}>
                  {email.charAt(0)}
                </Avatar>
                <p style={{marginLeft: '8px', fontSize: '16px'}}>{email}</p>
              </div>
           </Grid>
          </Grid>
        }
        subheader={<p style={{textAlign: 'right', fontSize: '16px'}}>{newdate}</p>}
      />
      {imgUrl &&
        <CardMedia
          className={classes.media}
          image={imgUrl}
        />
      }
      <CardContent className={classes.text} >
        <Typography style={{marginBottom:'10px', fontSize: '24px', fontWeight: 'bold'}} constant="body2" color="textPrimary" component="p">
         {title}
        </Typography>
        <div style={{marginBottom: '10px'}}>
          {tags.map(tag => 
            <ColorButton component={ Link } to={`/search?tag=${tag}`} variant="contained" color="primary">
                {tag}
            </ColorButton>
          )}
        </div>
        <Typography style={{marginBottom:'20px', fontSize: '18px'}} constant="body2" color="textPrimary" component="p">
         {desc}
        </Typography>
        <Button target="_blank" variant="contained" color="primary" href={git}>
          Check it out
        </Button>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{marginRight:2}} /> 0
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
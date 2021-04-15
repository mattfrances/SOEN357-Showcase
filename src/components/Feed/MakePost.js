/* eslint-disable no-restricted-globals */
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { red } from '@material-ui/core/colors';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { UserContext } from "../../contexts/userContext";
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import ChipInput from 'material-ui-chip-input';
import React, { useState, useContext } from "react";
import firebase from 'firebase';


const db = firebase.firestore()


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    textAlign: 'left'
  },
  area : {
      minWidth:'550px'
  },
  tf : {
    minWidth:'300px'
  },
  tf2 : {
    minWidth:'300px',
    marginBottom:'15px'

  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MakePost() {
  const { userState, userDispatch } = useContext(UserContext);
  const classes = useStyles();
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [git, setGit] = useState("");

  const addPost = () =>{
    db.collection("posts").add({
        title,
        git,
        desc,
        imgUrl,
        tags,
        email: firebase.auth().currentUser.email,
        uid : firebase.auth().currentUser.uid,
        timestamp: firebase.firestore.Timestamp.now(),
        misc : userState.userData.uni
    }).then(() => location.reload()
    )
}



  const addTag = (tagName) => {
    const tagSet = new Set(tags);
    tagSet.add(tagName);
    setTags(Array.from(tagSet));
  }

  const removeTag = (tagName) => {
    setTags(tags.filter(tag => tag !== tagName));
  }


  return (
    <Card className={classes.root} >
      <CardHeader
        title="Make a post!"
      />
      <CardContent>
      <TextField required  onChange={e => setTitle(e.target.value)} className={classes.tf2} label="Enter your post title" />
      <TextareaAutosize
      required 
      onChange={e => setDesc(e.target.value)}
      className = {classes.area}
      rowsMin={4}
      aria-label="maximum height"
      placeholder="Buzzwords go here..."
    />
    <ChipInput
        required 
        fullWidth
        placeholder='Type and press enter to add chips'
        value={tags}
        onAdd={(chip) => addTag(chip)}
        onDelete={(chip) => removeTag(chip)}
        />
    <TextField  onChange={e => setImgUrl(e.target.value)} className={classes.tf} id="img" label="Enter your image URL" />
    <TextField required onChange={e => setGit(e.target.value)} className={classes.tf} id="git" label="Enter your GitHub repo" />
      </CardContent>
      <CardActions>
        <Button variant="contained" disabled={!title || !desc || !git} onClick={()=> addPost()} size="small" color="primary">
          Post
        </Button>
      </CardActions>
    </Card>
  );
}
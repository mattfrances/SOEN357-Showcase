import React, { useState, useContext, useEffect } from "react";
import { P, H1, Button, Input, Form, BodyWrapper } from "../components";
import { UserContext } from "../contexts/userContext";
import { makeStyles } from '@material-ui/core/styles';
import { ToastContext } from "../contexts/toastContext";
import firebase from "../firebase.js";
import Post from "../components/Feed/Post"
import MakePost from "../components/Feed/MakePost"
import "firebase/firestore";
import Grid from '@material-ui/core/Grid';
import {convertTimestamp} from 'convert-firebase-timestamp'

const Dashboard = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [uni, setUni] = useState(null);
  const [moreInfoComplete, setMoreInfoComplete] = useState(false);
  const { userState, userDispatch } = useContext(UserContext);
  const { sendMessage } = useContext(ToastContext);
  const [posts1, setPosts1] = useState([]);
  useEffect( () => {
   const p = [];
   async function fetch() {
     await firebase.firestore().collection('posts').get()
     .then(querySnapshot => {
       querySnapshot.docs.forEach(doc => {
         const d = doc.data()
         d.timestamp = convertTimestamp(d.timestamp)
         p.push(d);
     });
   });
   p.sort((a,b) => b.timestamp-a.timestamp)
   setPosts1(p)
   }
   fetch()

 }, [moreInfoComplete])

 const db = firebase.firestore();


  const onClickSubmit = e => {
    e.preventDefault();
    if (firstName && lastName) {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set(
          {
            firstName: firstName,
            lastName: lastName,
            uni
          },
          { merge: true }
        )
        .then(() => {
          userDispatch({
            type: "updateProfile",
            payload: {
              firstName: firstName,
              lastName: lastName
            }
          });
          setMoreInfoComplete(true);
          sendMessage("Welcome!");
          // requestNotifications();
        });
    } else {
      sendMessage("Please complete the form.");
    }
  };

  const moreInfo = () => {
    return (
      <BodyWrapper>
        <H1>Onboarding</H1>
        <P>
          This is an introduction screen that shows up after the user
          successfully logs in for the first time. It's a good opportunity to
          collect additional information or provide them with important details
          about how your application works.
        </P>
        <Form>
          <div>
            <Input
              onChange={e => setFirstName(e.target.value)}
              name="firstName"
              placeholder="First name"
              autoComplete="given-name"
            />
          </div>
          <div>
            <Input
              onChange={e => setLastName(e.target.value)}
              name="lastName"
              placeholder="Last name"
              autoComplete="family-name"
            />
          </div>
          <div>
            <Input
              onChange={e => setUni(e.target.value)}
              name="uni"
              placeholder="University/Company"
            />
          </div>
          <Button onClick={e => onClickSubmit(e)}>Submit</Button>
        </Form>
      </BodyWrapper>
    );
  };

  const dashboard = () => {

    return (
      <BodyWrapper>
        <div style={{marginTop:'30px'}}>
        <Grid justify="center" container spacing={3}>
          <Grid  align="center"  item xs={12}>
            <MakePost />
          </Grid>
          {posts1 && posts1.map((e, i) => {
            return(
          <Grid key={i} align="center"  item xs={12}>
            <Post
            desc={e.desc}
            email={e.email}
            git={e.git}
            imgUrl={e.imgUrl}
            tags={e.tags}
            title={e.title}
            timestamp={e.timestamp}
            />
          </Grid>
            )
          })}
        </Grid>
        </div>
      </BodyWrapper>
    );
  };
  if(moreInfoComplete || userState.userData.firstName){
    console.log(dashboard() === undefined)
    return dashboard();
  }
  else{
    return moreInfo()
  }
}

export default Dashboard;

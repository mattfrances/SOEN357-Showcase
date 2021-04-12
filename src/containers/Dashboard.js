import React, { useState, useContext, useEffect } from "react";
import { P, H1, Button, Input, Form, BodyWrapper } from "../components";
import { UserContext } from "../contexts/userContext";
import { makeStyles } from '@material-ui/core/styles';
import { ToastContext } from "../contexts/toastContext";
import firebase from "../firebase.js";
import Post from "../components/Feed/Post"
import "firebase/firestore";
import Grid from '@material-ui/core/Grid';

const Dashboard = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [moreInfoComplete, setMoreInfoComplete] = useState(false);
  const { userState, userDispatch } = useContext(UserContext);
  const { sendMessage } = useContext(ToastContext);
  const db = firebase.firestore();

  const onClickSubmit = e => {
    e.preventDefault();
    if (firstName && lastName) {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .set(
          {
            firstName: firstName,
            lastName: lastName
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
          <Button onClick={e => onClickSubmit(e)}>Submit</Button>
        </Form>
      </BodyWrapper>
    );
  };

  const dashboard = () => {
    const posts = [1,2,3]
    return (
      <BodyWrapper>
        <div style={{marginTop:'30px'}}>
        <Grid justify="center" container spacing={3}>
          {posts.map(x => {
            return(
          <Grid justify="center" align="center"  item xs={12}>
            <Post/>
          </Grid>
            )
          })}
        </Grid>
        </div>
      </BodyWrapper>
    );
  };
  return moreInfoComplete || userState.userData.firstName
    ? dashboard()
    : moreInfo();
};

export default Dashboard;

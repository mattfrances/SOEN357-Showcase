import firebase from "../firebase/init";

const postTweet = async (
  authorId,
  text,
  imgLink = null,
  tags = [],
  gitHubURL = "",
  parentTweet = null
) => {
  console.log(authorId, text, imgLink, parentTweet);
  await firebase.firestore().collection("tweets").add({
    authorId,
    text,
    parentTweet,
    imgLink,
    tags,
    gitHubURL,
    createdAt: firebase.firestore.Timestamp.now(),
  });
};

export default postTweet;

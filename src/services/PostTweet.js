import firebase from "../firebase/init";

const postTweet = async (
  authorId,
  title,
  text,
  imgLink = null,
  tags = [],
  gitHubURL = "",
  parentTweet = null
) => {
  console.log(authorId, text, imgLink, parentTweet);
  const titleFields = title.split(' ');

  await firebase.firestore().collection("tweets").add({
    authorId,
    title,
    titleFields,
    text,
    parentTweet,
    imgLink,
    tags,
    gitHubURL,
    createdAt: firebase.firestore.Timestamp.now(),
  });
};

export default postTweet;

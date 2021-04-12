import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoIcon from "@material-ui/icons/Photo";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import firebase from "../../firebase/init";
import postTweet from "../../services/PostTweet";
import Avatar from "../Avatar/Avatar";
import ChipInput from 'material-ui-chip-input';

const TweetInput = () => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [tweet, setTweet] = useState("");
  const [imgLink, setImgLink] = useState(null);
  const [file, setFile] = useState(null);
  const [tweeting, setTweeting] = useState(false);

  const [tags, setTags] = useState([]);
  const [githubURL, setGithubURL] = useState("");

  const fileInputRef = React.createRef();

  const uploadFile = async () => {
    const storageRef = firebase.storage().ref("tweets/" + file.name);
    const task = await storageRef.put(file);
    const link = await storageRef.getDownloadURL("tweets/" + file.name);
    return link;
  };

  const addTag = (tagName) => {
    const tagSet = new Set(tags);
    tagSet.add(tagName);
    setTags(Array.from(tagSet));
  }

  const removeTag = (tagName) => {
    setTags(tags.filter(tag => tag !== tagName));
  }

  return (
    <div className=" bg-white rounded-lg h-auto overflow-hidden ">
      <div className="p-5">
        <div className="flex flex-row my-5">
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            {user && <Avatar src={user.profilePicture} />}
          </div>

          <div className="w-full mx-5">
            <div className="flex flex-col">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  async function postTweetandUploadFile() {
                    setTweeting(true);
                    let imgLink = null;
                    if (file) {
                      imgLink = await uploadFile();
                    }
                    await postTweet(user.uid, title, tweet.trim(), imgLink, tags, githubURL.trim());
                    setTweeting(false);
                    setFile(null);
                    setTweet("");
                    setImgLink(null);
                    setTags("");
                    setGithubURL("");
                  }
                  postTweetandUploadFile();
                }}>
                  <div className="flex flex-row w-full items-center">
                    <label className="text-gray-400">Title:</label>
                    <input className="ml-6 bg-gray-300 w-full outline-none p-2" placeholder="Enter title..." value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                  <div className="mt-2 flex flex-row w-full items-center">
                    <label className="text-gray-400">Description:</label>
                    <textarea
                      className="w-full h-16 font-noto font-medium text-base text-gray-500 outline-none bg-gray-300 ml-6 p-2"
                      name="tweet-input"
                      placeholder="Description"
                      type="text"
                      value={tweet}
                      onChange={(e) => setTweet(e.target.value)}
                      required
                    />
                  </div>
                <div className="mt-2 flex-row">
                  <div className="flex flex-row w-full items-center">
                    <label className="text-gray-400">Tags:</label>
                    <div className="ml-6 bg-gray-300 w-full">
                      <ChipInput
                        fullWidth
                        placeholder='Type and press enter to add chips'
                        value={tags}
                        onAdd={(chip) => addTag(chip)}
                        onDelete={(chip) => removeTag(chip)}
                      />
                    </div>
                  </div>
                  <div className="mt-2 flex flex-row w-full items-center">
                    <label className="text-gray-400" htmlFor="tags">GitHub:</label>
                    <input 
                      id="tags" 
                      className="w-full ml-2 bg-gray-300	px-4 py-3 rounded outline-none text-sm" 
                      type="text" 
                      placeholder="Enter URL..."
                      value={githubURL}
                      onChange={(e) => setGithubURL(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center mt-3">
                  <div className="mx-2">
                    <input
                      type="file"
                      hidden
                      onChange={(e) => setFile(e.target.files[0])}
                      ref={fileInputRef}
                    />
                    <span className="hover:bg-gray-200 p-2 cursor-pointer">
                      <PhotoIcon
                        onClick={() => fileInputRef.current.click()}
                        style={{ color: "#3182ce" }}
                      />
                    </span>
                  </div>
                  <div className="mr-0 ml-auto">
                    <button
                      className={`bottom-0 relative text-white px-8 py-4 rounded-md ${
                        tweeting
                          ? "bg-blue-300 cursor-not-allowed"
                          : "bg-primary"
                      }`}
                      type="submit">
                      {tweeting ? "Tweeting...." : "Tweet"}
                      {tweeting && (
                        <span
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: " translate(-50%, -50%)",
                          }}>
                          <CircularProgress />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* TODO: Max height and some margin */}
            <img src={file && URL.createObjectURL(file)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;

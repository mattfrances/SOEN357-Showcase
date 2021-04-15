import React, { useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { P, Button, BodyWrapper } from "../";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ChipInput from 'material-ui-chip-input'
import firebase from 'firebase';
import Post from '../Feed/Post';
import qs from 'qs';
import {convertTimestamp} from 'convert-firebase-timestamp'

const db = firebase.firestore()

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
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  searchWrapper: {
    display: 'flex'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#D3D3D3', 0.15),
    '&:hover': {
      backgroundColor: fade('#D3D3D3', 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
    },
    height: '30px'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
  postsWrapper: {
    textAlign: 'center',
  },
  tagSearchWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  buttonWrapper: {
    marginTop: '10px',
    marginLeft: 'auto',
  }
}));

export default function SearchPage() {
  const classes = useStyles();
  
  const [searchOption, setSearchOption] = useState('projects');
  const [searchValue, setSearchValue] = useState("");
  const [tags, setTags] = useState([]);
  
  const [posts, setPosts] = useState([]);

  
  useEffect(() => {
    const tagSearch = qs.parse(window.location.search, { ignoreQueryPrefix: true }).tag;
    if (tagSearch) {
      setSearchOption('tags');
      setTags([tagSearch]);
      search(tagSearch)
    }
  }, [])

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
    setSearchValue("");
    setTags([]);
  };

  const handleAddTag = (tag) => {
    const tagSet = new Set(tags);
    tagSet.add(tag);
    setTags(Array.from(tagSet));
  }

  const handleDeleteTag = (tag) => {
    setTags(tags.filter(item => item !== tag));
  }

  const search = async (queryTag="") => {
    let postArray = [];
    try {
      const postsSnapshot = await db.collection('posts').get()
      postsSnapshot.docs.map((doc) => {
        const data = doc.data();
        const dataTitleFields = doc.data().title.split(' ').map(title => title.toLowerCase());
        const dataTags = doc.data().tags;
        const dataEmail = doc.data().email;
        const misc = doc.data().misc;

        if (searchOption === "tags" || queryTag !== "") {
          if (queryTag !== "") {
            dataTags.forEach(tag => {
              if (tag.toLowerCase() == queryTag.toLowerCase())
                postArray.push(data);
            });
          }
          else {
            tags.forEach(tag => {
              if (dataTags.includes(tag)) {
                postArray.push(data);
              }
            });
          }
        }
        else if (searchOption === "projects") {          
          const searchSplit = searchValue.split(' ');
          searchSplit.forEach(item => {
            if (dataTitleFields.includes(item.toLowerCase())) {
              postArray.push(data);
            }
          });
        }
        else if (searchOption === "misc") {          
          if (misc === searchValue){
            postArray.push(data)
          }
        }
        else {
          if (dataEmail.toLowerCase() === searchValue.trim().toLowerCase()) {
            postArray.push(data);
          }
        }
      })

      setPosts(postArray);
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <BodyWrapper>
      <div>
        <div className={classes.root}>
          <P>Search</P>
        </div>

        <div className={classes.searchWrapper}>
            <FormControl component="fieldset">
              <RadioGroup aria-label="searchOption" name="searchOption" value={searchOption} onChange={handleSearchOptionChange}>
                <FormControlLabel value="projects" control={<Radio />} label="Projects" />
                <FormControlLabel value="tags" control={<Radio />} label="Tags" />
                <FormControlLabel value="user" control={<Radio />} label="Users" />
                <FormControlLabel value="misc" control={<Radio />} label="Uni/Company" />
              </RadioGroup>
            </FormControl>
            
            {searchOption !== "tags" &&
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onKeyUp={(e) => e.key === 'Enter' && search()}
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
            </div>
          }

          {searchOption === "tags" &&
            <div className={classes.tagSearchWrapper}>
              <div className={classes.search}>
                <ChipInput
                  value={tags}
                  onAdd={(tag) => handleAddTag(tag)}
                  onDelete={(tag) => handleDeleteTag(tag)}
                  fullWidth
                />
              </div>
              <div className={classes.buttonWrapper}>
                <Button onClick={() => search()}>Search</Button>
              </div>
            </div>
          }
        </div>
      </div>

      <div className={classes.postsWrapper}>
        { posts.map(post => <Post key={post.uid} desc={post.desc} email={post.email} git={post.git} imgUrl={post.imgUrl} tags={post.tags} title={post.title} timestamp={convertTimestamp(post.timestamp)} />)}
      </div>

    </BodyWrapper>
  );
}
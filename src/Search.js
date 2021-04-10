import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [tagText, setTagText] = useState('');

  const search = () => {
    const tags = new Set()
    const splitTags = tagText.split(",");
    splitTags.forEach(item => tags.add(item));

    setSearchValue("");
    setTagText("");
  }

  return (
    <div>
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Showcase" type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
        <div className="widgets__input">
          <input placeholder="Enter tags separated by commas..." type="text" value={tagText} onChange={(e) => setTagText(e.target.value)} />
        </div>
        <div style={{marginLeft: '20px'}}>
          <Button
            onClick={search}
            type="submit"
            className="tweetBox__tweetButton"
          >
            Search
          </Button>
        </div>
    </div>
  );
};

export default SearchBar;
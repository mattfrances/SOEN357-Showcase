import React, { useState } from 'react';
import Head from "next/head";
import Layout from "../layouts";
import ChipInput from 'material-ui-chip-input';
import { fetchTweets } from '../services/FetchData';

const Search = () => {
  const [filter, setFilter] = useState("Projects");
  const [searchValue, setSearchValue] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = (tagName) => {
    const tagSet = new Set(tags);
    tagSet.add(tagName);
    setTags(Array.from(tagSet));
  }

  const removeTag = (tagName) => {
    setTags(tags.filter(tag => tag !== tagName));
  }

  const searchByProjectOrPerson = async () => {
    let queryParams = {
      titleFields: [],
      tags: [],
      user: ""
    };

    if (filter === 'Projects') {
      const titleFields = searchValue.split(' ');
      queryParams.titleFields = titleFields;
      const response = await fetchTweets(queryParams);
      console.log(response);
    } 
    else {
      console.log('Searching by user.')
    }
  }

  const searchByTags = () => {
    // TODO - Search by tags
    console.log('Searching by tags', tags)
  }

  return (
    <div>
      <Head>
        <title>Search | Tweeter</title>
      </Head>

      <Layout>
      <div className="mx-4 sm:mx-12 md:mx-24 lg:mx-48 mt-5">
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:col-gap-5">
            <div className="hidden lg:block lg:col-span-1">
            <div
              className="w-full bg-white rounded-lg p-5"
              style={{ height: "max-content" }}>
              <li className={`pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer ${filter === "Projects" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'}`} onClick={(e) => setFilter(e.target.innerHTML)}>
                Projects
              </li>
              <li className={`pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer ${filter === "People" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'}`} onClick={(e) => setFilter(e.target.innerHTML)}>
                People
              </li>
              <li className={`pl-5 font-poppins font-semibold text-base py-4 list-none rounded-full cursor-pointer ${filter === "Tags" ? 'text-white bg-blue-300' : 'hover:bg-gray-300 text-gray-600'}`} onClick={(e) => setFilter(e.target.innerHTML)}>
                Tags
              </li>
            </div>
            </div>
            <div className="lg:col-span-2">
              { filter !== "Tags" &&
                <div class="pt-2 relative mx-auto text-gray-600">
                  <input class="w-full border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyUp={(e) => e.key === 'Enter' && searchByProjectOrPerson()} />
                  <button type="submit" class="absolute right-0 top-0 mt-5 mr-4" onClick={searchByProjectOrPerson}>
                    <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                      version="1.1" id="Capa_1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966" xmlSpace="preserve"
                      width="512px" height="512px">
                      <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
              }
              { filter === "Tags" &&
                <div className="pt-2 flex flex-col w-full items-end mx-auto">
                <div className="p-3 bg-white w-full rounded">
                  <ChipInput
                    fullWidth
                    placeholder='Press enter to add a tag'
                    value={tags}
                    onAdd={(chip) => addTag(chip)}
                    onDelete={(chip) => removeTag(chip)}
                  />
                </div>
                <button className="bg-blue-400 text-white mt-2 px-3 py-2 rounded-full focus:outline-none" onClick={searchByTags}>
                  Search
                </button>
              </div>
              }
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Search;
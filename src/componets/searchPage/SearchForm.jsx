import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as actions from "../../actions/serachAction";
import Results from "./Results";
import { increment, setInputTextAction } from "../../actions/serachAction";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchOptions, setSearchOptions] = useState([
    "аблаут",
    "плакаж",
    "негидальцы",
    "псевдокома",
    "конопатчик",
    "обнадёживание",
    "пенофенопласт",
  ]);
  const [addText, setAddText] = useState("");
  const result = useSelector((state) => state.searchData.searchText);

  const handleChange = (e) => {
    setAddText(e.target.value);
    dispatch(setInputTextAction(addText));
  };

  const filteredWords =
    addText.length > 2
      ? searchOptions.filter((word) => word.includes(addText))
      : [];

  return (
    <>
      <div>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
      <div>
        {filteredWords.map((word, index) => {
          return <Results word={word} key={index} />;
        })}
      </div>
    </>
  );
};

export default SearchPage;

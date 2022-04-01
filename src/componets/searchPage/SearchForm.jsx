import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import * as actions from '../../actions/serachAction';
import Results from "./Results";

const SearchPage = () => {
    const dispatch  = useDispatch();
    const [addText, setAddText] = useState('')

    //const {inputText} = useSelector(state => state);



    const handleChange = (e) => {
        setAddText(e.target.value);
    };

    setTimeout(() => {
        dispatch(actions.setInputText({inputText: addText}));
    },1000);
    

    return (
        <>
        <div>
            <input 
                type="text"
                placeholder="Search"
                onChange={handleChange}
            />
        </div>
        <Results addText={addText} />
        </>
    )
}

export default SearchPage;
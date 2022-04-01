import React from "react";

const Results = ({addText}) => {
    return (
        <div>
            {addText ? addText : 'empty'}
        </div>
    )
}

export default Results;
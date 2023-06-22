import React from "react";

const Content = (props) => {


    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.children}</p>
            <p>{props.footer}</p>
        </div>

    )
}

export default Content;
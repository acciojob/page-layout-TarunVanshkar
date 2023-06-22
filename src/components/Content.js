import React from "react";

const Content = (props) => {


    return (
        <div>
            {props.header}
            {props.children}
            {props.footer}
        </div>

    )
}

export default Content;
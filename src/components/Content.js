import React from "react";

const Content = ({footer, children}) => {


    return (
        <div>
            <p>{children}</p>
            <p>{footer}</p>
        </div>

    )
}

export default Content;
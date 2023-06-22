import React from "react";

function PageLayout(props) {
  return (
    <div>
      {props.header}
      {props.children}
      {props.footer}
    </div>
  );
}

export default PageLayout;
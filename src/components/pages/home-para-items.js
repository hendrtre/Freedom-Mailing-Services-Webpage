import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <div>
      <h3>{props.content}</h3>
      
      {/* <Link to={`/portfolio/${props.slug}`}>Link</Link> */}
    </div>
  );
}
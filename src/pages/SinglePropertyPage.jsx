import React from "react";
import { useParams } from "react-router-dom";

const SinglePropertyPage = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default SinglePropertyPage;

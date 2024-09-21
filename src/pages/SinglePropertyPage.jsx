import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PropertyDescription from "../components/PropertyDescription";
import ExtraInformation from "../components/ExtraInformation";
import { usePostContext } from "../context/postContext";

const SinglePropertyPage = () => {
  const loaderPost = useLoaderData();
  const { post, setPost } = usePostContext();
  console.log(loaderPost);

  useEffect(() => {
    setPost(loaderPost);
  }, [loaderPost]);

  if (!post) {
    return <p>loading</p>;
  }

  return (
    <section className="flex md:flex-col justify-between md:mb-10">
      <div>
        <PropertyDescription />
      </div>
      <div className="bg-red-50 md:w-full md:pt-5">
        <ExtraInformation loaderPost={loaderPost} />
      </div>
    </section>
  );
};

export default SinglePropertyPage;

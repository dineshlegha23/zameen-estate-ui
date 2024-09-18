import React, { useState } from "react";
import NewPostInputs from "../components/NewPostInputs";
import UploadWidget from "../components/UploadWidget";

const NewPostPage = () => {
  const [images, setImages] = useState([]);

  return (
    <div className="flex gap-5 lg:flex-col">
      <div>
        <h2 className="text-center text-2xl pt-5 pb-10">Add New Post</h2>
        <div className="flex pb-10 w-[750px] h-[calc(100vh-200px)] lg:h-full mx-auto overflow-y-scroll">
          <NewPostInputs images={images} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-5 justify-center items-center bg-red-50 lg:h-[200px]">
        {images.map((image, index) => (
          <img key={index} src={image}></img>
        ))}
        <UploadWidget
          uwConfig={{
            cloudName: "dw6c6wlin",
            uploadPreset: "estate",
            multiple: true,
            folder: "posts",
          }}
          setValue={setImages}
        />
      </div>
    </div>
  );
};

export default NewPostPage;

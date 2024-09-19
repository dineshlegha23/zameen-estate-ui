import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const NewPostInputs = ({ images }) => {
  const navigate = useNavigate();
  const [desc, setDesc] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      const response = await axios.post(
        `${url}/posts/`,
        {
          postData: {
            title: data.title,
            desc: desc,
            price: parseFloat(data.price),
            address: data.address,
            city: data.city,
            bedroom: Number(data.bedroom),
            bathroom: Number(data.bathroom),
            latitude: data.latitude,
            longitude: data.longitude,
            type: data.type,
            property: data.property,
            images,
          },
          postDetail: {
            utilities: data.utilities,
            pet: data.pet,
            income: data.income,
            size: Number(data.size),
            school: Number(data.school),
            bus: Number(data.bus),
            restaurent: Number(data.restaurent),
          },
        },
        { withCredentials: true }
      );
      navigate("/properties/" + response.data.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-10 flex-wrap justify-center"
    >
      <div className="flex flex-col w-fit">
        <label htmlFor="title" className="text-sm">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>

      <div className="flex flex-col w-fit">
        <label htmlFor="price" className="text-sm">
          Price
        </label>
        <input
          type="text"
          name="price"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>

      <div className="flex flex-col w-fit">
        <label htmlFor="address" className="text-sm">
          Address
        </label>
        <input
          type="text"
          name="address"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>

      <ReactQuill
        theme="snow"
        value={desc}
        onChange={setDesc}
        className="w-full h-[150px] mb-10 px-9"
      />

      <div className="flex flex-col w-fit">
        <label htmlFor="city" className="text-sm">
          City
        </label>
        <input
          type="text"
          name="city"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>

      <div className="flex flex-col w-fit">
        <label htmlFor="bedroom" className="text-sm">
          Bedrooms
        </label>
        <input
          min={1}
          type="number"
          name="bedroom"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>

      <div className="flex flex-col w-fit">
        <label htmlFor="bathroom" className="text-sm">
          Bathrooms
        </label>
        <input
          min={1}
          type="number"
          name="bathroom"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>
      <div className="flex flex-col w-fit">
        <label htmlFor="latitude" className="text-sm">
          Latitude
        </label>
        <input
          type="string"
          name="latitude"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>
      <div className="flex flex-col w-fit">
        <label htmlFor="longitude" className="text-sm">
          Longitude
        </label>
        <input
          type="string"
          name="longitude"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="type" className="text-sm">
          Type
        </label>
        <select
          name="type"
          id="type"
          className="border border-black/50 rounded-md px-2 py-1.5 w-[200px]"
        >
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="property" className="text-sm">
          Property
        </label>
        <select
          name="property"
          id="property"
          className="border border-black/50 rounded-md px-2 py-1.5 w-[200px]"
        >
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="condo">Condo</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="utilities" className="text-sm">
          Utilities Policy
        </label>
        <select
          name="utilities"
          id="utilities"
          className="border border-black/50 rounded-md px-2 py-1.5 w-[200px]"
        >
          <option value="owner">Owner is responsible</option>
          <option value="customer">Customer</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="pet" className="text-sm">
          Pet policy
        </label>
        <select
          name="pet"
          id="pet"
          className="border border-black/50 rounded-md px-2 py-1.5 w-[200px]"
        >
          <option value="allowed">Allowed</option>
          <option value="not-allowed">Not Allowed</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="income" className="text-sm">
          Income Policy
        </label>
        <select
          name="income"
          id="income"
          className="border border-black/50 rounded-md px-2 py-1.5 w-[200px]"
        >
          <option value="income">Income Policy</option>
          <option value="no-income">No Income Policy</option>
        </select>
      </div>
      <div className="flex flex-col w-fit">
        <label htmlFor="size" className="text-sm">
          Total Size (sqft)
        </label>
        <input
          type="number"
          name="size"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>
      <div className="flex flex-col w-fit">
        <label htmlFor="school" className="text-sm">
          School
        </label>
        <input
          min={1}
          type="number"
          name="school"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>
      <div className="flex flex-col w-fit">
        <label htmlFor="bus" className="text-sm">
          Bus
        </label>
        <input
          min={1}
          type="number"
          name="bus"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>
      <div className="flex flex-col w-fit">
        <label htmlFor="restaurent" className="text-sm">
          Restaurent
        </label>
        <input
          min={1}
          type="number"
          name="restaurent"
          className="border border-black/40 px-2 py-1.5 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-300 hover:bg-yellow-500 px-5 py-2 rounded-md self-end block"
      >
        Submit
      </button>
    </form>
  );
};

export default NewPostInputs;

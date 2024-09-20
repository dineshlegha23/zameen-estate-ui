import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Filters = () => {
  const [searhParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: searhParams.get("type"),
    city: searhParams.get("city"),
    property: "",
    minPrice: searhParams.get("minPrice"),
    maxPrice: searhParams.get("maxPrice"),
    bedroom: "",
  });

  const handleChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate(
    //   `?type=${filters.type}&city=${filters.city}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&property=${filters.property}&bedroom=${filters.bedroom}`
    // );
    setSearchParams(filters);
  };

  return (
    <>
      <p className="text-2xl font-thin mb-2">
        Search results for{" "}
        <span className="font-bold">{searhParams.get("city")}</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="[&_label]:block [&_label]:text-xs [&_input]:border-[1px] [&_input]:border-black/20 [&_input]:rounded-md [&_input]:py-[6px] [&_input]:px-2"
      >
        <label htmlFor="city">Location</label>
        <input
          onChange={handleChange}
          className="border-2 w-full"
          type="text"
          name="city"
          placeholder="City Location"
          defaultValue={filters.city}
        />
        <div className="flex justify-between flex-wrap gap-8 mt-2 [&_select]:border-[1px] [&_select]:border-black/20 [&_select]:rounded-md [&_select]:py-[6px] [&_select]:px-2 [&_select]:w-24 [&_input]:w-24">
          <div>
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              onChange={handleChange}
              defaultValue={filters.type}
            >
              <option value="">any</option>
              <option value="buy">buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div>
            <label htmlFor="property">Property</label>
            <select
              onChange={handleChange}
              name="property"
              id="property"
              defaultValue={filters.property}
            >
              <option value="">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
            </select>
          </div>

          <div>
            <label htmlFor="minPrice">Min Price</label>
            <input
              onChange={handleChange}
              type="nummber"
              name="minPrice"
              placeholder="any"
              defaultValue={filters.minPrice}
            />
          </div>

          <div>
            <label htmlFor="minPrice">Max Price</label>
            <input
              onChange={handleChange}
              type="number"
              name="maxPrice"
              placeholder="any"
              defaultValue={filters.maxPrice}
            />
          </div>

          <div>
            <label htmlFor="minPrice">Bedroom</label>
            <input
              onChange={handleChange}
              type="text"
              name="bedroom"
              placeholder="any"
              defaultValue={filters.bedroom}
            />
          </div>
          <button type="submit">
            <img
              src="/search.png"
              className="w-24 h-14 px-8 py-3 bg-yellow-400"
              alt=""
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default Filters;

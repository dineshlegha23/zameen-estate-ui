import React from "react";

const Filters = () => {
  return (
    <>
      <p className="text-2xl font-thin mb-2">
        Search results for <span className="font-bold">London</span>
      </p>
      <form className="[&_label]:block [&_label]:text-xs [&_input]:border-[1px] [&_input]:border-black/20 [&_input]:rounded-md [&_input]:py-[6px] [&_input]:px-2">
        <label htmlFor="city">Location</label>
        <input
          className="border-2 w-full"
          type="text"
          name="city"
          placeholder="City Location"
        />
        <div className="flex gap-10 mt-2 [&_select]:border-[1px] [&_select]:border-black/20 [&_select]:rounded-md [&_select]:py-[6px] [&_select]:px-2">
          <div>
            <label htmlFor="type">Type</label>
            <select name="type" id="type">
              <option value="any">any</option>
              <option value="buy">buy</option>
              <option value="rent">Rent</option>
            </select>
          </div>

          <div>
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
              <option value="any">any</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div>
            <label htmlFor="minPrice">Min Price</label>
            <input type="nummber" name="minPrice" placeholder="any" />
          </div>

          <div>
            <label htmlFor="minPrice">Max Price</label>
            <input type="number" name="maxPrice" placeholder="any" />
          </div>

          <div>
            <label htmlFor="minPrice">Bedroom</label>
            <input type="text" name="bedroom" placeholder="any" />
          </div>
          <img
            src="/search.png"
            className="w-24 h-14 px-8 py-3 bg-yellow-400"
            alt=""
          />
        </div>
      </form>
    </>
  );
};

export default Filters;

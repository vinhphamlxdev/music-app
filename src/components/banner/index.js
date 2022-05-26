import React from "react";

const Banner = ({ data }) => {
  const { items } = data;
  // console.log(items);

  return (
    <div className="container-layout">
      <div className="grid grid-cols-3 gap-x-7">
        {items.slice(0, 3).map((item) => (
          <div key={item.encodeId} className="relative w-full rounded-lg">
            <img
              className="object-cover w-full rounded-lg"
              src={item.banner}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

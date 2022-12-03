import axios from "axios";
import React, { useState, useEffect } from "react";


const CatsCard = () => {
  let currentOffset = 0;
  const [cats, setCats] = useState([]);

  const loadTenCats = () => {
    const tenCats = [];
    axios
      .get(
        `https://api.thecatapi.com/v1/breeds?limit=10`
      )
      .then(({ data }) => {
        data.forEach((p) => tenCats.push(p));
        setCats((cats) => [...cats, ...tenCats]);
      });
    currentOffset += 1;
  };

  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight) {
      loadTenCats();
    }
  };

  useEffect(() => {
    loadTenCats();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {cats.map((p, i) => (
        <div
          key={i}
          className="border-2 rounded-md shadow-md flex gap-5 my-5 md:my-3 lg:my-3 w-full h-full p-5"
        >
          <div className="w-36 h-36 md:w-56 md:h-56  ">
            <img
              src={p?.image?.url}
              alt="thumbnail"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col flex-wrap w-full ">
            <div className="flex flex-col md:flex-row justify-between">
              <h1 className="font-semibold font-sans text-lg md:text-2xl lg:text-3xl">
                {i + 1}. {p.name}
              </h1>
              <a href={p.vetstreet_url} target="_blank" className="bg-blue-500 w-20 md:w-28 h-7 md:h-8 items-center flex justify-center self-auto rounded-md text-white text-[14px] md:text-base my-2 md:my-0 hover:bg-blue-400 cursor-pointer">Detail</a>
            </div>
            <p className="text-[12px] md:text-base">Origin : {p.origin} {p.country_codes}.</p>
            <p className="text-[12px] md:text-base">
              Characters : {p.temperament}
            </p>
            <p className="text-[12px] md:text-base mt-3">
              Description : {p.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CatsCard;

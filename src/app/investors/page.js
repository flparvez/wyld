"use client";
import axios from "axios";
import Image from "next/image";

import React, { useEffect, useState } from "react";

function InvestorPage() {
  const [Data, setData] = useState(null);
  const getUserDetails = async () => {
    const response = await axios.get(`/api/investors/get`);
    console.log(response.data.data);
    setData(response.data.data);
  };

  useEffect(() => {
    getUserDetails();
  }, []);
  const items = [
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/61fe7b257e6384358934c136_1.%20Better%20Capital.png",
      name: "Better Capital",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/61fe7b263376726afcf7fc28_2.%20Capital%20A-p-500.png",
      name: "Capital-A",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/65b41cb9de9c8246abbdedc4_download.jpeg",
      name: "Artha Venture Fund",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/62060d390105a30b2a5d7484_WhatsApp%20Image%202022-02-11%20at%201.29.36%20AM-p-500.jpeg",
      name: "Plan-B Innovations LLC",
    },
    // {
    //   img: "",
    //   name: "",
    // },
    // {
    //   img: "",
    //   name: "",
    // },
    // {
    //   img: "",
    //   name: "",
    // },
  ];

  return (
    <div className="bg-black px-4 my-8">
      <div>
        <h1 className="sm:text-9xl text-5xl uppercase text-white sm:text-center">
          investors
        </h1>

        <div>
          <h1 className="sm:text-2xl text-xl uppercase text-white text-start">
            Venture funds
          </h1>

          <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 my-2 text-white">
            {items.map((item, key) => (
              <div key={key} className="justify-center my-2  text-center">
                <Image
                  className="h-[100%] w-auto object-cover "
                  src={item.img}
                  width={200}
                  height={200}
                  alt=""
                />
                <h2 className="text-center text-sm">{item.name}</h2>
              </div>
            ))}
          </div>

          <h1 className="text-2xl uppercase mt-16 text-white text-start">
            ANgel Investors
          </h1>
          <div className="grid sm:grid-cols-3 grid-cols-2 gap-6  text-white">
            {Data &&
              Data.map((item, key) => (
                <div key={key} className="justify-center my-2   text-center">
                  <Image
                    className="h-[100%] w-auto object-cover"
                    src={item.img}
                    width={200}
                    height={200}
                    alt=""
                  />
                  <h2 className="text-center text-sm">{item.name}</h2>
                  <h2 className="text-center text-sm ">{item.work}</h2>
                </div>
              ))}
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorPage;

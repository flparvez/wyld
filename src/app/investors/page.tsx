import Image from "next/image";
import React from "react";

function page() {
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

  const investors = [
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6204b298cea92bcff18186d2_6.%20Aman%20Gupta%2C%20Boat.jpg",
      name: "Aman Gupta",
      work: "boAt",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6204b312a418c63f105a4dff_7.%20Sameer%2C%20Boat.jpg",
      name: "Sameer Mehta",
      work: "boAt",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/6204bebf8dff587ddd1c90ad_Beyounick-p-500.png",
      name: "Nikunj Lotia",
      work: "(Beyounick)",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/62049d952ec486dd8732a7b1_2.%20Malini%20Agarwal-p-500.jpeg",
      name: "Malini Agarwal",
      work: "Miss Malini",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/62049d945928ca126fc19a9e_12.%20Julie%2C%20Chtrbox.jpg",
      name: "Julie Kriegshaber ",
      work: "Chtrbox",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/62049d926f11c320236be710_16.%20K.Ganesh%2C%20Serial%20Entrepreneur.jpeg",
      name: "K. Ganesh, BigBasket, ",
      work: "Portea & Others",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/63a16d288f759427fe91d5c3_MadhusudananR-M2P%20Fintech-p-500.jpeg",
      name: "Madhusudanan R",
      work: "M2P Fintech",
    },
    {
      img: "https://assets-global.website-files.com/61fd17e773e51667344c6e7e/65b41bfe46efda4a0bd031b7_Anupam-p-500.jpeg",
      name: "Anupam Mittal",
      work: "Shaadi.com",
    },
  ];
  return (
    <div className="bg-black px-4 py-4">
      <div>
        <h1 className="sm:text-9xl text-6xl uppercase text-white sm:text-center">
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
            {investors.map((item, key) => (
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

export default page;

import React from "react";

const Services = () => {
  const services = [
    
     {
      id: 1,
      url: "/photography.jp.jpg",
      title: "Photography & Videography",
    },
    
    {
      id: 2,
      url: "/birthday.jpg",
      title: "Birthday Planning",
    },
    {
      id: 3,
      url: "/anniversary.jpg",
      title: "Anniversary Planning",
    },
    {
      id: 4,
      url: "/camping.jpg",
      title: "Camping Trip Planning",
    },
    {
      id: 5,
      url: "/gamenight.jpg",
      title: "Game Night Planning",
    },
    {
      id: 6,
      url: "/party.jpg",
      title: "Party Planning",
    },
    {
      id: 7,
      url: "/wedding.jpg",
      title: "Wedding Planning",
    },
    {
      id: 8,
      url: "/stage.jpg",
      title: "Entertainment & Stage Shows",
    },
    {
      id: 9,
      url: "/cebrity.jpg",
      title: "Celebrity & Artist Booking",
    },
   

  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
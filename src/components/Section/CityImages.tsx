import React from "react";
import CityImageCards from "../Cards/CityImageCards";

const cities = [
  {
    name: "Toronto",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/toronto.jpg",
  },
  {
    name: "Calgary",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/calgary.jpg",
  },
  {
    name: "Edmonton",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/edmonton.jpg",
  },
  {
    name: "Ottawa",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/ottawa.jpg",
  },
  {
    name: "Winnipeg",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/winnipeg.jpg",
  },
  {
    name: "Montreal",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/montreal.jpg",
  },
  {
    name: "Vancouver",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/vancouver.jpg",
  },
  {
    name: "Quebec City",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/quebec-city.jpg",
  },
  {
    name: "Hamilton",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/hamilton.jpg",
  },
  {
    name: "Saskatoon",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/saskatoon.jpg",
  },
  {
    name: "London",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/london.jpg",
  },
  {
    name: "Halifax",
    url: "https://rentals.ca/static/rentalsca-phoenix/img/home/cities/halifax.jpg",
  },
];

const CityImages: React.FC = () => {
  return (
    <div className="w-full flex flex-wrap justify-around">
      {cities.map((city) => (
        <CityImageCards key={city.name} title={city.name} imageUrl={city.url} />
      ))}
    </div>
  );
};

export default CityImages;

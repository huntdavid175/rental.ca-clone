import React from "react";
import Layout from "../UI/Layout";
import CityImages from "./CityImages";
import { Link } from "react-router-dom";

const apartmentLocations = [
  [
    { name: "Brampton", link: "#" },
    { name: "Burnaby", link: "#" },
    { name: "Fredicton", link: "#" },
    { name: "Gatineau", link: "#" },
    { name: "Kelowna", link: "#" },
  ],
  [
    { name: "Kingston", link: "#" },
    { name: "Kitchener", link: "#" },
    { name: "Markham", link: "#" },
    { name: "Mississauga", link: "#" },
    { name: "Moncton", link: "#" },
  ],
  [
    { name: "Red Deer", link: "#" },
    { name: "Regina", link: "#" },
    { name: "Richmond Hill", link: "#" },
    { name: "Saint John", link: "#" },
    { name: "St. Catharines", link: "#" },
  ],
  [
    { name: "St. John's", link: "#" },
    { name: "Surrey", link: "#" },
    { name: "Vaughan", link: "#" },
    { name: "Victoria", link: "#" },
    { name: "Windsor", link: "#" },
  ],
];

const CitiesSection: React.FC = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col items-center mt-12 pt-6 space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-defaultColor">
          Popular Cities
        </h2>
        <p>Find your next apartment for rent anywhere in Canada</p>
        <CityImages />
        <div className="pt-12">
          <p className="text-xl pb-6">
            With <span className="text-defaultColor">30,872</span> rentals
            currently available, you're sure to find a great place to live.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row md:justify-between md:px-12 ">
          {apartmentLocations.map((locationArray, index) => (
            <div key={index}>
              {locationArray.map((location) => (
                <Link to="#" key={location.name}>
                  <p className="py-2 text-lg text-zinc-600 hover:text-defaultColor duration-300">
                    {location.name} Apartments
                  </p>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CitiesSection;

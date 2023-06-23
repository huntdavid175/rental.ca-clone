import React, { useState } from "react";
import SearchDataHeader from "../../components/Header/SearchDataHeader";
import Header from "../../components/Header/Header";
import ApartmentsMainSection from "../../components/Section/ApartmentsMainSection";

const ApartmentPage: React.FC = () => {
  const [view, setView] = useState("map");
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <SearchDataHeader />
      <ApartmentsMainSection view={view} />
    </div>
  );
};

export default ApartmentPage;

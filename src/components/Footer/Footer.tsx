import React from "react";
import Layout from "../UI/Layout";
import BasicButton from "../UI/BasicButton";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-defaultColor">
      <Layout>
        <div className="w-full flex flex-col md:flex-row justify-between text-white items-center py-8 border-b border-zinc-200 ">
          <div className="text-center">
            <p className="text-2xl py-3 md:py-1">Rentals.ca</p>
          </div>
          <div className="flex flex-col md:flex-row space-x-5  text-center">
            <div className="py-3 md:py-1">Rent Report</div>
            <div className="py-3 md:py-1">Blog</div>
            <div className="py-3 md:py-1">Careers</div>
            <div className="py-3 md:py-1">Contact</div>
            <div className="py-3 md:py-1">Terms</div>
            <div className="py-3 md:py-1">Privacy Policy</div>
            <div className="py-3 md:py-1">FAQs</div>
            <div className="py-3 md:py-1">Francais (FR)</div>
          </div>
        </div>
        <div className="w-full flex flex-col  items-center md:items-start md:flex-row md:justify-between text-white">
          <div className="pt-8 text-center md:text-left">
            <h4 className="py-3 md:py-1">POPULAR SEARCHES</h4>
            <div className="py-3 md:py-1">Apartments & Condos Near Me</div>
            <div className="py-3 md:py-1">Apartments Near Me</div>
            <div className="py-3 md:py-1">Condos Near Me</div>
            <div className="py-3 md:py-1">Houses Near Me</div>
            <div className="py-3 md:py-1">Rooms Near Me</div>
            <div className="py-3 md:py-1">All Rentals Near Me</div>
          </div>

          <div className="pt-8 text-center md:text-left">
            <h4 className="py-3 md:py-1">LANDLORDS</h4>
            <div className="py-3 md:py-1">
              <BasicButton title="Post a Rental" />
            </div>
            <div className="py-3 md:py-1">My Listings</div>
            <div className="py-3 md:py-1">Email Preferences</div>
            <div className="py-3 md:py-1">Contact Support</div>
          </div>

          <div className="pt-8 text-center md:text-left">
            <h4 className="py-3 md:py-1">RENTAL APPS</h4>
            <div className="py-3 md:py-1">Download on App Store</div>
            <div className="py-3 md:py-1">Download on Google Store</div>
          </div>

          <div className="pt-8 text-center md:text-left">
            <h4 className="py-3 md:py-1">SOCIAL MEDIA</h4>
            <div className="py-3 md:py-1">Facebook</div>
            <div className="py-3 md:py-1">Instagram</div>
            <div className="py-3 md:py-1">Linkedin</div>
            <div className="py-3 md:py-1">Twitter</div>
            <div className="py-3 md:py-1">Youtube</div>
          </div>
        </div>

        <div className="w-full text-center text-xs text-zinc-200 font-semi-bold pt-6">
          <p className="pb-3">
            Made in <img src="/canada.svg" width={20} className="inline p" />{" "}
            Copyright 2023 Rentals.ca Network, Inc. All rights reserved.
          </p>
          <p>
            * The claim of "the most rentals" refers to all Canadian long-term
            rental listing inventory (not including rooms for rent) associated
            with the Rentals.ca{" "}
          </p>
          <p>
            Network of listing sites which includes: Rentals.ca, RentFaster.ca,
            RentBoard.ca, Louer.ca, TorontoRentals.com & RentCanada.com.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import ApartmentPage from "./routes/Apartments/ApartmentsPage.tsx";
import SingleListing from "./components/Listing/SingleListing.tsx";
import Listings from "./components/Listing/Listings.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/:id",
    element: <ApartmentPage />,
    children: [
      { index: true, element: <Listings /> },
      { path: ":id", element: <SingleListing /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

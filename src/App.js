'use client'
import ContactInfo from "./Components/TopHeader";
import Navbar from "./Components/Header";
import Carousel from "./Components/Carousel";
import Card from "./Components/Tile1";
import Three from "./Components/Tile2/Three";
import TemplateLayout from "./Components/Tile3/imageandtext";
import Logo from "./Components/Tile4/Logos/Logo";

import WrappedFooter from "./Components/Footer/Footer";





export default function App() {
  return (
    <div>
      <ContactInfo />
      <Navbar />
   <WrappedFooter/>
    </div>
  );
}

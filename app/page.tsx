import Accomodations from "./components/Accomodations";
import Cities from "./components/Cities";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
   <> 
   <Navbar/>
    <Explore/>
    <Cities/>
    <Accomodations/>
    <Footer/>

   </>
  );
}

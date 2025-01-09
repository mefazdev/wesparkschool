 
import Hero from "./components/home/hero";
import Admission from "./components/home/admission";
import About from "./components/home/about";
import PrincipalMessage from "./components/home/principalMessage";
import News from "./components/home/news";
import Amenities from "./components/home/amenities";
export default function Home() {
  return (
   <div className="bg-white" >
       <Hero/>
       <Admission/>

       <About/>
       <PrincipalMessage/>
       <Amenities/>
       <News/>
   </div>
  );
}

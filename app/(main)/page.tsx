import Hero from "../components/home/hero";
import Admission from "../components/home/admission";
import About from "../components/home/about";
import PrincipalMessage from "../components/home/principalMessage";
import News from "../components/home/news";
import Amenities from "../components/home/amenities";

export default  async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news/limit`,{
    // cache: 'no-store', 
  });
  const newses = await res.json();
  return (
   <div className="bg-white" >
       <Hero/>
       <Admission/>

       <About/>
       <PrincipalMessage/>
       <Amenities/>
       <News data={newses}/>
   </div>
  );
}




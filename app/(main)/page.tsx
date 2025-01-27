import Hero from "../components/home/hero";
import Admission from "../components/home/admission";
import About from "../components/home/about";
import PrincipalMessage from "../components/home/principalMessage";
import News from "../components/home/news";
import Amenities from "../components/home/amenities";

export default  async function Home() {

  const newses = await getNewses();
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


async function getNewses() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_PORT}/api/news/limit`,{
    // cache: 'no-store', 
  }); // Replace with your API or server call
   
  const data = await res.json();
 
  return data;
}

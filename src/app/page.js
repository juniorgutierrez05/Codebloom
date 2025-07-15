import Hero from "@/components/Hero/hero";
import Clients from "@/components/Section/clients";
import Philosophy from "@/components/Section/philosophy";
import Solution from "@/components/Section/solution";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Clients/>
    <div id="soluciones">
      <Solution/>
    </div>
    <div id="filosofia">
      <Philosophy/>
    </div>
    
   </div>
  );
}

import Popular from "@/component/Popular";
import Tips from "@/component/Tips";
import TopBrands from "@/component/Top-brands";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-sky-50">
   <Image 
    src="/banner.png" 
    alt="Banner of the website" 
    width={400}
    height={300} 
    style={{ width: '100%', height:'85vh'}} 
/>
<Popular></Popular>
<Tips></Tips>
<TopBrands></TopBrands>
  
    </div>
  );
}

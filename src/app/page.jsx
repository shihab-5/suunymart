import Popular from "@/component/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <div>
   <Image 
    src="/banner.png" 
    alt="Banner of the website" 
    width={400}
    height={300} 
    style={{ width: '100%', height:'85vh'}} 
/>
<Popular></Popular>

  
    </div>
  );
}

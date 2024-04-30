import Image from "next/image"; 
import HomeImage from "/public/home.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return(
      <div>
      <Hero 
      imgData={HomeImage} 
      imgAlt='Car factory' 
      title="At Stantech, we specialize in providing top-notch training, 
      sales, supply, and installation services for essential technologies 
      such as CCTV, solar power, fire alarms, and frontend development. We 
      offer comprehensive support to help you succeed in Africa markets"
      />
       <div className="text-center flex  items-start justify-start mt-20">
        <Image 
        src="/training3.jpg" 
        alt="training image"
        width={500}
        height={500}
        className="ml-48 hidden xl:block"

        />
        <div className="ml-4">
        <h1 className="text-4xl">Why Work with us </h1>
        <ul className="list-disc list-inside text-2xl text-start xl:text-3xl py-2">
        <li className="py-2">Provide hands on training classes with Professional Instructors    
        </li>
        <li className="py-2">Access your loads and provide accurate system design based on 
          energy demand or load requirements
          </li>
          <li className="py-2">
          Expert sales consultations to help you choose the right technologies
           for your needs
          </li>
          <li className="py-2">
          Dedicated customer support team available to address any questions or concerns
          </li>
          <li className="py-2">
          Professional installation services for hassle-free setup and implementation 
          </li>
          <li className="py-2">
          Ongoing maintenance and support to keep your systems running smoothly. 
          </li>
        </ul>
        
        </div>
      </div>  
      </div>
      
    );
}



"use client"
import Image from "next/image";
import admin from "@/public/images/all-img/admin.png"

const WelcomeBlock = () => {
  const data = [
    
   
  ]
  return (
      <div className="flex-1 ">
        

          {
            data.map((item, index) => (
              <div
                className="flex items-center w-full max-w-[130px] p-3 rounded bg-primary-foreground/10 shadow backdrop-blur-sm"
              >
               
              </div>
            ))
          }
      </div>

      

  );
};

export default WelcomeBlock;
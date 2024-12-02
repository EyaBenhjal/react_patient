"use client";

import { CupBar, NoteIcon, CheckShape, Spam } from "@/components/svg";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Listexpert = () => {
  const data = [
    {
      imgSrc: "/images/instructor/instructor01.png", // Corrected path
      name: "Thomas Ellsworth",
      designation: "Graphic Design",
      shapeColor: "#E2FAFF",
      borderRadius: "135px 0 0 0",
    },
    {
      imgSrc: "/images/instructor/instructor02.png",
      name: "Olivia Mia",
      designation: "Web Design",
      shapeColor: "#E4FFE2",
      borderRadius: "135px 115px 115px 0"
  },
  {
    imgSrc: "/images/instructor/instructor03.png",
    name: "Olivia Mia",
    designation: "Web Design",
    shapeColor: "#E4FFE2",
    borderRadius: "135px 115px 115px 0"
},
{
  imgSrc: "/images/instructor/instructor04.png",
  name: "Olivia Mia",
  designation: "Web Design",
  shapeColor: "#E4FFE2",
  borderRadius: "135px 115px 115px 0"
},
{
  imgSrc: "/images/instructor/instructor05.png", // Corrected path
  name: "Thomas Ellsworth",
  designation: "Graphic Design",
  shapeColor: "#E2FAFF",
  borderRadius: "135px 0 0 0",
},
{
  imgSrc: "/images/instructor/instructor06.png",
  name: "Olivia Mia",
  designation: "Web Design",
  shapeColor: "#E4FFE2",
  borderRadius: "135px 115px 115px 0"
},
{
imgSrc: "/images/instructor/instructor07.png",
name: "Olivia Mia",
designation: "Web Design",
shapeColor: "#E4FFE2",
borderRadius: "135px 115px 115px 0"
},
{
imgSrc: "/images/instructor/instructor08.png",
name: "Olivia Mia",
designation: "Web Design",
shapeColor: "#E4FFE2",
borderRadius: "135px 115px 115px 0"
},
{
  imgSrc: "/images/instructor/instructor02.png",
  name: "Olivia Mia",
  designation: "Web Design",
  shapeColor: "#E4FFE2",
  borderRadius: "135px 115px 115px 0"
  },
  {
    imgSrc: "/images/instructor/instructor01.png",
    name: "Olivia Mia",
    designation: "Web Design",
    shapeColor: "#E4FFE2",
    borderRadius: "135px 115px 115px 0"
    },
    
  ];
  
<h1>Browse Featured Experts</h1>
  
  function InstructorCard({ imgSrc, name, designation, shapeColor, borderRadius }) {
    return (
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="instructor__item">
          <div className="instructor__img">
            <div className="instructor__shape" style={{ backgroundColor: shapeColor, borderRadius }} />
            <Link href="/auth/aboutexpert">
              <img src={imgSrc} alt={name} />
            </Link>
          </div>
          <div className="instructor__content">
            <div className="left">
              <span className="designation" style={{ color: "white" }}>{designation}</span>
              <h4 className="name" style={{ color: "white" }}>
                <Link href="/auth/aboutexpert" style={{ color: "white" }}>{name}</Link>
              </h4>
            </div>
            <div className="right">
              <span className="share"><i className="flaticon-share" /></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        item.imgSrc ? (
          <InstructorCard
            key={`instructor-${index}`}
            imgSrc={item.imgSrc}
            name={item.name}
            designation={item.designation}
            shapeColor={item.shapeColor}
            borderRadius={item.borderRadius}
          />
        ) : (
          <div
            key={`reports-state-${index}`}
            className={cn(
              "flex flex-col gap-1.5 p-4 rounded-sm overflow-hidden bg-primary/10  items-start relative before:absolute before:left-1/2 before:-translate-x-1/2 before:bottom-1 before:h-[2px] before:w-9 before:bg-primary/50 dark:before:bg-primary-foreground before:hidden ",
              {}
            )}
          >
          </div>
        )
      ))}
    </>
  );
};
export default Listexpert;

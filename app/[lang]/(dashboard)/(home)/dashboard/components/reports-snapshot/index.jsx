"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReportsSnapshot from "./components/reports-snapshot";
import CountryMap from "./components/country-map";
import UserDeviceReport from "./components/user-device-report";
import UserStats from "./components/user-stats-chart";
import UsersStat from "./components/users-stat";
import ReportsArea from "./components/reports-area";
import DashboardSelect from "@/components/dasboard-select";
import TopTen from "./components/top-ten";
import TopPage from "./components/top-page";
import DatePickerWithRange from "@/components/date-picker-with-range";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Assurez-vous d'avoir cette fonction utils
import { Icon } from "@iconify/react";

const DashboardPageView = ({ trans }) => {
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
      name: "EYA BH",
      designation: "Web Design",
      shapeColor: "#E4FFE2",
      borderRadius: "135px 115px 115px 0"
    },
  ];

  function InstructorCard({ imgSrc, name, designation, shapeColor, borderRadius }) {
    return (
      <div className="col-xl-3 col-lg-4 col-sm-6">
        <div className="instructor__item">
          <div className="instructor__img">
            <div className="instructor__shape" style={{ backgroundColor: shapeColor, borderRadius }} />
            <Link href="\[lang]\(dashboard)\(home)\dashboard\instructor-details.js">
              <img src={imgSrc} alt={name} />
            </Link>
          </div>
          <div className="instructor__content">
            <div className="left">
              <span className="designation">{designation}</span>
              <h4 className="name">
                <Link href="/instructor-details">{name}</Link>
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
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        <div className="text-2xl font-medium text-default-800 ">
        Parcourir les fonctionnalités influences        </div>
        <DatePickerWithRange />
      </div>
      <Card>
        <section className="instructor-area section-pt-120 section-pb-70">
          <div className="container">
            <div className="section__title-wrap">
              <div className="row align-items-center gap-4 gap-md-0">
                <div className="col-md-8">
                  
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
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
                     
                    )}
                  >
                    <span
                      className={cn(
                        "h-[95px] w-[95px] rounded-full bg-primary/40 absolute -top-8 -right-8 ring-[20px] ring-primary/30",
                        
                      )}
                    ></span>
                    <div className={`w-8 h-8 grid place-content-center rounded-full border border-dashed border-${item.color} dark:border-primary-foreground/60`}>
                      
                    </div>
                    <span className="mt-3 text-sm text-default-800 dark:text-primary-foreground font-medium capitalize relative z-10">
                      {item.text}
                    </span>
                   
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      </Card>
    </div>
  );
};

export default DashboardPageView;

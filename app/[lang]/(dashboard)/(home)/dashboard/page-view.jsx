"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EcommerceStats from "./components/ecommerce-stats";
import DatePickerWithRange from "@/components/date-picker-with-range";
const EcommercePageView = ({ trans }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
      <h1>Browse Featured infleunces</h1>

      </div>
      <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <EcommerceStats />
          </div>
      </Card>

      <div className="grid grid-cols-12 gap-6">
        
        <div className="col-span-12 lg:col-span-4">

          
        </div>
      </div>
      <div className="grid grid-cols-12  gap-6">
       
       
      </div>
     
      
        
    </div>
  );
};

export default EcommercePageView;

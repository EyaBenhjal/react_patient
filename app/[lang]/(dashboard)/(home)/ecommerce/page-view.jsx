"use client";

import RevinueChart from "./components/revinue-chart";
import TopBrowserChart from "./components/top-browser-chart";
import TopCustomers from "./components/top-customers";
import VisitorsReportChart from "./components/visitors-chart";
import CustomerStatistics from "./components/customer-statistics";
import Transaction from "./components/transaction";
import Orders from "./components/orders";
import TopCountries from "./components/top-countries";
import Products from "./components/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardSelect from "@/components/dasboard-select";
import EcommerceStats from "./components/ecommerce-stats";
import TopSell from "./components/top-sell";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardDropdown from "@/components/dashboard-dropdown";
import DatePickerWithRange from "@/components/date-picker-with-range";
const EcommercePageView = ({ trans }) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        
        <DatePickerWithRange />
      </div>
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <ExpertStats />
          </div>
        </CardContent>
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

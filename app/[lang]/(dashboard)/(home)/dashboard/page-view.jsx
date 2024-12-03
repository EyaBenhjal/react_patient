import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EcommerceStats from "./components/ecommerce-stats";
import DatePickerWithRange from "@/components/date-picker-with-range";
import PsychologistStats from "./components/ecommerce-stats";

const ProfessionalStatsView = ({ trans }) => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <h1 className="text-2xl font-bold">Statistics Overview</h1>
        <DatePickerWithRange />
      </div>

      {/* Appointment Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Appointments Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            <PsychologistStats />
          </div>
        </CardContent>
      </Card>

      {/* Client Statistics */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <Card>
            <CardHeader>
              <CardTitle>Patient Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {/* Add specific stats for clients, e.g., total clients, average session time */}
                <div className="w-full md:w-1/2">
                  <h2 className="text-lg font-medium">Total Clients</h2>
                  <p className="text-3xl font-bold">120</p>
                </div>
                <div className="w-full md:w-1/2">
                  <h2 className="text-lg font-medium">Average Session Time</h2>
                  <p className="text-3xl font-bold">45 min</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalStatsView;

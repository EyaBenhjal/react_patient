import { Card, CardContent, CardHeader } from "@/components/ui/card";

const primaryColors = [
  {
    name: "primary",
    color: "#28A745", // Vert principal
  },
  {
    name: "primary-100",
    color: "#DFF5E1", // Vert clair
  },
  {
    name: "primary-50",
    color: "#F2FCF5", // Vert très clair
  },
];

const defaultColors = [
  {
    name: "default-950",
    color: "#020617",
  },
  {
    name: "default-900",
    color: "#0F1624",
  },
  {
    name: "default-800",
    color: "#1E293B",
  },
  {
    name: "default-600",
    color: "#475569",
  },
  {
    name: "default-500",
    color: "#64748B",
  },
  {
    name: "default-400",
    color: "#94A3B8",
  },
  {
    name: "default-300",
    color: "#CBD5E1",
  },
  {
    name: "default-200",
    color: "#E2E8F0",
  },
  {
    name: "default-100",
    color: "#F1F5F9",
  },
  {
    name: "default-50",
    color: "#F9FAFB",
  },
];

const ColorPage = () => {
  return (
    <Card>
      <CardHeader>All Colors</CardHeader>
      <CardContent>
        {/* Base Color */}
        <div className="text-lg font-medium text-default-900">Base</div>
        <div className="mt-5 flex flex-wrap gap-2">
          <div className="border border-default-200 rounded w-24">
            <div className="h-12 w-full bg-background border-b border-default-200 rounded-t"></div>
            <div className="p-2">
              <div className="text-sm font-medium text-default-800 mb-[2px]">
                White
              </div>
              <div className="text-xs text-default-500">#FFFFFF</div>
            </div>
          </div>
          <div className="border border-default-200 rounded w-24">
            <div className="h-12 w-full bg-secondary-foreground border-b border-default-200 rounded-t"></div>
            <div className="p-2">
              <div className="text-sm font-medium text-default-800 mb-[2px]">
                Dark
              </div>
              <div className="text-xs text-default-500">#000000</div>
            </div>
          </div>
        </div>

        {/* Primary Color */}
        <div className="text-lg font-medium text-default-900 mt-9 mb-6">
          Primary
        </div>
        <div className="flex flex-wrap gap-2">
          {primaryColors.map((item, index) => (
            <div
              className="border border-default-200 rounded "
              key={`primary-color-${index}`}
            >
              <div
                className={`h-14 w-full bg-${item.name} border-b border-default-200 min-w-[100px] rounded-t`}
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="p-2">
                <div className="text-sm font-medium text-default-800 mb-[2px]">
                  {item.name}
                </div>
                <div className="text-xs text-default-500">{item.color}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Default Color */}
        <div className="text-lg font-medium text-default-900 mt-9 mb-6">
          Default
        </div>
        <div className="flex flex-wrap gap-2">
          {defaultColors.map((item, index) => (
            <div
              className="border border-default-200 rounded "
              key={`default-color-${index}`}
            >
              <div
                className={`h-14 w-full bg-${item.name} border-b border-default-200 rounded-t`}
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="p-2">
                <div className="text-sm font-medium text-default-800 mb-[2px]">
                  {item.name}
                </div>
                <div className="text-xs text-default-500">{item.color}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPage;

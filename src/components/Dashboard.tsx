import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// Gas emission data matching the table format from the image
const gasData = [
  {
    id: 1,
    gasName: "SO₂",
    unit: "µg/m³",
    cpcbStandard: 80,
    droneReading: 95.2,
    groundReading: 92.1,
  },
  {
    id: 2,
    gasName: "NO₂", 
    unit: "µg/m³",
    cpcbStandard: 80,
    droneReading: 62.8,
    groundReading: 68.4,
  },
  {
    id: 3,
    gasName: "CO",
    unit: "mg/m³",
    cpcbStandard: 4,
    droneReading: 2.1,
    groundReading: 2.8,
  },
  {
    id: 4,
    gasName: "PM2.5",
    unit: "µg/m³", 
    cpcbStandard: 60,
    droneReading: 78.5,
    groundReading: 84.2,
  },
  {
    id: 5,
    gasName: "PM10",
    unit: "µg/m³",
    cpcbStandard: 100,
    droneReading: 89.3,
    groundReading: 96.7,
  },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Drone Industry Emission Monitoring Dashboard
          </h1>
          <p className="text-gray-600">
            Real-time air quality monitoring with drone and ground sensor comparison
          </p>
        </div>

        {/* Main Dashboard Card - Table Format */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Air Quality Measurements</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-4 font-semibold text-gray-900">Gas</th>
                      <th className="text-left p-4 font-semibold text-gray-900">CPCB Standard</th>
                      <th className="text-left p-4 font-semibold text-gray-900">Drone Reading</th>
                      <th className="text-left p-4 font-semibold text-gray-900">Ground Reading</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gasData.map((gas, index) => {
                      const isDroneAboveLimit = gas.droneReading > gas.cpcbStandard;
                      const isGroundAboveLimit = gas.groundReading > gas.cpcbStandard;
                      return (
                        <tr 
                          key={gas.id} 
                          className={`border-b border-gray-200 ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }`}
                        >
                          <td className="p-4">
                            <div className="font-medium text-gray-900">{gas.gasName}</div>
                          </td>
                          <td className="p-4">
                            <div className="text-gray-700">
                              {gas.cpcbStandard} {gas.unit}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <span 
                                className={`font-semibold ${
                                  isDroneAboveLimit 
                                    ? 'text-red-600' 
                                    : 'text-green-600'
                                }`}
                              >
                                {gas.droneReading} {gas.unit}
                              </span>
                              {isDroneAboveLimit && (
                                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                                  EXCEEDED
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <span 
                                className={`font-semibold ${
                                  isGroundAboveLimit 
                                    ? 'text-red-600' 
                                    : 'text-green-600'
                                }`}
                              >
                                {gas.groundReading} {gas.unit}
                              </span>
                              {isGroundAboveLimit && (
                                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                                  EXCEEDED
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              {gasData.map((gas) => {
                const isDroneAboveLimit = gas.droneReading > gas.cpcbStandard;
                const isGroundAboveLimit = gas.groundReading > gas.cpcbStandard;
                const hasAnyExceeded = isDroneAboveLimit || isGroundAboveLimit;
                return (
                  <div key={gas.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-lg text-gray-900">{gas.gasName}</h3>
                      {hasAnyExceeded && (
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-medium">
                          EXCEEDED
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">CPCB Standard:</span>
                        <span className="font-medium">{gas.cpcbStandard} {gas.unit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Drone Reading:</span>
                        <span 
                          className={`font-semibold ${
                            isDroneAboveLimit 
                              ? 'text-red-600' 
                              : 'text-green-600'
                          }`}
                        >
                          {gas.droneReading} {gas.unit}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Ground Reading:</span>
                        <span 
                          className={`font-semibold ${
                            isGroundAboveLimit 
                              ? 'text-red-600' 
                              : 'text-green-600'
                          }`}
                        >
                          {gas.groundReading} {gas.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Status Summary */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-green-200 bg-green-50">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {gasData.filter(gas => gas.droneReading <= gas.cpcbStandard && gas.groundReading <= gas.cpcbStandard).length}
                </div>
                <div className="text-sm text-green-700">Both Within Limits</div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {gasData.filter(gas => gas.droneReading > gas.cpcbStandard || gas.groundReading > gas.cpcbStandard).length}
                </div>
                <div className="text-sm text-red-700">Any Exceeding</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {gasData.filter(gas => Math.abs(gas.droneReading - gas.groundReading) > gas.cpcbStandard * 0.1).length}
                </div>
                <div className="text-sm text-orange-700">Reading Variance</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{gasData.length}</div>
                <div className="text-sm text-blue-700">Total Parameters</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
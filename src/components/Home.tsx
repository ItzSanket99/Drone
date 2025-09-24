import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BarChart3, Activity, MapPin, AlertTriangle } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Drone Industry Emission Monitoring
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Real-time air quality monitoring with advanced drone technology and ground sensor comparison. 
              Monitor SO₂, CO, NO, and NO₂ emissions with precision and reliability.
            </p>
            <button
              onClick={() => onNavigate("dashboard")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Key Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Continuous monitoring of air quality parameters with instant updates
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">CPCB Compliance</h3>
              <p className="text-gray-600 text-sm">
                Compare readings against CPCB and SPCB standard limits
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Dual Sensors</h3>
              <p className="text-gray-600 text-sm">
                Compare drone and ground-based sensor readings for accuracy
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Alert System</h3>
              <p className="text-gray-600 text-sm">
                Instant alerts when emission levels exceed regulatory standards
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">Gas Parameters Monitored</div>
              <div className="text-sm text-gray-500 mt-1">SO₂, CO, NO, NO₂</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Real-time Monitoring</div>
              <div className="text-sm text-gray-500 mt-1">Continuous data collection</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">2</div>
              <div className="text-gray-600">Sensor Types</div>
              <div className="text-sm text-gray-500 mt-1">Drone & Ground-based</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
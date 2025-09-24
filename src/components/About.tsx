import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield, Zap, Target, Users } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About AirWatch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the future of environmental monitoring with advanced drone technology 
            and real-time air quality assessment solutions.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide accurate, real-time air quality monitoring solutions that help industries 
              maintain compliance with environmental regulations while protecting public health 
              and supporting sustainable development.
            </p>
          </CardContent>
        </Card>

        {/* Core Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Reliability</h3>
                <p className="text-gray-600 text-sm">
                  Consistent and accurate monitoring you can trust
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Cutting-edge technology for environmental protection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Precision</h3>
                <p className="text-gray-600 text-sm">
                  Accurate measurements for informed decisions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Working together for a cleaner environment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Technology Overview */}
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Technology Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Dual Sensor Approach
              </h3>
              <p className="text-gray-700">
                Our system combines drone-based aerial monitoring with ground-based sensors 
                to provide comprehensive air quality data. This dual approach ensures accuracy 
                and helps identify emission sources at different altitudes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                CPCB/SPCB Compliance
              </h3>
              <p className="text-gray-700">
                All measurements are compared against Central Pollution Control Board (CPCB) 
                and State Pollution Control Board (SPCB) standards to ensure regulatory compliance 
                and environmental protection.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Real-time Monitoring
              </h3>
              <p className="text-gray-700">
                Continuous monitoring of key pollutants including SO₂, CO, NO, and NO₂ 
                with instant alerts when levels exceed regulatory limits.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Monitored Parameters */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Monitored Parameters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-1">SO₂ (Sulfur Dioxide)</h4>
                  <p className="text-sm text-red-700">
                    Primary pollutant from industrial processes and fuel combustion
                  </p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-1">CO (Carbon Monoxide)</h4>
                  <p className="text-sm text-blue-700">
                    Toxic gas produced by incomplete combustion processes
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-1">NO (Nitric Oxide)</h4>
                  <p className="text-sm text-green-700">
                    Precursor to ground-level ozone formation
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-1">NO₂ (Nitrogen Dioxide)</h4>
                  <p className="text-sm text-purple-700">
                    Major contributor to smog and respiratory issues
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
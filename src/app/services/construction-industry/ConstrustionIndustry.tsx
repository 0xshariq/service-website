
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ConstructionIndustry() {
  const recentJobs = [
    "HOUSE COOK",
    "Supervisor Aluminum Factory",
    "Networking and Camera Technicians - 4 Nos",
    "HOUSE DRIVER RETURN - HAIL, SAUDI ARABIA",
    "WELDERS - 3G/6G (MIG)",
  ];

  const positions = [
    "Civil Engineers (Structural)",
    "Civil Engineers (Design)",
    "Civil Engineers (Field Work)",
    "Quantity Surveyors",
    "Architects (Planners)",
    "Architects (Landscape)",
    "Architects (Town Planning)",
    "Land Surveyors",
    "Civil Engineers (CAD/CAM)",
    "Civil Supervisors",
    "Shuttering foreman",
    "Concreting foreman",
    "General foreman",
    "Interior Designers",
    "Draftsman (CAD)",
    "Laboratory Technician",
    "Store Keepers",
  ];

  const technicalSkills = [
    "Designing & Technical Analysis",
    "Structural works (Design & Execution)",
    "Architectural Planning Tendering / Bidding",
    "Inventory, Quantity Surveying",
    "Quality Control, Quality Assurance",
    "Computer Exposures -CAD/CAM, PRISM/PRIMVERA",
    "Various advanced engineering software",
    "Scheduling, PERT/CPM Techniques",
    "Land Surveying, Layout, Leveling",
    "Topographical Surveying, Landscaping",
    "Architectural / Interior drawings and perspectives",
    "Reinforced Cement Concrete Design Detailing",
    "Bar Bending Schedules",
    "Road and Bridges Works",
    "General Supervision, R.C.C",
    "Structural & finishing works",
    "Drainage & water supply & Electrical Works",
    "Operation and Maintenance (Routine and Preventive) works",
  ];

  const academicBackground = [
    "M. Tech. (Structural)",
    "B. Tech in Civil Engineering",
    "B.E. Civil",
    "Diploma in Civil",
    "Diploma in Surveying",
    "BE Architecture (Landscaping Specialization)",
    "BE Arch (specialization in Town Planning/Hydraulic Structures / Dams & Transportation)",
    "Computer Exposures (CAD/CAM)",
    "Advanced Computerized Design & Planning knowledge",
    "Foundation Engineering & Soil Engineering (Geotech)",
    "Transportation Engineering",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-[#FF9933] py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <Breadcrumb className="mb-4 sm:mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-gray-800 hover:text-gray-600"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-gray-800">
                  Construction Industry
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            CONSTRUCTION INDUSTRY
          </h1>
          <div className="w-12 h-1 bg-white mt-4"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Positions Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Available Positions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {positions.map((position, index) => (
                      <li key={index} className="text-gray-600">
                        {position}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Technical Skills Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    TECHNICAL SKILLS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {technicalSkills.map((skill, index) => (
                      <li key={index} className="text-gray-600">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Academic Background Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    ACADEMIC PROFESSIONAL BACKGROUND
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {academicBackground.map((qualification, index) => (
                      <li key={index} className="text-gray-600">
                        {qualification}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Submit Resume Card */}
              <Card className="bg-white shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <Link href="/resume">
                      <Image
                        src="https://www.niceoverseasservice.com/wp-content/uploads/2022/02/submit-your-resume-1.jpg"
                        alt="Submit your resume"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Jobs Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    Recent Jobs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recentJobs.map((job, index) => (
                      <li key={index}>
                        <Link
                          href={`/jobs/${job.toLowerCase().replace(/ /g, "-")}`}
                          className="text-[#FF6600] hover:text-[#FF8533] hover:underline"
                        >
                          {job}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

export default function GemsJewellery() {
  const recentJobs = [
    "HOUSE COOK",
    "Supervisor Aluminum Factory",
    "Networking and Camera Technicians - 4 Nos",
    "HOUSE DRIVER RETURN - HAIL, SAUDI ARABIA",
    "WELDERS - 3G/6G (MIG)",
  ];

  const personnel = [
    "Plant Managers",
    "Production Managers",
    "Metallurgical Engineers",
    "Technical Engineers",
    "Technical Consultants",
    "Quality Assurance Managers",
    "Casting Engineers",
    "Refinery Engineers",
    "Production Coordinators",
    "Production Supervisors",
    "Quality Control Supervisors",
    "Diamond Asserters",
    "Designers",
    "Stamping Technicians",
    "Casting Technicians",
    "Supervisor Technical Operations",
    "Stone Treasurers",
    "Model Making Supervisor",
    "Stone Setting Supervisors",
    "Casting Supervisors",
    "Stone Treasury Supervisor",
    "Setting Supervisors",
  ];

  const skilledCategories = [
    "Goldsmiths",
    "Model Makers",
    "Wax Model Makers",
    "Stone Setters",
    "Pre-cutters",
    "Filers / Finishers",
    "Rubber Cutters",
    "Rubber Caster",
    "Wax Setters",
    "Diamond Setters",
    "Polishers",
    "Wax Injectors",
    "Rubber Mold Cutters",
    "Dye Cutters",
    "Grinders",
    "Tumbler operators",
  ];

  const technicalQualifications = [
    { course: "F.F.I.G.", institute: "Fellow of Forum of Indian Gemologists." },
    { course: "N.I.F.T.", institute: "" },
  ];

  const niftCourses = [
    {
      course: "Dip. in Gemology",
      institute: "Gemological Institute of India, Bombay.",
    },
    {
      course: "Dip. in Diamond Grading",
      institute: "Indian Diamond Institute, Surat.",
    },
    {
      course: "Dip. in Diamonds",
      institute: "Gem artisan Training School, Jaipur.",
    },
    { course: "Jewellery Designing", institute: "S.N.D.T. Mumbai." },
    {
      course: "Inter Certificate in Drawing",
      institute: "Maharashtra Govt. Mumbai.",
    },
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
                  Gems & Jewellery Industries
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">
            GEMS & JEWELLERY INDUSTRIES
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
              {/* Categories of Personnel */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    CATEGORIES OF PERSONNEL
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personnel.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Skilled Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    SKILLED CATEGORIES
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skilledCategories.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Academic Background */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    ACADEMIC PROFESSIONAL BACKGROUND
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p className="text-gray-600">
                    Master of Diamond Technology, M. D. Tech; from Indian
                    Diamond Institute, Surat, India. (An autonomous Institute
                    under Ministry of Commerce, Govt. of India.), A.C.D.T.
                    (Advance Course in Diamond Technology), B. Tech. / M. Tech.
                    Graduation /Post Graduate degree in Mineral Processing /
                    Metallurgy, from (The Mining Geological & Metallurgical
                    Institute of India (M.M.G.I) & (Indian Institute of Mineral
                    Engineers (M.I.E.E.) Degree/ Diploma in Diamond, Stone
                    Assortment & Marketing, (Bombay Diamond Merchant Association
                    & Indo American Society Mumbai.)
                  </p>
                </CardContent>
              </Card>

              {/* Technical Qualifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    TECHNICAL QUALIFICATION (JEWELLERY INSTITUTES)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">COURSES</TableHead>
                        <TableHead>INSTITUTES</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {technicalQualifications.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {item.course}
                          </TableCell>
                          <TableCell>{item.institute}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* NIFT Courses */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    NATIONAL INSTITUTE OF FASHION TECHNOLOGY, DELHI.
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">COURSES</TableHead>
                        <TableHead>INSTITUTES</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {niftCourses.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">
                            {item.course}
                          </TableCell>
                          <TableCell>{item.institute}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <p className="mt-4 text-sm text-gray-500">
                    (Cutting & polishing, colored, Ministry of Commerce, Govt.
                    of India, Gems Stones Carving)
                  </p>
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

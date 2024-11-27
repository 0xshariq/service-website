import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const recentJobs = [
  "HOUSE COOK",
  "Supervisor Aluminum Factory",
  "Networking and Camera Technicians - 4 Nos",
  "HOUSE DRIVER RETURN - HAIL, SAUDI ARABIA",
  "WELDERS - 3G/6G (MIG)",
]

const principles = [
  "CUSTOMER FIRST",
  "QUALITY",
  "HONESTY",
  "INTEGRITY",
  "TRUST",
  "PROFESSIONALISM",
]

export function VisionAndMission() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#FF9933] py-8 sm:py-12 px-4">
        <div className="container mx-auto">
          <Breadcrumb className="mb-4 sm:mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-gray-800 hover:text-gray-600">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-gray-800">
                  Vision and Mission
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            VISION AND MISSION
          </h1>
          <div className="w-12 h-1 bg-white mt-4"></div>
        </div>
      </div>

      <div className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Our vision is to be become a leading manpower consulting firm for our Search, Sourcing and outsourcing Process mission. Our success is we aim to become the most preferred choice for our clients and candidates with clear-cut & transparent communication.
                  </p>
                  <div>
                    <p className="text-gray-600 mb-2">
                      Our vision focuses on the following principles:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {principles.map((principle, index) => (
                        <React.Fragment key={principle}>
                          <span className="text-blue-600 font-medium">
                            {principle}
                          </span>
                          {index < principles.length - 1 && (
                            <span className="text-blue-600">|</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To become the trusted partner with a customer –Centric approach with our core values of Of Trust, Honesty, Integrity, Quality and professionalism. We work towards making the hiring process simpler for our Global Partners to close a position in a set time frame to built a a meaning relationship.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="overflow-hidden">
                <Link href="/resume" className="block">
                  <Image
                    src="https://www.niceoverseasservice.com/wp-content/uploads/2022/02/submit-your-resume-1.jpg"
                    alt="Submit Your Resume - Your Career gateway to find a right job as per your requirement"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </Link>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Recent Jobs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recentJobs.map((job) => (
                      <li key={job}>
                        <Link 
                          href={`/jobs/${job.toLowerCase().replace(/ /g, '-')}`}
                          className="text-[#FF6600] hover:text-[#FF8533] transition-colors"
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
  )
}


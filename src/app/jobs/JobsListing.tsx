import jobsData from "@/data/jobs.json"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Calendar, MapPin, Clock, Briefcase, Building2 } from 'lucide-react'
interface Job {
  id: string
  title: string
  salary: string
  company: string
  location: string
  position?: string | number
  experience?: string
  jobInformation: {
    description?: string
    requirements?: string[]
    age?: string
    workingHours?: string
    additionalInfo?: string[]
    interview?: {
      date: string
      location: string
    }
    contract?: string
    benefits?: string[]
  }
}

export function JobsListing() {
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
                  Jobs Listing
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            JOBS LISTING
          </h1>
          <div className="w-12 h-1 bg-white mt-4"></div>
        </div>
      </div>

      <div className="flex-grow bg-gray-50 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {jobsData.map((job: Job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function JobCard({ job }: { job: Job }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="border-b bg-gray-50">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-[#FF6600] text-xl sm:text-2xl">
              {job.title}
            </CardTitle>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                <span>{job.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <Button 
            className="bg-[#FF6600] hover:bg-[#FF8533] text-white w-full sm:w-auto"
            asChild
          >
            <a href={`/jobs/${job.id}/apply`}>Apply Now</a>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-gray-400" />
              <div>
                <p className="text-sm font-medium">Experience</p>
                <p className="text-sm text-gray-600">{job.experience}</p>
              </div>
            </div>
            {job.jobInformation.workingHours && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm font-medium">Working Hours</p>
                  <p className="text-sm text-gray-600">{job.jobInformation.workingHours}</p>
                </div>
              </div>
            )}
            {job.jobInformation.contract && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm font-medium">Contract</p>
                  <p className="text-sm text-gray-600">{job.jobInformation.contract}</p>
                </div>
              </div>
            )}
            <div>
              <p className="text-sm font-medium">Salary</p>
              <p className="text-sm text-gray-600">{job.salary}</p>
            </div>
          </div>

          {job.jobInformation.interview && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Walk-in Interview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{job.jobInformation.interview.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{job.jobInformation.interview.location}</span>
                </div>
              </div>
            </div>
          )}

          {job.jobInformation.description && (
            <div>
              <h3 className="font-medium mb-2">Job Description</h3>
              <p className="text-sm text-gray-600">{job.jobInformation.description}</p>
            </div>
          )}

          {job.jobInformation.requirements && (
            <div>
              <h3 className="font-medium mb-2">Requirements</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {job.jobInformation.requirements.map((req: string, index: number) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          )}

          {job.jobInformation.benefits && (
            <div>
              <h3 className="font-medium mb-2">Benefits</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {job.jobInformation.benefits.map((benefit: string, index: number) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {job.jobInformation.additionalInfo && (
            <div>
              <h3 className="font-medium mb-2">Additional Information</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {job.jobInformation.additionalInfo.map((info: string, index: number) => (
                  <li key={index}>{info}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}


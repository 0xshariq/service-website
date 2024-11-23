import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Job {
  title: string
  company: string
  location: string
  salary: string
  experience: string
  additionalDetails?: string
}

const currentJobs: Job[] = [
  {
    title: "MAINTENANCE HEAD",
    company: "AL GHANDOURA PLASTIC FACTORY",
    location: "JEDDAH, K.S.A.",
    salary: "Salary Negotiable",
    experience: "5-6 Years Experience",
  },
  {
    title: "CHIEF ACCOUNTANT",
    company: "Prima International",
    location: "Riyadh, K.S.A.",
    salary: "Salary Negotiable",
    experience: "15-20 Years Experience",
    additionalDetails: "Bakery background,FMCG",
  },
]

export function CurrentJobs() {
  return (
    <div className="mt-32 mb-32">
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          CURRENT JOBS
          <div className="mt-2 h-1 w-12 bg-orange-500" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid divide-y divide-gray-200">
          {currentJobs.map((job, index) => (
            <div
              key={index}
              className={cn(
                "grid gap-4 py-6",
                "grid-cols-1 md:grid-cols-3"
              )}
            >
              <div className="space-y-1">
                <h3 className={cn(
                  "font-medium text-orange-500",
                  "transition-colors duration-200 hover:text-[#FF9900] cursor-pointer"
                )}>
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {job.company}, {job.location}
                </p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{job.salary}</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600">{job.experience}</p>
                {job.additionalDetails && (
                  <p className="text-sm text-gray-600">{job.additionalDetails}</p>
                )}
                <Link
                  href="#"
                  className={cn(
                    "text-sm text-orange-500",
                    "hover:text-orange-600"
                  )}
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
    </div>
  )
}


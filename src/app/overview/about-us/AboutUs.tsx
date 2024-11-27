import Image from "next/image"
import Link from "next/link"

const recentJobs = [
  "HOUSE COOK",
  "Supervisor Aluminum Factory",
  "Networking and Camera Technicians - 4 Nos",
  "HOUSE DRIVER RETURN - HAIL, SAUDI ARABIA",
  "WELDERS - 3G/6G (MIG)",
]

const areasOfExpertise = [
  {
    title: "Civil, Mechanical & Electrical Engg.",
    description: "Mechanical, Civil, Electrical, Electro-Mechanical, Pipeline, Marine, Rd hotels, resorts"
  },
  {
    title: "Hospitality Industry",
    description: "Hotels, Motels, Resorts, Restaurants, Cruises, Catering, Aviation"
  },
  {
    title: "Medical",
    description: "Hospitals, Nursing Homes, Old Age Homes"
  },
  {
    title: "Information Technology",
    description: "Hardware, Software, Telecommunications"
  },
  {
    title: "Oil & Gas Field Operation Personnel",
    description: "Mechanical, Civil, Electrical, Electro-Mechanical, Pipeline, Marine, Road"
  },
  {
    title: "General",
    description: "Administration, Production, Maintenance, Technical"
  },
  {
    title: "Banking, Management & Finance Professionals",
    description: ""
  },
  {
    title: "Aviation & Aeronautical Engineers",
    description: ""
  }
]

export function AboutUs() {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FF0000] mb-8 sm:mb-12">ABOUT US</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="border-2 border-gray-300 p-2 w-full max-w-[250px]">
                  <Image
                    src="http://www.niceoverseasservice.com/wp-content/uploads/2022/02/Khan-Mohammad-Qasim-Al-qasimi-248x300-1.jpg"
                    alt="Khan Mohammad Qasim Al-qasimi"
                    width={250}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center mt-2 font-medium">Khan Mohammad Qasim Al-qasimi</p>
                <p className="text-center text-gray-600">Managing Director</p>
              </div>
              
              <div className="w-full md:w-2/3 text-gray-600 space-y-4">
                <p>
                  <span className="font-medium">Nice Overseas Service (NOS)</span> is one among and leading HRD & Personnel Recruitment Agency in India, the Middle East and Far East Asia, offering Professional and Specialist recruitment Consultancy services. NOS is already recognized as highly successful in providing its clients, reliable, qualified and cost effective solutions to their HRD & Personnel needs either from our comprehensive database or through creative advertisements, extensive search & selection.
                </p>
                
                <p>
                  NOS were established and are managed by professionals having extensive experience in HRD, IT Industry Marketing, Financial Management, Constructions Industries etc. with the entire necessary infrastructure.
                </p>
                
                <p>
                  NOS is registered and Licensed by the Government of India for conducting international recruitment services. <span className="font-medium">(Registered No. B-0771/MUM/PER/1000+/5/7489/2006)</span>.
                </p>
              </div>
            </div>

            <div className="text-gray-600 space-y-6">
              <p>
                At NOS we want to understand your goals, your needs and how the inevitable changes of this business are affecting your world. With such an understanding we then match the right talent to deliver successful results.
              </p>
              
              <p>
                Aside from being high performance... we&apos;re also the nicest people you&apos;ll ever meet.
              </p>
              
              <p>
                <span className="font-medium">Our mission</span> is to build a bridge between employee and employer. We achieved this status by the dedicated accomplishment of a highly motivated, professional and experience team who are highly dedicated. Our past long professional experience helped us boost our confident to face any kind of challenges of this industry, we are fully aware the relationship build on trust will last long and good yield. We wish to become a part of your success other than being only a Manpower Recruiting Agent We assures you at our utmost honesty and Business Trust. The choice you make by appointing us your Manpower Recruiting Consultant would not be a disappointment to you later. At NOS, we work as a family that ensures you to reach the target in time and to your utmost satisfaction. This absolute commitment to you to meet your expectation and confidence that has in us. Going by our record track of accomplishment and our ever growing list of prestigious and satisfied clients, we are confident that you too will choose us to source your Manpower requirements because <span className="font-medium">&quot;We deliver, no matter what&quot;</span>.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-medium text-gray-700">NOS Areas of Expertise:</h2>
              <p className="text-gray-600">The various disciplines in which we offer our Consultancy for Recruitment services are listed below;</p>
              
              <div className="space-y-6">
                {areasOfExpertise.map((area) => (
                  <div key={area.title}>
                    <h3 className="font-medium text-gray-700">{area.title}</h3>
                    {area.description && (
                      <p className="text-gray-600">{area.description}</p>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-gray-600">
                Also GENERAL MANAGEMENT & MARKETING PROFESSIONALS, INDUSTRIAL PLANNING & PRODUCTION ENGINEERS, MARINE & NAVIGATIONAL ENGINEERS, GEMS & JEWELLERY INDUSTRY
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white shadow-lg">
              <Link href="/resume" className="block">
                <Image
                  src="https://www.niceoverseasservice.com/wp-content/uploads/2022/02/submit-your-resume-1.jpg"
                  alt="Submit Your Resume"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </Link>
            </div>

            <div className="bg-white shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Jobs</h2>
              <ul className="space-y-3">
                {recentJobs.map((job) => (
                  <li key={job}>
                    <Link 
                      href={`/jobs/${job.toLowerCase().replace(/ /g, '-')}`}
                      className="text-[#FF6600] hover:text-[#FF8533]"
                    >
                      {job}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


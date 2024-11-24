export function AboutUs() {
  return (
    <div className="bg-white my-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* About Company Section */}
          <div className="flex-1">
            <h2 className="text-[28px] font-bold text-[#FF6600] mb-8">
              ABOUT COMPANY
            </h2>
            <div className="space-y-6 text-[15px] text-gray-600 leading-relaxed">
              <p>
                <b>Nice Overseas Service</b>{" "}
                <span className="text-gray-700">(NOS)</span> is one among and
                leading HRD & Personnel Recruitment Agency in India, the Middle
                East and Far East Asia, offering Professional and Specialist
                recruitment Consultancy services. NOS is already recognized as
                highly successful in providing its clients, reliable, qualified
                and cost effective solutions to their HRD & Personnel needs
                either from our comprehensive database or through creative
                advertisements, extensive search & selection.
              </p>

              <p>
                NOS were established and are managed by professionals having
                extensive experience in HRD, IT Industry Marketing, Financial
                Management, Constructions Industries etc. with the entire
                necessary infrastructure.
              </p>

              <p>
                NOS is registered and Licensed by the Government of India for
                conducting international recruitment services.{" "}
                <span className="text-gray-700">
                 <b> (Registered No. B-0771/MUM/PER/1000+/5/7489/2006)</b>
                </span>
                .
              </p>

              <p>
                At NOS we want to understand your goals, your needs and how the
                inevitable changes of this business are affecting your world.
                With such an understanding we then match the right talent to
                deliver successful results.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="flex-1">
            <h2 className="text-[28px] font-bold text-[#FF6600] mb-8">
              WHY CHOOSE US
            </h2>
            <div className="space-y-6 text-[15px] text-gray-600 leading-relaxed">
              <p>
                Our staff works with dedication in delivering the best of their
                responsibilities thus confirming to a dedicated team work.
              </p>

              <p>
                We maintain a proactive and ethical approach in identifying and
                understanding the expectations of our client.
              </p>

              <p>
                We provide better services within the stipulated time frame for
                the satisfaction of our client.
              </p>

              <p>
                We have a team of well qualified and experienced technical
                personnel and professionals to expedite execution of cumbersome
                formalities.
              </p>

              <p>
                We are the most reliable source of manpower providing our
                services at the lowest possible cost thus being cost effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

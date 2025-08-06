export default function Services() {
    return (
      <section id="services" className="bg-black text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Service 1 */}
            <div className="bg-[#111] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                Product Strategy
              </h3>
              <p className="text-gray-300 text-sm">
                We collaborate with your team to identify opportunities and align technical
                solutions with business goals.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-[#111] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                UI/UX Design
              </h3>
              <p className="text-gray-300 text-sm">
                We create intuitive, beautiful user experiences rooted in thoughtful design principles.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-[#111] p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                Engineering
              </h3>
              <p className="text-gray-300 text-sm">
                Our engineers bring ideas to life through scalable, secure, and efficient code across web and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
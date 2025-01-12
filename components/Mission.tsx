export default function Mission() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <p>
              We believe in the power of education to transform lives and
              communities. Our programs focus on providing access to quality
              education for all.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Health</h3>
            <p>
              We work to improve health outcomes in underserved communities by
              providing access to healthcare services and promoting healthy
              lifestyles.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Community Development
            </h3>
            <p>
              We empower communities to build sustainable futures through
              economic development initiatives and leadership training programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

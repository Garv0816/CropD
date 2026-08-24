const About = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              🌱 Smart Agriculture
            </span>

            <h1 className="text-5xl font-extrabold text-gray-800 mt-6 leading-tight">
              About <span className="text-green-600">CropD</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              CropD is an AI-powered crop disease detection platform designed to
              help farmers identify plant diseases quickly and accurately.
              Using modern Machine Learning and Computer Vision, our mission is
              to reduce crop losses, improve productivity, and support
              sustainable farming practices.
            </p>

            <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
              alt="Farmer in field"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Our Mission
          </h2>

          <p className="text-center mt-6 text-gray-600 text-lg max-w-4xl mx-auto leading-8">
            We believe technology should empower every farmer. CropD combines
            artificial intelligence with agriculture to provide instant disease
            detection, helping farmers make informed decisions, reduce pesticide
            usage, and maximize crop yield.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <div className="bg-green-50 p-8 rounded-2xl shadow">
              <div className="text-5xl">🌾</div>
              <h3 className="text-2xl font-bold mt-4">Healthy Crops</h3>
              <p className="text-gray-600 mt-3">
                Early disease detection helps improve crop quality and increase
                harvest productivity.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow">
              <div className="text-5xl">🤖</div>
              <h3 className="text-2xl font-bold mt-4">AI Powered</h3>
              <p className="text-gray-600 mt-3">
                Advanced machine learning models provide fast and reliable
                disease predictions.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl shadow">
              <div className="text-5xl">🌍</div>
              <h3 className="text-2xl font-bold mt-4">Sustainable Farming</h3>
              <p className="text-gray-600 mt-3">
                Reducing unnecessary pesticide use while promoting eco-friendly
                agricultural practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Founder */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src="/myphoto.jpg"
              alt="Founder"
              className="w-80 h-80 object-cover rounded-full border-8 border-white shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold">Meet the Developer</h2>

            <p className="mt-6 text-lg leading-8 text-green-100">
              Hello! I'm the creator of CropD. My passion for web development,
              artificial intelligence, and agriculture inspired me to build a
              platform that can make disease detection accessible to everyone.
            </p>

            <p className="mt-5 text-lg leading-8 text-green-100">
              CropD is built using React, Node.js, Express, and AI technologies
              to provide farmers with a simple, fast, and user-friendly
              experience.
            </p>

            <div className="flex gap-6 mt-8">
              <div>
                <h3 className="text-3xl font-bold">95%</h3>
                <p>Detection Accuracy</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">24/7</h3>
                <p>Available</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">AI</h3>
                <p>Powered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Our Journey
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl shadow-lg hover:scale-105 duration-300"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl shadow-lg hover:scale-105 duration-300"
              alt=""
            />

            <img
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80"
              className="rounded-2xl shadow-lg hover:scale-105 duration-300"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white text-center">
        <h2 className="text-4xl font-bold">
          Let's Build Smarter Agriculture Together
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-green-100">
          Join CropD and experience AI-powered crop disease detection that helps
          farmers protect their crops and improve agricultural productivity.
        </p>

        <button className="mt-10 px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-green-100 transition">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
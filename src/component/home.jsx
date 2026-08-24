const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
            Crop Disease
            <span className="text-green-600"> Detection </span>
            
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Detect diseases in your crops instantly using Artificial
            Intelligence. Upload a crop image and get accurate disease
            predictions to protect your farming.
          </p>

          <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg">
            Detect Disease
          </button>
        </div>


        {/* Tomato Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80"
            alt="Tomato Crop"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>

      </section>


      {/* Upload Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">

        <div className="bg-white shadow-xl rounded-3xl p-10 border">

          <h2 className="text-3xl font-bold text-center text-gray-800">
            Upload Crop Image
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Upload a clear image of your crop leaf to detect possible diseases.
          </p>


          <div className="mt-8 flex flex-col items-center">

            <label
              className="w-full h-64 border-2 border-dashed border-green-400 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-green-50 transition"
            >

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>


              <p className="mt-4 text-gray-600">
                Click to upload crop image
              </p>


              <input
                type="file"
                className="hidden"
                accept="image/*"
              />

            </label>


            <button className="mt-6 bg-green-600 text-white px-10 py-3 rounded-xl font-semibold hover:bg-green-700">
              Analyze Image
            </button>

          </div>

        </div>

      </section>


      {/* Features */}
      <section className="bg-green-600 text-white py-16">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

          <div className="text-center">
            <h3 className="text-3xl">🤖</h3>
            <h4 className="text-xl font-bold mt-3">
              AI Detection
            </h4>
            <p className="mt-2 text-green-100">
              Machine learning based disease prediction.
            </p>
          </div>


          <div className="text-center">
            <h3 className="text-3xl">🌱</h3>
            <h4 className="text-xl font-bold mt-3">
              Healthy Crops
            </h4>
            <p className="mt-2 text-green-100">
              Protect crops with early detection.
            </p>
          </div>


          <div className="text-center">
            <h3 className="text-3xl">⚡</h3>
            <h4 className="text-xl font-bold mt-3">
              Fast Results
            </h4>
            <p className="mt-2 text-green-100">
              Get disease analysis quickly.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;
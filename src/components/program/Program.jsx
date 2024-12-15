// components/CourseSection.jsx
const Program = () => {
  return (
    <div className="bg-gray-50 py-12" id="Program">
      <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">
        Our Program
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Art Classes Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-600 h-2"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Art Classes
              </h3>
              <p className="text-gray-600 mb-4">
                Join our in-studio art classes with professional instructors
              </p>
              <ul className="text-gray-500 mb-6">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Small group sessions
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Professional materials included
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-300">
                Explore Classes
              </button>
            </div>
          </div>

          {/* Art Classes Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-600 h-2"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Art Classes
              </h3>
              <p className="text-gray-600 mb-4">
                Join our in-studio art classes with professional instructors
              </p>
              <ul className="text-gray-500 mb-6">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Small group sessions
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Professional materials included
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-300">
                Explore Classes
              </button>
            </div>
          </div>

          {/* Art Classes Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="bg-emerald-600 h-2"></div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Art Classes
              </h3>
              <p className="text-gray-600 mb-4">
                Join our in-studio art classes with professional instructors
              </p>
              <ul className="text-gray-500 mb-6">
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Small group sessions
                </li>
                <li className="flex items-center mb-2">
                  <svg
                    className="w-5 h-5 mr-2 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Professional materials included
                </li>
              </ul>
              <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition-colors duration-300">
                Explore Classes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;

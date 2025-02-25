const CallForPapers = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
              CALL FOR PAPERS
            </h2>
            
            <div className="prose prose-lg mx-auto text-gray-600 text-justify mb-12">
              <p className="mb-6">
                ICRAE 2025 invites different research articles from researchers from various institutions
                across the world. The conference shall be conducted for three parallel tracks.
              </p>
              <p className="mb-6">
                All the papers should be prepared in accordance with the author's guidelines. Before
                submitting, the manuscript written should be thoroughly checked for grammatical or
                typographical errors.
              </p>
              <p className="mb-6">
                The manuscript should not exceed eight pages and must conform to the IEEE dual-
                column format.
              </p>
            </div>
  
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-blue-900 mb-4 text-center">
                Paper Submission
              </h3>
              <div className="flex justify-center">
                <a
                  href="https://easychair.org/conferences/?conf=icrae2025" // Replace with actual submission link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition-colors duration-300"
                >
                  Submit Your Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CallForPapers;
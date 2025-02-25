import React from 'react';

const AboutPCE = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
          ABOUT POORNIMA COLLEGE OF ENGINEERING
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="prose prose-lg text-gray-600 text-justify">
            <p>
              Poornima College of Engineering (PCE) has been practicing superior education standards since its inception in 2000. The College has maintained its eminence as a leading Engineering college in Rajasthan, India. It is NAAC A+ Accredited and ranked second among all the technical colleges affiliated with Rajasthan Technical University, Kota, India. PCE is moving ahead successfully to attain its vision mission to transform students into high-quality engineers and managers who may also enrich society by adhering to ethical culture, human values, and a sense of service to society and the nation. PCE came into existence to promote quality in professional & technical education in Jaipur, Rajasthan, and has a very strong research orientation and culture.
            </p>
            <p>
              What sets apart Poornima College of Engineering from other colleges in Jaipur, is its commitment to high-quality and industry-recognized delivery of education, ensuring the cultural and social enrichment of its students. Poornima brand symbolizes excellence through innovations, reliability, transparency, and professionalism of the highest order and instills faith and confidence among all members concerned in India and abroad. With student strength of more than 2000 students studying in 9 specializations of engineering (CSE, AI & DS, CSE (AI), CSE (Cyber), ECE, EE, ME, Civil & IT), more than 3.5 Lac square feet of built-up area, highly qualified faculties, state of the art infrastructure, good placements and industry-led curriculum, PCE is spearheading its extraordinary voyage with the motto 'Success is not a destination, it's a journey.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="/public/Poornimaimage.png"
              alt="Poornima College of Engineering"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPCE;
import React, { useState } from 'react';
import { Menu, X, ChevronDown, BookOpen, Calendar, Users, Download, Image, Phone, History, Building, FileCheck, Shield, UserCheck, Target } from 'lucide-react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CallForPapers from './components/CallForPapers';
import AboutJaipur from './components/AboutJaipur';
import AboutPCE from './components/AboutPCE';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Building },
    { name: 'Call for Papers', icon: BookOpen },
    { name: 'Programme Registration', icon: Calendar },
    { name: 'Publishing Partners', icon: Users },
    { name: 'Publication Ethics', icon: Shield },
    { name: 'Keynote Speakers', icon: UserCheck },
    { name: 'Downloads', icon: Download },
    { name: 'Gallery', icon: Image },
    { name: 'Organization', icon: Users },
    { name: 'History', icon: History },
    { name: 'Contact Us', icon: Phone }
  ];

  return (
    <>
      <div className="bg-white py-2 px-4 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/public/pcelogo.jpg"
              alt="Poornima Group"
              className="h-20 w-auto object-contain"
            />
            <div className="h-12 w-px bg-gray-300" />
            <img
              src="/public/naaclogo.jpg"
              alt="NAAC Logo"
              className="h-16 w-auto"
            />
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">NAAC Accredited with 'A' Grade</p>
            <p className="text-xs text-gray-500">ISO 9001:2015 Certified</p>
          </div>
        </div>
      </div>
      <nav className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <FileCheck className="h-8 w-8" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  item.name === 'Call for Papers' ? (
                    <Link
                      key={item.name}
                      to="/call-for-papers"
                      className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium text-white"
                    >
                      {item.name}
                    </Link>
                  ) : (
                  <a
                    key={item.name}
                    href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.name}
                  </a>
                  )
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:bg-blue-800 block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">INTERNATIONAL CONFERENCE ON</span>
                <span className="block text-blue-900 mt-2">RECENT ADVANCES IN ENGINEERING</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Join us for a groundbreaking hybrid conference exploring the latest innovations and developments in engineering.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#programme-registration"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg md:px-10"
                  >
                    Register Now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#call-for-papers"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Submit Paper
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/public/pce image.jpg"
          alt="Conference hall"
        />
      </div>
    </div>
  );
}

function ConferenceInfo() {
  const highlights = [
    {
      title: "Hybrid Conference Mode",
      description: "ICRAE 2025 will be conducted in Hybrid mode (Online & Offline)"
    },
    {
      title: "Publication Opportunity",
      description: "All the Accepted, Registered and Presented Papers will be published in SCOPUS Indexed proceedings and journals given under Publication Partners"
    },
    {
      title: "Journal Indexing",
      description: "Special issues of journals indexed in SCOPUS/Web of Science/ ESCI/SCIE"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-blue-900 mb-8">
                ICRAE 2025 Publication Highlights
              </h2>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div key={index} className="bg-blue-50 rounded-lg p-6">
                    <p className="text-xl font-semibold text-blue-900 mb-2">
                      {item.title}
                    </p>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutConference() {
  const objectives = [
    "To provide a platform to researchers from industry and academia, scientists, and the students of undergraduate, postgraduate, and doctoral programs on current thrust areas of various disciplines of Engineering and Technology",
    "To bring together students and researchers from industry and academia to exchange their innovative ideas",
    "To promote networking and engagement of students, researchers, academicians and industry persons",
    "To provide a competitive environment among the researchers and the innovators and recognize their best contributions"
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
              ABOUT THE CONFERENCE
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600 text-justify">
              <p className="mb-4">
                Fourth International conference on "Recent Advances in Engineering" will be organized
                by Poornima College of Engineering, Jaipur during 20-21 December 2025. In the
                previous three editions of conference, the event was organized as International
                Conference and contests.
              </p>
              <p className="mb-4">
                Third editions of Paper have been already organized and selected good quality papers 
                were published in UGC and SCOPUS indexed journals. The first Conference received 
                publication support of Taylor & Francis and the second conference received publication 
                support of SCOPUS Indexed Journals under Scientific.net and Web of Science indexed 
                Journal of Poymer & Composites (SCIE).
              </p>
              <p className="mb-4">
                ICRAE 2024 also received a publication support from ESCI Journal, Frontiers in
                Mechanical Engineering. This year's edition also has been upgraded as International
                level with a separate conference track in each domain.
              </p>
              <p className="mb-4">
                The conference is divided into three parallel tracks. The best papers in each technical 
                field will receive awards. Beyond that, selected papers will be published in ISBN proceedings. 
                Good Quality papers will be published in Scopus indexed journal with additional charges. 
                This additional charge will depend on the type of journal and article processing fee of 
                the particular journal.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
              OBJECTIVES OF THE CONFERENCE
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {objectives.map((objective, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <Target className="h-6 w-6 text-blue-900 mt-1 mr-3" />
                    <p className="text-gray-700 text-justify">{objective}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <ConferenceInfo />
      <AboutConference />
      <AboutPCE />
      <AboutJaipur />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/call-for-papers" element={<CallForPapers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
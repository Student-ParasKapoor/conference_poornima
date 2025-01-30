import React from 'react';
import { Calendar, MapPin, Users, Clock, ChevronRight, Mail, Phone, Globe } from 'lucide-react';
import Navbar from './components/Navbar';
import SpeakerCard from './components/SpeakerCard';

function App() {
  const speakers = [
    {
      name: "Dr. Sarah Johnson",
      role: "AI Research Director, Tech Institute",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      topic: "Future of AI in Education"
    },
    {
      name: "Prof. Michael Chen",
      role: "Department Chair, Computer Science",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      topic: "Blockchain Applications in Academia"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Climate Science Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
      topic: "Sustainable Campus Initiatives"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
            alt="Conference hall"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6">Innovation Summit 2024</h1>
            <p className="text-xl mb-8 max-w-2xl">Join us for the premier academic conference exploring the intersection of technology, sustainability, and education.</p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>March 15-17, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>University Grand Hall</span>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">
              Register Now
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Key Info Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+ Attendees</h3>
              <p className="text-gray-600">Connect with leading academics and industry experts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">30+ Sessions</h3>
              <p className="text-gray-600">Engaging workshops, keynotes, and panel discussions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Globe className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Network</h3>
              <p className="text-gray-600">Participants from over 50 universities worldwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Speakers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} {...speaker} />
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Preview */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conference Schedule</h2>
          <div className="space-y-6">
            {['Day 1', 'Day 2', 'Day 3'].map((day) => (
              <div key={day} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">{day}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 font-semibold">09:00 AM</span>
                    <div>
                      <h4 className="font-semibold">Opening Keynote</h4>
                      <p className="text-gray-600">Main Auditorium</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 font-semibold">11:00 AM</span>
                    <div>
                      <h4 className="font-semibold">Panel Discussion</h4>
                      <p className="text-gray-600">Conference Room A</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>conference@university.edu</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>123 University Ave, College Town, ST 12345</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
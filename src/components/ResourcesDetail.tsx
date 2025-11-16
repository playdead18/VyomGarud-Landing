// src/components/ResourcesDetail.tsx

import React from 'react';
import { FileText, BookOpen, Video, Download, Calendar, Users, Award, TrendingUp } from 'lucide-react';

const ResourcesDetail: React.FC = () => {
  const documentationItems = [
    {
      icon: <FileText size={24} />,
      title: 'Technical Specifications',
      description: 'Comprehensive documentation covering all UAV systems specifications, performance metrics, and operational parameters.',
      items: ['Hardware specs', 'Software architecture', 'API documentation', 'Integration guides'],
      downloadSize: '15 MB PDF',
    },
    {
      icon: <BookOpen size={24} />,
      title: 'User Manuals',
      description: 'Detailed operational manuals and maintenance guides for all VyomGarud drone systems.',
      items: ['Quick start guide', 'Advanced operations', 'Maintenance procedures', 'Troubleshooting'],
      downloadSize: '25 MB PDF',
    },
    {
      icon: <Award size={24} />,
      title: 'Compliance Documents',
      description: 'Certifications, compliance reports, and regulatory documentation for defense procurement.',
      items: ['ISO certifications', 'Military standards', 'Safety certifications', 'Export licenses'],
      downloadSize: '8 MB PDF',
    },
  ];

  const caseStudies = [
    {
      title: 'Border Surveillance Operations',
      organization: 'National Border Security Force',
      duration: '18 months',
      impact: '340% increase in threat detection',
      description: 'Deployment of 25 surveillance drones along 500km border stretch, resulting in enhanced monitoring and rapid response capabilities.',
      metrics: [
        { label: 'Area Covered', value: '500 km' },
        { label: 'Response Time', value: '-75%' },
        { label: 'Cost Savings', value: '45%' },
      ],
    },
    {
      title: 'Maritime Patrol Mission',
      organization: 'Coastal Defense Command',
      duration: '12 months',
      impact: '24/7 autonomous monitoring achieved',
      description: 'Implementation of swarm technology for continuous maritime surveillance across 200 nautical miles of coastline.',
      metrics: [
        { label: 'Coverage', value: '200 NM' },
        { label: 'Uptime', value: '99.8%' },
        { label: 'Incidents Detected', value: '150+' },
      ],
    },
    {
      title: 'Combat Training Exercise',
      organization: 'Air Force Tactical Command',
      duration: '6 months',
      impact: 'Training effectiveness improved by 200%',
      description: 'Utilization of combat UAVs in realistic training scenarios, enhancing pilot skills and tactical coordination.',
      metrics: [
        { label: 'Sorties', value: '500+' },
        { label: 'Success Rate', value: '94%' },
        { label: 'Personnel Trained', value: '200+' },
      ],
    },
  ];

  const webinars = [
    {
      icon: <Video size={20} />,
      title: 'Advanced UAV Operations',
      instructor: 'Col. Rajesh Kumar',
      duration: '90 minutes',
      date: 'Next session: Jan 25, 2024',
      topics: ['Mission planning', 'Tactical deployment', 'Real-time coordination', 'Emergency protocols'],
    },
    {
      icon: <Users size={20} />,
      title: 'Swarm Technology Workshop',
      instructor: 'Dr. Priya Sharma',
      duration: '2 hours',
      date: 'Next session: Feb 10, 2024',
      topics: ['Swarm algorithms', 'Mesh networking', 'Autonomous coordination', 'Mission scaling'],
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Maintenance & Operations',
      instructor: 'Eng. Vikram Singh',
      duration: '60 minutes',
      date: 'Next session: Feb 20, 2024',
      topics: ['Preventive maintenance', 'Field repairs', 'System diagnostics', 'Performance optimization'],
    },
  ];

  return (
    <section id="resources-detail" className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Documentation Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-semibold font-inter">Documentation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Technical <span className="text-primary">Specifications</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
              Comprehensive documentation for all VyomGarud systems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {documentationItems.map((doc, index) => (
              <div
                key={index}
                className="bg-dark border border-charcoal-light p-6 rounded-lg hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-primary">{doc.icon}</div>
                </div>

                <h3 className="text-xl font-bold mb-3 font-poppins">{doc.title}</h3>
                <p className="text-gray-400 mb-4 font-inter">{doc.description}</p>

                <ul className="space-y-2 mb-6">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm font-inter">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-charcoal-light">
                  <span className="text-sm text-gray-500 font-inter">{doc.downloadSize}</span>
                  <button className="flex items-center text-primary hover:text-orange-400 transition-colors font-semibold text-sm">
                    <Download size={16} className="mr-1" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-semibold font-inter">Case Studies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Real-World <span className="text-primary">Deployments</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
              Success stories from defense organizations worldwide
            </p>
          </div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-dark border border-charcoal-light p-8 rounded-lg hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 font-poppins">{study.title}</h3>
                        <p className="text-primary font-semibold font-inter">{study.organization}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400 font-inter">Duration</div>
                        <div className="text-white font-semibold font-inter">{study.duration}</div>
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/30 p-4 rounded-lg mb-4">
                      <div className="text-sm text-gray-400 mb-1 font-inter">Key Impact</div>
                      <div className="text-xl font-bold text-primary font-poppins">{study.impact}</div>
                    </div>

                    <p className="text-gray-300 font-inter leading-relaxed">{study.description}</p>
                  </div>

                  <div className="space-y-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="bg-charcoal border border-charcoal-light p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary mb-1 font-poppins">{metric.value}</div>
                        <div className="text-sm text-gray-400 font-inter">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Webinars Section */}
        <div>
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <span className="text-primary font-semibold font-inter">Webinars</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
              Expert <span className="text-primary">Training Sessions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter">
              Learn from industry experts and defense professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-dark border border-charcoal-light p-6 rounded-lg hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <div className="text-primary">{webinar.icon}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400 font-inter">{webinar.duration}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 font-poppins">{webinar.title}</h3>
                <p className="text-gray-400 text-sm mb-1 font-inter">Instructor: {webinar.instructor}</p>
                
                <div className="flex items-center text-sm text-primary mb-4 font-inter">
                  <Calendar size={14} className="mr-1" />
                  {webinar.date}
                </div>

                <div className="space-y-2 mb-6">
                  {webinar.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center text-gray-300 text-sm font-inter">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {topic}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="block bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 text-center"
                >
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesDetail;
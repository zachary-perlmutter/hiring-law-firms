import React, { useState } from "react";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ApplicationModal from "@/components/ApplicationModal";
import DemoBanner from "@/components/DemoBanner";

const JobBoard = () => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  const jobs = [
    {
      id: 1,
      title: "Paralegal",
      location: "Denver, CO",
      type: "Full-time",
      posted: "2 days ago",
      description:
        "We are seeking an experienced paralegal to join our litigation team. The ideal candidate will have strong research and writing skills.",
      requirements: [
        "2+ years of paralegal experience",
        "Bachelor's degree preferred",
        "Strong written communication skills",
        "Experience with legal research databases",
      ],
    },
    {
      id: 2,
      title: "Legal Assistant",
      location: "Remote",
      type: "Full-time",
      posted: "5 days ago",
      description:
        "Remote legal assistant position supporting our corporate law practice. Perfect for organized individuals with attention to detail.",
      requirements: [
        "Legal assistant certification",
        "Proficiency in Microsoft Office",
        "Excellent organizational skills",
        "Experience with document management systems",
      ],
    },
  ];

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showBanner && <DemoBanner onClose={() => setShowBanner(false)} />}
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SJ</span>
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">
                  Smith & Justice LLP
                </h1>
                <p className="text-sm text-gray-600">Career Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Legal Team</h2>
          <p className="text-xl text-blue-100 mb-8">
            Build your career with one of Denver's leading law firms
          </p>
          <div className="flex justify-center space-x-8 text-blue-100">
            <div className="text-center">
              <div className="text-2xl font-bold">25+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Legal Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-sm">Cases Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Open Positions
          </h3>
          <p className="text-gray-600">
            Discover opportunities to grow your legal career with us
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow-lg transition-shadow duration-200"
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Posted {job.posted}
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={() => handleApply(job)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Apply Now
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Culture Section */}
        <section className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Work With Us?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Professional Growth
              </h4>
              <p className="text-sm text-gray-600">
                Continuous learning opportunities and career advancement
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">$</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Competitive Benefits
              </h4>
              <p className="text-sm text-gray-600">
                Comprehensive health coverage and retirement plans
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">⚖</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Work-Life Balance
              </h4>
              <p className="text-sm text-gray-600">
                Flexible schedules and supportive work environment
              </p>
            </div>
          </div>
        </section>
      </main>

      <ApplicationModal
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        job={selectedJob}
      />
    </div>
  );
};

export default JobBoard;

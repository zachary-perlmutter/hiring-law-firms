
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ResumeModal from '@/components/ResumeModal';
import NoteModal from '@/components/NoteModal';

const Pipeline = () => {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "Rachel Greene",
      status: "Applied",
      resume: "PDF Placeholder",
      notes: "Strong writing skills, 2+ years experience",
      email: "rachel.greene@email.com"
    },
    {
      id: 2,
      name: "Mike Ross",
      status: "Interviewing",
      resume: "PDF Placeholder",
      notes: "Harvard Law, looking to switch firms",
      email: "mike.ross@email.com"
    },
    {
      id: 3,
      name: "Tina Chen",
      status: "Offer Sent",
      resume: "PDF Placeholder",
      notes: "Fluent in Spanish, good cultural fit",
      email: "tina.chen@email.com"
    }
  ]);

  const stages = [
    { id: 'Applied', title: 'Applied', color: 'bg-gray-100' },
    { id: 'Interviewing', title: 'Interviewing', color: 'bg-blue-100' },
    { id: 'Offer Sent', title: 'Offer Sent', color: 'bg-orange-100' },
    { id: 'Hired', title: 'Hired', color: 'bg-green-100' }
  ];

  const moveToNextStage = (applicantId) => {
    setApplicants(prev => prev.map(applicant => {
      if (applicant.id === applicantId) {
        const currentIndex = stages.findIndex(stage => stage.id === applicant.status);
        if (currentIndex < stages.length - 1) {
          return { ...applicant, status: stages[currentIndex + 1].id };
        }
      }
      return applicant;
    }));
  };

  const openResumeModal = (applicant) => {
    setSelectedApplicant(applicant);
    setShowResumeModal(true);
  };

  const openNoteModal = (applicant) => {
    setSelectedApplicant(applicant);
    setShowNoteModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Link to="/dashboard" className="mr-4">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SJ</span>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-gray-900">Paralegal – Denver, CO</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Sub Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['pipeline', 'applicants', 'notes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'pipeline' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Hiring Pipeline</h2>
              <p className="mt-1 text-sm text-gray-600">
                Track candidates through your hiring process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stages.map((stage) => (
                <div key={stage.id} className="space-y-4">
                  <div className={`p-4 rounded-lg ${stage.color}`}>
                    <h3 className="font-semibold text-gray-900">{stage.title}</h3>
                    <p className="text-sm text-gray-600">
                      {applicants.filter(a => a.status === stage.id).length} candidates
                    </p>
                  </div>

                  <div className="space-y-3">
                    {applicants
                      .filter(applicant => applicant.status === stage.id)
                      .map((applicant) => (
                        <Card key={applicant.id} className="hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-base">{applicant.name}</CardTitle>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-sm text-gray-600 mb-3">{applicant.notes}</p>
                            <div className="space-y-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                onClick={() => openResumeModal(applicant)}
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                View Resume
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full"
                                onClick={() => openNoteModal(applicant)}
                              >
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Leave Note
                              </Button>
                              {stage.id !== 'Hired' && (
                                <Button
                                  size="sm"
                                  className="w-full bg-blue-600 hover:bg-blue-700"
                                  onClick={() => moveToNextStage(applicant.id)}
                                >
                                  <ChevronRight className="w-4 h-4 mr-2" />
                                  Move to Next Stage
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applicants' && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">All Applicants</h3>
            <p className="text-gray-600">List view of all applicants for this position</p>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Interview Notes</h3>
            <p className="text-gray-600">Centralized notes from all team members</p>
          </div>
        )}
      </main>

      <ResumeModal
        isOpen={showResumeModal}
        onClose={() => setShowResumeModal(false)}
        applicant={selectedApplicant}
      />

      <NoteModal
        isOpen={showNoteModal}
        onClose={() => setShowNoteModal(false)}
        applicant={selectedApplicant}
      />
    </div>
  );
};

export default Pipeline;

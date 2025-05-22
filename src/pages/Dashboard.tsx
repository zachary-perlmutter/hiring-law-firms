
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Users, Edit3, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PostJobModal from '@/components/PostJobModal';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Paralegal',
      location: 'Denver, CO',
      applicants: 3,
      status: 'Active',
      postedDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'Legal Assistant',
      location: 'Remote',
      applicants: 2,
      status: 'Active',
      postedDate: '2024-01-20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SJ</span>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-gray-900">Smith & Justice LLP</h1>
            </div>
            <Button 
              onClick={() => setShowPostJobModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              Post New Job
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['jobs', 'applicants', 'settings'].map((tab) => (
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
        {activeTab === 'jobs' && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Active Job Postings</h2>
              <p className="mt-1 text-sm text-gray-600">
                Manage your open positions and track applicants
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold">{job.title}</CardTitle>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {job.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{job.location}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <Users className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">
                        {job.applicants} {job.applicants === 1 ? 'Applicant' : 'Applicants'}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Link to="/dashboard/paralegal" className="flex-1">
                        <Button variant="outline" className="w-full">
                          <Eye className="w-4 h-4 mr-2" />
                          View Applicants
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'applicants' && (
          <div className="text-center py-12">
            <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">All Applicants</h3>
            <p className="text-gray-600">View and manage all applicants across your job postings</p>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Firm Settings</h3>
            <p className="text-gray-600">Configure your firm profile and preferences</p>
          </div>
        )}
      </main>

      <PostJobModal 
        isOpen={showPostJobModal} 
        onClose={() => setShowPostJobModal(false)} 
      />
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Users, Edit3, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PostJobModal from "@/components/PostJobModal";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("jobs");
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Paralegal",
      location: "Denver, CO",
      applicants: 3,
      status: "Active",
      postedDate: "2024-01-15",
    },
    {
      id: 2,
      title: "Legal Assistant",
      location: "Remote",
      applicants: 2,
      status: "Active",
      postedDate: "2024-01-20",
    },
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
              <h1 className="ml-3 text-xl font-semibold text-gray-900">
                Smith & Justice LLP
              </h1>
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
            {["jobs", "applicants", "settings"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
        {activeTab === "jobs" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Active Job Postings
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Manage your open positions and track applicants
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="hover:shadow-lg transition-shadow duration-200"
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-semibold">
                        {job.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {job.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{job.location}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-4">
                      <Users className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">
                        {job.applicants}{" "}
                        {job.applicants === 1 ? "Applicant" : "Applicants"}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <Link to="/app/paralegal" className="flex-1">
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

        {activeTab === "applicants" && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                All Applicants
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                View and manage all applicants across your job postings
              </p>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Position
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Applied Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      {
                        id: 1,
                        name: "Rachel Greene",
                        position: "Paralegal",
                        status: "Applied",
                        email: "rachel.greene@email.com",
                        appliedDate: "2024-03-15",
                        notes: "Strong writing skills, 2+ years experience",
                      },
                      {
                        id: 2,
                        name: "Mike Ross",
                        position: "Paralegal",
                        status: "Interviewing",
                        email: "mike.ross@email.com",
                        appliedDate: "2024-03-14",
                        notes: "Harvard Law, looking to switch firms",
                      },
                      {
                        id: 3,
                        name: "Tina Chen",
                        position: "Legal Assistant",
                        status: "Offer Sent",
                        email: "tina.chen@email.com",
                        appliedDate: "2024-03-13",
                        notes: "Fluent in Spanish, good cultural fit",
                      },
                      {
                        id: 4,
                        name: "John Smith",
                        position: "Legal Assistant",
                        status: "Applied",
                        email: "john.smith@email.com",
                        appliedDate: "2024-03-16",
                        notes: "5 years of experience in corporate law",
                      },
                    ].map((applicant) => (
                      <tr key={applicant.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {applicant.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {applicant.position}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Badge
                            variant="secondary"
                            className={`${
                              applicant.status === "Applied"
                                ? "bg-gray-100 text-gray-800"
                                : applicant.status === "Interviewing"
                                ? "bg-blue-100 text-blue-800"
                                : applicant.status === "Offer Sent"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {applicant.status}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {applicant.email}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {applicant.appliedDate}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <Link
                            to={`/app/${applicant.position
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Firm Settings
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Configure your firm profile and hiring preferences
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Company Profile */}
              <Card>
                <CardHeader>
                  <CardTitle>Company Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Firm Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="Smith & Justice LLP"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="Denver, CO"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="https://smithjustice.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      defaultValue="A leading law firm specializing in corporate and litigation matters, committed to excellence and client success."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Hiring Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle>Hiring Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Default Job Location
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                      <option>Denver, CO</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Application Review Process
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          Require cover letter
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          Require references
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          Enable automated screening
                        </span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Notification Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Notifications
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          New applications
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          Status changes
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          defaultChecked
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          New notes
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notification Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      defaultValue="hiring@smithjustice.com"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Team Members */}
              <Card>
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            SJ
                          </span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            Sarah Johnson
                          </p>
                          <p className="text-sm text-gray-500">
                            Hiring Manager
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        Admin
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            MC
                          </span>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            Mike Chen
                          </p>
                          <p className="text-sm text-gray-500">Recruiter</p>
                        </div>
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800"
                      >
                        Member
                      </Badge>
                    </div>
                    <Button variant="outline" className="w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Team Member
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-end space-x-4">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Save Changes
              </Button>
            </div>
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

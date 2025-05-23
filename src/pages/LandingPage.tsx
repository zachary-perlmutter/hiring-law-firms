import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  FileText,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HL</span>
                </div>
                <h1 className="ml-3 text-xl font-semibold text-gray-900">
                  HiringLawFirms.com
                </h1>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/pricing">
                <Button variant="ghost">Pricing</Button>
              </Link>
              <Button variant="ghost">Contact Us</Button>
              <Link to="/app">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Modern Hiring Platform for Law Firms
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Streamline your hiring process with our comprehensive applicant
              tracking system. Built specifically for legal professionals.
            </p>
            <Link to="/app">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                View Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Hire Top Legal Talent
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features designed specifically for law firms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Applicant Tracking
              </h3>
              <p className="text-gray-600">
                Manage candidates through every stage of the hiring process with
                our intuitive pipeline view.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Resume Management
              </h3>
              <p className="text-gray-600">
                Store and organize candidate resumes, cover letters, and
                supporting documents in one place.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Team Collaboration
              </h3>
              <p className="text-gray-600">
                Share feedback, notes, and evaluations with your hiring team in
                real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-gray-600">
              Designed with legal professionals in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Legal-Specific Features
                </h3>
                <p className="text-gray-600">
                  Built specifically for law firms with features that matter to
                  legal professionals.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Easy Integration
                </h3>
                <p className="text-gray-600">
                  Seamlessly integrates with your existing legal software and
                  tools.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Secure & Compliant
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade security with compliance for legal industry
                  standards.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Dedicated Support
                </h3>
                <p className="text-gray-600">
                  Expert support team with experience in legal technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              See how our platform can help you hire the best legal talent.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/app">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  View Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HL</span>
              </div>
            </div>
            <p className="text-gray-600 mb-2">
              © {currentYear} hiringlawfirms.com. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Powered by{" "}
              <a
                href="https://codemeetsbagel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 hover:underline"
              >
                Code Meets Bagel
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

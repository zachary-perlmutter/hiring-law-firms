import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPage = () => {
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
              <Link to="/">
                <Button variant="ghost">Back to Home</Button>
              </Link>
              <Button variant="ghost" className="text-blue-600">
                Pricing
              </Button>
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your firm. All plans include our core
            features to help you hire faster and smarter.
          </p>
          <div className="bg-white/10 rounded-lg p-4 inline-block">
            <p className="text-lg font-semibold">
              Firms using HiringLawFirms.com hire 30% faster
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Tier */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <p className="text-gray-600 mb-6">
                For solo attorneys or small firms hiring once or twice a year.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600">/month</span>
                <p className="text-sm text-gray-500 mt-2">or $490/year</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>1 active job post</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Up to 25 applicants per job</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Basic dashboard</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Resume uploads + notes</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Basic email templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Public job board URL</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Professional Tier */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-600 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional
              </h3>
              <p className="text-gray-600 mb-6">
                For busy firms hiring multiple roles with small teams.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$149</span>
                <span className="text-gray-600">/month</span>
                <p className="text-sm text-gray-500 mt-2">or $1,490/year</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Up to 5 active job posts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Unlimited applicants</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Kanban pipeline + scheduling</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Custom email & text automations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Job posting embeds</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>3 team members</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Metrics dashboard</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Firm Plus Tier */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Firm Plus
              </h3>
              <p className="text-gray-600 mb-6">
                For firms that want full control + support.
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$299</span>
                <span className="text-gray-600">/month</span>
                <p className="text-sm text-gray-500 mt-2">or $2,990/year</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Unlimited job posts</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>White-labeled job board</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Advanced automations</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>AI resume summarizer</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Role-based permissions</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-500 mt-1 mr-3" />
                  <span>10 team members</span>
                </li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Optional Add-Ons
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">
                Job Boost Distribution
              </h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">$50/post</p>
              <p className="text-gray-600">
                Auto-send your job postings to LinkedIn, ZipRecruiter, and other
                major job boards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Done-for-you Setup</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">$199</p>
              <p className="text-gray-600">
                We'll set up your pipeline, roles, and automations to get you
                started quickly.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Candidate Sourcing</h3>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                Coming Soon
              </p>
              <p className="text-gray-600">
                AI-suggested applicants to help you find the perfect candidates
                faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Trial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Limited VIP Trial Access
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                We're offering free access to 10 firms in our beta program.
                Setup included.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Perfect for early adopters</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-lg">
                    Personalized onboarding support
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Check className="w-6 h-6 text-green-400" />
                  <span className="text-lg">
                    Help shape the future of legal hiring
                  </span>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Apply for Pilot Access
                <ArrowRight className="w-4 h-4 ml-2" />
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

export default PricingPage;

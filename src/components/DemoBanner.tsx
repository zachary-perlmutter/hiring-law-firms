import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DemoBannerProps {
  onClose?: () => void;
}

const DemoBanner = ({ onClose }: DemoBannerProps) => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <p className="text-sm font-medium">
              This is a demo version. Try out the features and see how it works!
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                Get Started
              </Button>
            </Link>
            {onClose && (
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoBanner;

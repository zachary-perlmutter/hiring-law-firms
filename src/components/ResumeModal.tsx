
import React from 'react';
import { FileText, Download, User, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicant: any;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, applicant }) => {
  if (!applicant) return null;

  // Mock resume data
  const resumeData = {
    name: applicant.name,
    email: applicant.email || `${applicant.name.toLowerCase().replace(' ', '.')}@email.com`,
    phone: "(555) 123-4567",
    summary: "Experienced legal professional with strong analytical and communication skills. Proven track record in litigation support and legal research.",
    experience: [
      {
        title: "Paralegal",
        company: "Johnson & Associates",
        duration: "2022 - Present",
        responsibilities: [
          "Conducted legal research and prepared case summaries",
          "Managed client communications and scheduling",
          "Assisted in trial preparation and document organization"
        ]
      },
      {
        title: "Legal Assistant",
        company: "Metro Legal Services",
        duration: "2020 - 2022",
        responsibilities: [
          "Prepared legal documents and correspondence",
          "Maintained client files and case management system",
          "Coordinated depositions and court appearances"
        ]
      }
    ],
    education: [
      {
        degree: "Paralegal Certificate",
        school: "Denver Community College",
        year: "2020"
      },
      {
        degree: "Bachelor of Arts, English",
        school: "University of Colorado",
        year: "2018"
      }
    ],
    skills: ["Legal Research", "Case Management", "Client Relations", "Document Preparation", "Litigation Support"]
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Resume - {applicant.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Header */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{resumeData.name}</h2>
                <div className="space-y-1 mt-2">
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {resumeData.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {resumeData.phone}
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Summary</h3>
            <p className="text-gray-700">{resumeData.summary}</p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience</h3>
            <div className="space-y-4">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-200 pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-blue-600">{exp.company}</p>
                    </div>
                    <Badge variant="secondary">{exp.duration}</Badge>
                  </div>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
            <div className="space-y-3">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <Badge variant="outline">{edu.year}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResumeModal;

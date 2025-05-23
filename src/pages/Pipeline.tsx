import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, MessageSquare, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ResumeModal from "@/components/ResumeModal";
import NoteModal from "@/components/NoteModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DemoBanner from "@/components/DemoBanner";

const Pipeline = () => {
  const [activeTab, setActiveTab] = useState("pipeline");
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "Rachel Greene",
      status: "Applied",
      resume: "PDF Placeholder",
      notes: "Strong writing skills, 2+ years experience",
      email: "rachel.greene@email.com",
    },
    {
      id: 2,
      name: "Mike Ross",
      status: "Interviewing",
      resume: "PDF Placeholder",
      notes: "Harvard Law, looking to switch firms",
      email: "mike.ross@email.com",
    },
    {
      id: 3,
      name: "Tina Chen",
      status: "Offer Sent",
      resume: "PDF Placeholder",
      notes: "Fluent in Spanish, good cultural fit",
      email: "tina.chen@email.com",
    },
  ]);

  const stages = [
    { id: "Applied", title: "Applied", color: "bg-gray-100" },
    { id: "Interviewing", title: "Interviewing", color: "bg-blue-100" },
    { id: "Offer Sent", title: "Offer Sent", color: "bg-orange-100" },
    { id: "Hired", title: "Hired", color: "bg-green-100" },
  ];

  const [allNotes] = useState([
    {
      id: 1,
      applicantId: 1,
      applicantName: "Rachel Greene",
      author: "Sarah Johnson",
      content:
        "Great interview - strong communication skills and relevant experience. Would be a good fit for the team.",
      timestamp: "2 hours ago",
      status: "Interviewing",
    },
    {
      id: 2,
      applicantId: 2,
      applicantName: "Mike Ross",
      author: "Mike Chen",
      content:
        "Technical skills assessment: Excellent knowledge of legal research databases. Very impressive background.",
      timestamp: "1 day ago",
      status: "Offer Sent",
    },
    {
      id: 3,
      applicantId: 1,
      applicantName: "Rachel Greene",
      author: "John Smith",
      content:
        "Reference check completed. Previous employer spoke highly of her work ethic and attention to detail.",
      timestamp: "3 hours ago",
      status: "Interviewing",
    },
    {
      id: 4,
      applicantId: 3,
      applicantName: "Tina Chen",
      author: "Sarah Johnson",
      content:
        "Salary expectations discussed. Within our range. Will prepare offer letter.",
      timestamp: "5 hours ago",
      status: "Offer Sent",
    },
    {
      id: 5,
      applicantId: 2,
      applicantName: "Mike Ross",
      author: "Mike Chen",
      content:
        "Follow-up interview scheduled for next week. Will focus on case management experience.",
      timestamp: "2 days ago",
      status: "Offer Sent",
    },
  ]);

  const moveToNextStage = (applicantId) => {
    setApplicants((prev) =>
      prev.map((applicant) => {
        if (applicant.id === applicantId) {
          const currentIndex = stages.findIndex(
            (stage) => stage.id === applicant.status
          );
          if (currentIndex < stages.length - 1) {
            return { ...applicant, status: stages[currentIndex + 1].id };
          }
        }
        return applicant;
      })
    );
  };

  const openResumeModal = (applicant) => {
    setSelectedApplicant(applicant);
    setShowResumeModal(true);
  };

  const openNoteModal = (applicant) => {
    setSelectedApplicant(applicant);
    setShowNoteModal(true);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const draggedApplicant = applicants.find(
      (applicant) => applicant.id.toString() === draggableId
    );

    if (!draggedApplicant) return;

    const newApplicants = applicants.map((applicant) => {
      if (applicant.id.toString() === draggableId) {
        return {
          ...applicant,
          status: destination.droppableId,
        };
      }
      return applicant;
    });

    setApplicants(newApplicants);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {showBanner && <DemoBanner onClose={() => setShowBanner(false)} />}
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/app">
                <Button variant="ghost">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SJ</span>
              </div>
              <h1 className="ml-3 text-xl font-semibold text-gray-900">
                Paralegal – Denver, CO
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Sub Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {["pipeline", "applicants", "notes"].map((tab) => (
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
        {activeTab === "pipeline" && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Hiring Pipeline
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Track candidates through your hiring process
              </p>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
              <div className="grid grid-cols-4 gap-6 overflow-x-auto pb-4">
                {stages.map((stage) => (
                  <Droppable droppableId={stage.id} key={stage.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`space-y-4 transition-colors duration-200 min-w-[300px] ${
                          snapshot.isDraggingOver ? "bg-gray-50 rounded-lg" : ""
                        }`}
                      >
                        <div className={`p-4 rounded-lg ${stage.color}`}>
                          <h3 className="font-semibold text-gray-900">
                            {stage.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {
                              applicants.filter((a) => a.status === stage.id)
                                .length
                            }{" "}
                            candidates
                          </p>
                        </div>

                        <div className="space-y-3 min-h-[100px]">
                          {applicants
                            .filter(
                              (applicant) => applicant.status === stage.id
                            )
                            .map((applicant, index) => (
                              <Draggable
                                key={applicant.id}
                                draggableId={applicant.id.toString()}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                      ...provided.draggableProps.style,
                                      transition: "all 0.2s ease",
                                      transform: snapshot.isDragging
                                        ? provided.draggableProps.style
                                            ?.transform
                                        : "none",
                                    }}
                                    className={`${
                                      snapshot.isDragging ? "shadow-lg" : ""
                                    }`}
                                  >
                                    <Card className="hover:shadow-md transition-shadow">
                                      <CardHeader className="pb-2">
                                        <CardTitle className="text-base">
                                          {applicant.name}
                                        </CardTitle>
                                      </CardHeader>
                                      <CardContent className="pt-0">
                                        <p className="text-sm text-gray-600 mb-3">
                                          {applicant.notes}
                                        </p>
                                        <div className="space-y-2">
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full"
                                            onClick={() =>
                                              openResumeModal(applicant)
                                            }
                                          >
                                            <FileText className="w-4 h-4 mr-2" />
                                            View Resume
                                          </Button>
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full"
                                            onClick={() =>
                                              openNoteModal(applicant)
                                            }
                                          >
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            Leave Note
                                          </Button>
                                          {stage.id !== "Hired" && (
                                            <Button
                                              size="sm"
                                              className="w-full bg-blue-600 hover:bg-blue-700"
                                              onClick={() =>
                                                moveToNextStage(applicant.id)
                                              }
                                            >
                                              <ChevronRight className="w-4 h-4 mr-2" />
                                              Move to Next Stage
                                            </Button>
                                          )}
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                )}
                              </Draggable>
                            ))}
                          {provided.placeholder}
                        </div>
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </DragDropContext>
          </div>
        )}

        {activeTab === "applicants" && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                All Applicants
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                View and manage all applicants for this position
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
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Notes
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {applicants.map((applicant) => (
                      <tr key={applicant.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {applicant.name}
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
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 max-w-xs truncate">
                            {applicant.notes}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openResumeModal(applicant)}
                          >
                            <FileText className="w-4 h-4 mr-2" />
                            Resume
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openNoteModal(applicant)}
                          >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Notes
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "notes" && (
          <div className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Interview Notes
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Centralized notes from all team members
              </p>
            </div>

            <div className="bg-white rounded-lg shadow">
              <div className="divide-y divide-gray-200">
                {allNotes.map((note) => (
                  <div key={note.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="text-lg font-medium text-gray-900">
                            {note.applicantName}
                          </h3>
                          <Badge
                            variant="secondary"
                            className={`${
                              note.status === "Applied"
                                ? "bg-gray-100 text-gray-800"
                                : note.status === "Interviewing"
                                ? "bg-blue-100 text-blue-800"
                                : note.status === "Offer Sent"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {note.status}
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          {note.content}
                        </p>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="font-medium text-gray-900">
                            {note.author}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{note.timestamp}</span>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          const applicant = applicants.find(
                            (a) => a.id === note.applicantId
                          );
                          if (applicant) {
                            openNoteModal(applicant);
                          }
                        }}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Add Note
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

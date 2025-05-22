import React, { useState } from 'react';
import { MessageSquare, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicant: any;
}

const NoteModal: React.FC<NoteModalProps> = ({ isOpen, onClose, applicant }) => {
  const [newNote, setNewNote] = useState('');
  const [notes, setNotes] = useState([
    {
      id: 1,
      author: "Sarah Johnson",
      content: "Great interview - strong communication skills and relevant experience.",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      author: "Mike Chen",
      content: "Technical skills assessment: Excellent knowledge of legal research databases.",
      timestamp: "1 day ago"
    }
  ]);

  const handleAddNote = () => {
    if (newNote.trim()) {
      const note = {
        id: notes.length + 1,
        author: "You",
        content: newNote,
        timestamp: "Just now"
      };
      setNotes([note, ...notes]);
      setNewNote('');
    }
  };

  if (!applicant) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <MessageSquare className="w-5 h-5 mr-2" />
            Notes - {applicant.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Add new note */}
          <div className="space-y-3">
            <Textarea
              placeholder="Add a note about this candidate..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              rows={3}
            />
            <Button onClick={handleAddNote} className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Note
            </Button>
          </div>

          {/* Existing notes */}
          <div className="space-y-3 max-h-60 overflow-y-auto">
            <h4 className="font-semibold text-gray-900">Previous Notes</h4>
            {notes.map((note) => (
              <div key={note.id} className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium text-sm text-gray-900">{note.author}</span>
                  <span className="text-xs text-gray-500">{note.timestamp}</span>
                </div>
                <p className="text-sm text-gray-700">{note.content}</p>
              </div>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoteModal;

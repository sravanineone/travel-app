import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="neo-button p-4 text-blue-600 hover:text-blue-700"
        >
          <MessageCircle size={24} />
        </button>
      ) : (
        <div className="neo-card w-80 h-96 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-blue-600">Travel Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="neo-button p-2 text-gray-600 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 neo-inset rounded-xl p-4 mb-4 overflow-y-auto">
            <div className="space-y-4">
              <div className="neo-outset p-3 rounded-xl max-w-[80%]">
                Hello! How can I help you with your travel plans today?
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="neo-input flex-1"
            />
            <button className="neo-button p-3 text-blue-600 hover:text-blue-700">
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { BookOpen, Lightbulb, AlertTriangle } from 'lucide-react';
import type { EmulatorGuide } from '../data/emulatorGuides';

interface EmulatorGuideProps {
  guide: EmulatorGuide;
  onClose: () => void;
}

const EmulatorGuide: React.FC<EmulatorGuideProps> = ({ guide, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1a1a] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-[#1a1a1a] p-6 border-b border-[#2a2a2a]">
          <h2 className="text-3xl font-bold text-[#ff6b6b]">{guide.title}</h2>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-[#ff6b6b]" />
              Installation Steps
            </h3>
            <div className="space-y-4">
              {guide.steps.map((step, index) => (
                <div key={index} className="bg-[#2a2a2a] p-4 rounded">
                  <h4 className="font-bold text-[#ff6b6b] mb-2">
                    {index + 1}. {step.title}
                  </h4>
                  <p className="text-gray-300">{step.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-[#ff6b6b]" />
              Pro Tips
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {guide.tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-[#ff6b6b]" />
              Troubleshooting
            </h3>
            <div className="space-y-4">
              {guide.troubleshooting.map((item, index) => (
                <div key={index} className="bg-[#2a2a2a] p-4 rounded">
                  <h4 className="font-bold text-white mb-2">{item.problem}</h4>
                  <p className="text-gray-300">{item.solution}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmulatorGuide;
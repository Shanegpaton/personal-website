'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, Eye, EyeOff, FileText, Code } from 'lucide-react';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function ResumeViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [showViewer, setShowViewer] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Shane_Paton_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card-dark p-8 glow-effect">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FileText className="w-8 h-8 text-accent-400" />
          <h2 className="text-3xl font-bold gradient-text">Resume</h2>
        </div>
        <p className="text-dark-300 mb-6">
          Download my resume or view it online below.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={downloadResume}
            className="btn-primary inline-flex items-center justify-center glow-effect"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </button>
          
          <button
            onClick={() => setShowViewer(!showViewer)}
            className="btn-secondary inline-flex items-center justify-center"
          >
            {showViewer ? (
              <>
                <EyeOff className="w-5 h-5 mr-2" />
                Hide Preview
              </>
            ) : (
              <>
                <Eye className="w-5 h-5 mr-2" />
                View Online
              </>
            )}
          </button>
        </div>
      </div>

      {showViewer && (
        <div className="border border-dark-600 rounded-lg overflow-hidden bg-dark-800">
          <div className="bg-dark-700 px-4 py-3 border-b border-dark-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-code-green" />
              <span className="text-dark-300 text-sm font-mono">Shane_Paton_Resume.pdf</span>
            </div>
            <p className="text-sm text-dark-400">
              Page {pageNumber} of {numPages || '...'}
            </p>
          </div>
          
          <div className="flex justify-center bg-dark-900 p-4">
            <Document
              file="/resume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              className="shadow-2xl rounded-lg overflow-hidden"
            >
              <Page
                pageNumber={pageNumber}
                width={600}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            </Document>
          </div>
          
          {numPages && numPages > 1 && (
            <div className="bg-dark-700 px-4 py-3 border-t border-dark-600 flex justify-between items-center">
              <button
                onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                disabled={pageNumber <= 1}
                className="px-4 py-2 bg-dark-800 border border-dark-600 rounded-lg hover:bg-dark-700 hover:border-accent-500 disabled:opacity-50 disabled:cursor-not-allowed text-dark-300 transition-colors"
              >
                Previous
              </button>
              
              <span className="text-sm text-dark-300 font-mono">
                {pageNumber} / {numPages}
              </span>
              
              <button
                onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                disabled={pageNumber >= numPages}
                className="px-4 py-2 bg-dark-800 border border-dark-600 rounded-lg hover:bg-dark-700 hover:border-accent-500 disabled:opacity-50 disabled:cursor-not-allowed text-dark-300 transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

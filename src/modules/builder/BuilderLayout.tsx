import EditorLayout from './editor/EditorLayout';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const BuilderLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <NavBarLayout />
      <main className="flex flex-col md:flex-row flex-1 max-h-[calc(100vh_-_3.5rem)] print:max-h-fit overflow-hidden">
        <div className="flex flex-col flex-1 justify-center bg-custom-grey100 print:bg-white overflow-hidden">
          <header className="w-full max-w-[210mm] mt-5 mb-3 mx-auto px-4 print:hidden">
            <ResumeHeader />
          </header>
          <div
            className="overflow-auto no-scrollbar p-2 md:p-4 flex-1"
            role="region"
            aria-label="Resume preview"
          >
            <ResumeLayout />
          </div>
        </div>
        {
          isSidebarOpen && (
            <aside
          className={`w-full md:w-[25vw] md:min-w-[20rem] md:max-w-[30rem] h-[40vh] md:h-auto print:hidden border-t md:border-l border-gray-200 transition-all duration-300 ${
            isSidebarOpen ? 'translate-x-0' : 'md:translate-x-full'
          }`}
          aria-label="Resume editor"
        >
            <EditorLayout />
          </aside>
        )}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`fixed bottom-4 right-4 bg-resume-800 text-white p-2 rounded-full shadow-lg hover:bg-resume-700 transition-all duration-300 z-50 print:hidden md:right-4 ${
            isSidebarOpen ? 'md:right-[25vw]' : 'md:right-4'
          }`}
          aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            )}
          </svg>
        </button>
      </main>

      <footer className="print:hidden">
        <Tooltip title="Share feedback">
          <a
            href="https://forms.gle/YmpXEZLk6LYdnqet7"
            target="_blank"
            rel="noreferrer"
            className="fixed w-14 h-14 rounded-full bottom-4 left-4 flex justify-center items-center bg-resume-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
            aria-label="Share feedback about the resume builder"
          >
            <Image src="/icons/rate-review.svg" alt="Feedback button" width="24" height="24" />
          </a>
        </Tooltip>
      </footer>
    </div>
  );
};

export default BuilderLayout;

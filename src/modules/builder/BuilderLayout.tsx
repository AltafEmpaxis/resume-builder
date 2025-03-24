import EditorLayout from './editor/EditorLayout';
import Image from 'next/image';
import NavBarLayout from './nav-bar/NavBarLayout';
import ResumeHeader from './resume/components/ResumeHeader';
import { ResumeLayout } from './resume/ResumeLayout';
import Tooltip from '@mui/material/Tooltip';

const BuilderLayout = () => {
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
        <aside 
          className="w-full md:w-[25vw] md:min-w-[20rem] md:max-w-[30rem] h-[40vh] md:h-auto print:hidden border-t md:border-l border-gray-200" 
          aria-label="Resume editor"
        >
          <EditorLayout />
        </aside>
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

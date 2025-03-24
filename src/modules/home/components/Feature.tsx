import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiLayers, FiStar, FiDownload, FiShield, FiEye, FiClock } from 'react-icons/fi';

function FeatureSection() {
  const features = [
    {
      icon: <FiLayers className="h-6 w-6 text-resume-700" />,
      title: 'Professional Templates',
      description:
        'Choose from a variety of professionally designed templates to make your resume stand out.',
    },
    {
      icon: <FiStar className="h-6 w-6 text-resume-700" />,
      title: 'Easy Customization',
      description:
        'Personalize your resume with custom colors, fonts, and layouts to match your style.',
    },
    {
      icon: <FiDownload className="h-6 w-6 text-resume-700" />,
      title: 'Export Options',
      description: 'Download your resume as a PDF to share with potential employers.',
    },
    {
      icon: <FiShield className="h-6 w-6 text-resume-700" />,
      title: 'ATS-Friendly',
      description: 'Our resumes are designed to pass through Applicant Tracking Systems.',
    },
    {
      icon: <FiEye className="h-6 w-6 text-resume-700" />,
      title: 'Real-time Preview',
      description: 'See your changes instantly as you build your resume.',
    },
    {
      icon: <FiClock className="h-6 w-6 text-resume-700" />,
      title: 'Quick & Easy',
      description: 'Build your professional resume in minutes with our intuitive interface.',
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
    >
      <Link href="/builder" className="block">
        <div className="flex flex-col h-full">
          <div className="bg-resume-50 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureSection;

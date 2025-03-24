import { motion, useAnimation, AnimationGeneratorType } from 'framer-motion';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowRight, BsCheck2Circle } from 'react-icons/bs';
import { FiDownload, FiLayers, FiStar } from 'react-icons/fi';
import FeatureSection from './components/Feature';
import ResumeHeroImage from './components/ResumeHeroImage';
import AnimatedBadge from './components/AnimatedBadge';
import BackgroundPattern from './components/BackgroundPattern';
import React from 'react';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transitionEffects = {
    type: 'spring' as AnimationGeneratorType,
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1] }}
      className="min-h-screen bg-white text-gray-800"
    >
      {/* Modern Navbar with Glass Effect */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src={'/icons/resume-icon.png'}
                  alt="logo"
                  height="32"
                  width="32"
                  className="mr-2"
                />
                <span className="font-bold text-xl text-resume-800 tracking-tight">
                  ResumeBuilder
                </span>
              </Link>

              <div className="hidden md:ml-8 md:flex md:items-center md:space-x-6">
                <Link
                  href="/builder"
                  className="text-gray-700 hover:text-resume-700 font-medium text-sm transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  Create Resume
                </Link>

                <div className="relative group">
                  <button className="text-gray-700 hover:text-resume-700 font-medium text-sm transition-colors px-3 py-2 rounded-md hover:bg-gray-50 flex items-center">
                    Templates
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Professional
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Creative
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Minimal
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Academic
                      </a>
                    </div>
                  </div>
                </div>

                <Link
                  href="#features"
                  className="text-gray-700 hover:text-resume-700 font-medium text-sm transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  Features
                </Link>

                <Link
                  href="#contribute"
                  className="text-gray-700 hover:text-resume-700 font-medium text-sm transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
                >
                  Contribute
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block">
                <Link
                  href="/builder"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-resume-700 hover:bg-resume-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-resume-500 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              <a
                href={'https://github.com/AltafEmpaxis/resume-builder'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center hover:bg-gray-100 rounded-full p-2 transition-colors"
              >
                <BsGithub className="h-5 w-5" />
              </a>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-resume-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-resume-500">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <BackgroundPattern />
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-8 pt-10 sm:pt-12 md:pt-16 md:pb-20 lg:pt-20 lg:pb-28 xl:pt-24 xl:pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Create professional</span>
                    <span className="block text-resume-700 mt-1">resumes in minutes</span>
                  </h1>
                  <p className="mt-4 text-base text-gray-600 sm:text-lg md:text-xl max-w-2xl">
                    Stand out from the crowd with a beautifully designed resume that highlights your
                    skills and experience. Our easy-to-use builder makes it simple to create a
                    stunning resume in just minutes.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <AnimatedBadge
                      text="ATS-Friendly Templates"
                      className="bg-blue-100 text-blue-800"
                      delay={0.3}
                    />
                    <AnimatedBadge
                      text="No Sign-up Required"
                      className="bg-green-100 text-green-800"
                      delay={0.5}
                    />
                    <AnimatedBadge
                      text="Privacy Focused"
                      className="bg-purple-100 text-purple-800"
                      delay={0.7}
                    />
                  </div>
                </motion.div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Link href="/builder">
                      <Button
                        variant="contained"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-resume-700 hover:bg-resume-800 md:py-4 md:text-lg md:px-10"
                      >
                        Get Started
                        <BsArrowRight className="ml-2" />
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <a
                      href="#features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-resume-700 bg-white hover:bg-gray-50 border-gray-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </motion.div>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <motion.div
                  className="w-full max-w-md lg:max-w-lg"
                  onMouseEnter={() => controls.start(animationEffectsHoverEnter, transitionEffects)}
                  onMouseLeave={() => controls.start(animationEffectsHoverLeave, transitionEffects)}
                  animate={controls}
                >
                  <ResumeHeroImage />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved Divider */}
        <div className="w-full h-12 md:h-24 bg-white relative -mt-1">
          <svg
            className="absolute bottom-full w-full h-12 md:h-24 text-white"
            viewBox="0 0 1440 96"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,69.3C840,75,960,53,1080,48C1200,43,1320,53,1440,64L1440,96L1380,96C1320,96,1200,96,1080,96C960,96,840,96,720,96C600,96,480,96,360,96C240,96,120,96,60,96L0,96Z"></path>
          </svg>
        </div>
      </div>

      {/* Key Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-50 opacity-50 z-0">
          <svg
            className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4 lg:translate-x-1/4 xl:-translate-y-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
          </svg>
          <svg
            className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/4 lg:-translate-x-1/4 xl:translate-y-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0f-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect width="404" height="404" fill="url(#85737c0f-0916-41d7-917f-596dc7edfa27)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-base text-resume-700 font-semibold tracking-wide uppercase">
                Features
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to build a standout resume
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Our intuitive resume builder provides all the tools you need to create a
                professional resume that gets noticed by employers.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <FeatureSection />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-base text-resume-700 font-semibold tracking-wide uppercase">
                About Us
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The Team Behind ResumeBuilder
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We're a passionate team of developers, designers, and career experts committed to
                helping job seekers create professional resumes.
              </p>
            </motion.div>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative h-full"
              >
                <div className="aspect-w-3 aspect-h-2 lg:aspect-none rounded-2xl overflow-hidden h-full bg-resume-50">
                  <div className="w-full h-full flex items-center justify-center p-8 text-center">
                    <p className="text-lg text-gray-600">
                      We are dedicated to providing professional and accessible tools to help you
                      create standout resumes that get you noticed by employers.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  Our mission is to empower job seekers with the tools they need to stand out in
                  competitive job markets. We believe that everyone deserves access to professional
                  resume-building tools, regardless of their design skills or technical abilities.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-6">
                  We've combined our expertise in design, technology, and career development to
                  create an intuitive platform that makes resume creation simple and accessible. Our
                  templates are professionally designed and optimized for Applicant Tracking Systems
                  to maximize your chances of landing interviews.
                </p>

                <div className="flex flex-col md:flex-row gap-4 mt-2">
                  <div className="flex items-center">
                    <BsCheck2Circle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-800">Open-source platform</span>
                  </div>
                  <div className="flex items-center">
                    <BsCheck2Circle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-800">Privacy-focused</span>
                  </div>
                  <div className="flex items-center">
                    <BsCheck2Circle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-800">Expert-designed templates</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-resume-700 to-resume-900 text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute left-0 top-0 h-full w-full" viewBox="0 0 800 800" fill="none">
            <defs>
              <pattern
                id="dots-pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="3" cy="3" r="3" fill="white"></circle>
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#dots-pattern)"></rect>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Ready to build your professional resume?</span>
                  <span className="block text-resume-100 mt-1">Start creating for free today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-resume-100">
                  No sign-up required. Just start building and download when you're done. Join
                  thousands of job seekers who have successfully landed their dream jobs using our
                  platform.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/builder">
                    <Button
                      variant="contained"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-resume-700 bg-white hover:bg-gray-50 shadow-lg sm:px-8"
                    >
                      Create My Resume
                    </Button>
                  </Link>
                  <a
                    href="#features"
                    className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-resume-800 sm:px-8 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
              >
                <div className="flex flex-col space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-resume-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 0-4.15H8.574a2.075 2.075 0 0 0 0 4.15zm0 6.074h6.852a2.075 2.075 0 0 0 0-4.149H8.574a2.075 2.075 0 0 0 0 4.149z" />
                        <path d="M4.615 0.5C2.633 0.5 1.005 2.033 1.005 3.91v16.18c0 1.877 1.628 3.41 3.61 3.41h14.77c1.982 0 3.61-1.533 3.61-3.41V3.91c0-1.877-1.628-3.41-3.61-3.41H4.615zm0 2h14.77c0.816 0 1.61 0.685 1.61 1.41v16.18c0 0.725-0.794 1.41-1.61 1.41H4.615c-0.816 0-1.61-0.685-1.61-1.41V3.91c0-0.725 0.794-1.41 1.61-1.41z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-resume-100 font-medium">ATS-Friendly Templates</p>
                      <p className="mt-1 text-sm text-white">
                        Our templates are designed to pass through Applicant Tracking Systems.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-resume-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-resume-100 font-medium">Real-time Preview</p>
                      <p className="mt-1 text-sm text-white">
                        See changes instantly as you build your professional resume.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-resume-100"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 9.5V5.5L13 .5H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2v-9l-5-5zm-5.99 6.38l-.74 3.58-2.78-1.49-2.78 1.49-.74-3.58L2 13.5l3.18-1.63L6.38 8.41 8.99 9.99l2.63-1.58 1.2 3.37L16 13.5l-3.99 2.38z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-resume-100 font-medium">Premium Quality</p>
                      <p className="mt-1 text-sm text-white">
                        Professional templates designed by career experts.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-base text-resume-700 font-semibold tracking-wide uppercase">
                Open Source
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Contribute to the Project
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                This resume builder is an open-source project. Join our community and help make it
                even better!
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <ContributeCard
              icon={'/icons/palette.svg'}
              title="Design"
              description="Help us create beautiful templates and improve the user interface."
            />
            <ContributeCard
              icon={'/icons/terminal.svg'}
              title="Development"
              description="Contribute code to enhance functionality and fix bugs."
            />
            <ContributeCard
              icon={'/icons/wave.svg'}
              title="Community"
              description="Join discussions and help other users make the most of our tool."
            />
          </div>

          <div className="mt-16 lg:text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Meet The Developer</h3>
            <div className="flex justify-center">
              <ContributorCard
                name="Md Altaf Raja"
                role="Full Stack Developer"
                avatar="/icons/placeholder-avatar.svg"
                github="AltafEmpaxis"
                linkedin="mdaltafraja"
                website="https://altaf-portfolio.netlify.app/"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/AltafEmpaxis/resume-builder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-resume-800 hover:bg-resume-900 text-white rounded-md text-base font-medium transition-colors"
            >
              <BsGithub className="mr-2 h-5 w-5" />
              CONTRIBUTE ON GITHUB
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center">
                <Image
                  src={'/icons/resume-icon.png'}
                  alt="logo"
                  height="36"
                  width="36"
                  className="mr-2"
                />
                <span className="font-bold text-xl">ResumeBuilder</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Create professional resumes in minutes with our easy-to-use builder.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="https://github.com/AltafEmpaxis/resume-builder"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <BsGithub className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Product
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link
                    href="/builder"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Create Resume
                  </Link>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Examples
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#contribute"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Contribute
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/AltafEmpaxis/resume-builder"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Stay Updated
              </h3>
              <p className="mt-4 text-sm text-gray-400">
                Subscribe to our newsletter for the latest updates.
              </p>
              <form className="mt-4">
                <div className="flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none min-w-0 w-full bg-gray-800 border border-gray-700 rounded-l py-2 px-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-resume-500 focus:border-resume-500"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-r text-white bg-resume-700 hover:bg-resume-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-resume-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} ResumeBuilder. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

// Contribute Card Component
const ContributeCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div whileHover={{ y: -5 }} className="bg-white rounded-lg shadow-md p-8 text-center">
      <div className="bg-resume-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-5">
        <Image src={icon} alt={title} width="32" height="32" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

// Contributor Card Component
const ContributorCard = ({
  name,
  role,
  avatar,
  github,
  linkedin,
  website,
}: {
  name: string;
  role: string;
  avatar: string;
  github: string;
  linkedin: string;
  website?: string;
}) => {
  // Use a fallback div for avatar if image fails to load
  const [imageError, setImageError] = React.useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center"
    >
      {!imageError ? (
        <Image
          src={avatar}
          alt={name}
          width={80}
          height={80}
          className="rounded-full mb-4 object-cover bg-resume-50"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-20 h-20 rounded-full mb-4 bg-resume-50 flex items-center justify-center text-2xl font-bold text-gray-500">
          {name.charAt(0)}
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{role}</p>
      <div className="mt-2 flex space-x-4">
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-resume-700 transition-colors"
          aria-label={`${name}'s GitHub profile`}
        >
          <BsGithub className="h-5 w-5" />
        </a>
        <a
          href={`https://linkedin.com/in/${linkedin}`}
          target="_blank"
          rel="noreferrer"
          className="text-gray-600 hover:text-resume-700 transition-colors"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-resume-700 transition-colors"
            aria-label={`${name}'s website`}
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default HomeLayout;

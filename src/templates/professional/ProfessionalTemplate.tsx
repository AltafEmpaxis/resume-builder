import React, { useContext } from 'react';

import AboutMe from './components/AboutMe';
import Achievements from './components/Achievements';
import BasicIntro from './components/BasicIntro';
import { Education } from './components/Education';
import Involvement from './components/Involvement';
import { Objective } from './components/Objective';
import RatedSkills from './components/RatedSkills';
import { Section } from './components/Section';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import UnratedSkills from './components/UnratedSkills';
import Work from './components/Work';
import styled from '@emotion/styled';
import { IActivity } from '@/stores/activity.interface';

const ResumeContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 40px 25px;
  column-gap: 10px;
  font-family: 'Inter', 'Roboto', sans-serif;

  @media print {
    border: none;
    padding: 30px 20px;
    width: 100%;
    box-sizing: border-box;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 66%;
  row-gap: 20px;
  height: 100%;
  
  @media print {
    flex-basis: 65%;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 34%;
  row-gap: 20px;
  height: 100%;
  font-size: 11px;
  
  @media print {
    flex-basis: 35%;
  }
`;

export default function ProfessionalTemplate() {
  const resumeData = useContext(StateContext);
  
  // Safety checks for all properties
  const basics = resumeData?.basics || {};
  const skills = resumeData?.skills || {
    languages: [],
    frameworks: [],
    technologies: [],
    libraries: [],
    databases: [],
    practices: [],
    tools: []
  };
  
  // Safety checks for other sections
  const work = resumeData?.work || [];
  const education = resumeData?.education || [];
  
  // Create mock involvements and achievements for testing - these will be displayed
  const involvements = `<ul>
    <li>Prevented millions of dollars in state sales tax undercharges by initiating tests that revealed a bug in a new release of shopping cart software.</li>
    <li>Isolated previously undiscovered flaw in price checking tool resulting in more competitive pricing and a 20 percent increase in revenue.</li>
    <li>Implemented automated testing tools spawning more diligent levels of regression testing, negative testing, error/bug retests and usability.</li>
    <li>Developed and maintained a web application using React and Redux for managing user accounts and permissions.</li>
  </ul>`;
  
  const achievements = `<ul>
    <li>React and redux - A complete guide 2020 from Udemy</li>
    <li>Agile and Scrum Master Certificate from Udacity</li>
    <li>Best performer award for consistently exceeding the performance</li>
    <li>Certificate of exceptional bug finder by XYZ client</li>
    <li>Recognition zero defect delivery</li>
  </ul>`;

  return (
    <ResumeContainer>
      <LeftSection>
        <Section
          title={basics.name || ''}
          profiles={basics.profiles || []}
          portfolioUrl={basics.url || ''}
          titleClassname="text-xl font-medium"
        >
          <BasicIntro basics={basics} />
        </Section>
        <SectionValidator value={work}>
          <Section title="Work Experience">
            <Work work={work} />
          </Section>
        </SectionValidator>

        <SectionValidator value={involvements}>
          <Section title="Key Projects / Involvements">
            <Involvement data={involvements} />
          </Section>
        </SectionValidator>

        <SectionValidator value={achievements}>
          <Section title="Certificates and Awards">
            <Achievements data={achievements} />
          </Section>
        </SectionValidator>
      </LeftSection>

      <RightSection>
        <SectionValidator value={basics.summary}>
          <Section title="Summary">
            <AboutMe summary={basics.summary || ''} profileImage={basics.image || ''} />
          </Section>
        </SectionValidator>

        <SectionValidator value={basics.objective}>
          <Section title="Career Objective">
            <Objective objective={basics.objective || ''} />
          </Section>
        </SectionValidator>

        <SectionValidator value={skills.languages.concat(skills.frameworks)}>
          <Section title="Technical expertise">
            <RatedSkills items={skills.languages.concat(skills.frameworks)} />
          </Section>
        </SectionValidator>

        <SectionValidator value={skills.technologies.concat(skills.libraries, skills.databases)}>
          <Section title="Skills / Exposure">
            <UnratedSkills items={skills.technologies.concat(skills.libraries, skills.databases)} />
          </Section>
        </SectionValidator>
        <SectionValidator value={skills.practices}>
          <Section title="Methodology/Approach">
            <UnratedSkills items={skills.practices} />
          </Section>
        </SectionValidator>
        <SectionValidator value={skills.tools}>
          <Section title="Tools">
            <UnratedSkills items={skills.tools} />
          </Section>
        </SectionValidator>
        <SectionValidator value={education}>
          <Section title="Education">
            <Education education={education} />
          </Section>
        </SectionValidator>
      </RightSection>
    </ResumeContainer>
  );
}

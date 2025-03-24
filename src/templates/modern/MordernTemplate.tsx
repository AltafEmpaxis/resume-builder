import { BasicIntro } from './components/BasicIntro';
import { EducationSection } from './components/Education';
import { VolunteerSection } from './components/Volunteer';
import { Objective } from './components/Objective';
import { SkillsSection } from './components/Skills';
import { SummarySection } from './components/Summary';
import { WorkSection } from './components/Work';
import { AwardSection } from './components/Awards';
import { useContext } from 'react';
import { StateContext } from '@/modules/builder/resume/ResumeLayout';
import { SectionValidator } from '@/helpers/common/components/ValidSectionRenderer';
import { IWorkIntrf, IEducation, IAwards } from '@/stores/index.interface';
import dayjs from 'dayjs';

export default function MordernTemplate() {
  const resumeData = useContext(StateContext);

  // Safety defaults
  const basics = resumeData?.basics || {};
  const location = basics.location || {};
  const skills = resumeData?.skills || {
    languages: [],
    frameworks: [],
    technologies: [],
    libraries: [],
    databases: [],
    practices: [],
    tools: [],
  };
  const work = resumeData?.work || [];
  const education = resumeData?.education || [];
  const awards = resumeData?.awards || [];
  const volunteer = resumeData?.volunteer || [];

  // Convert any IExperienceItem[] to IWorkIntrf[] by adding the missing website property
  const workWithWebsite: IWorkIntrf[] = work.map((item) => ({
    ...item,
    website: item.url || '', // Use url as website if not provided
    startDate: dayjs(item.startDate), // Convert string to dayjs
    endDate: dayjs(item.endDate), // Convert string to dayjs
  }));

  // Convert education items
  const educationWithWebsite: IEducation[] = education.map((item) => ({
    ...item,
    website: item.url || '', // Use url as website if not provided
    startDate: dayjs(item.startDate), // Convert string to dayjs
    endDate: dayjs(item.endDate), // Convert string to dayjs
  }));

  // Convert award items
  const awardsConverted: IAwards[] = awards.map((item) => ({
    ...item,
    date: dayjs(item.date), // Convert string to dayjs
  }));

  return (
    <div className="p-2">
      <BasicIntro
        name={basics.name || ''}
        label={basics.label || ''}
        url={basics.url || ''}
        email={basics.email || ''}
        city={location.city || ''}
        phone={basics.phone || ''}
        image={basics.image || ''}
        profiles={basics.profiles || []}
      />
      <div className="flex">
        <div className="basis-[60%] p-3">
          <SectionValidator value={basics.summary}>
            <SummarySection summary={basics.summary || ''} />
          </SectionValidator>

          <SectionValidator value={work}>
            <WorkSection experience={workWithWebsite} />
          </SectionValidator>

          <SectionValidator value={awards}>
            <AwardSection awardsReceived={awardsConverted} />
          </SectionValidator>
        </div>

        <div className="basis-[40%] p-3">
          <SectionValidator value={basics.objective}>
            <Objective objective={basics.objective || ''} />
          </SectionValidator>

          <SectionValidator value={skills.languages}>
            <SkillsSection title="Languages" list={skills.languages} />
          </SectionValidator>

          <SectionValidator value={skills.technologies}>
            <SkillsSection title="Technologies" list={skills.technologies} />
          </SectionValidator>

          <SectionValidator value={skills.frameworks}>
            <SkillsSection
              title="Frameworks & Libraries"
              list={skills.frameworks.concat(skills.libraries)}
            />
          </SectionValidator>

          <SectionValidator value={skills.tools}>
            <SkillsSection title="Tools" list={skills.tools} />
          </SectionValidator>

          <SectionValidator value={education}>
            <EducationSection education={educationWithWebsite} />
          </SectionValidator>

          <SectionValidator value={volunteer}>
            <VolunteerSection volunteer={volunteer} />
          </SectionValidator>
        </div>
      </div>
    </div>
  );
}

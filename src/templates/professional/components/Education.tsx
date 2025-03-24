import { IEducation } from '@/stores/index.interface';
import { dateParser } from '@/helpers/utils';

// Define a more flexible type that doesn't require the website property
type EducationItem = {
  institution: string;
  studyType: string;
  area: string;
  startDate: any;
  endDate: any;
  isStudyingHere?: boolean;
};

export const Education = ({ education }: { education: (IEducation | EducationItem)[] }) => {
  return (
    <div className="flex flex-col gap-5">
      {education.map((item, index: number) => {
        return (
          <div key={index}>
            <div>
              <p className="font-medium text-sm">
                {item.studyType} - {item.area}
              </p>
              <div className="flex justify-between font-normal text-xs">
                <p className="font-medium">{item.institution}</p>
                <p>
                  {`${dateParser(item.startDate)} - ${
                    'isStudyingHere' in item && item.isStudyingHere ? 'present' : dateParser(item.endDate)
                  }`}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

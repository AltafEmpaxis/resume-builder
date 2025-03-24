/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { RichtextEditor } from '@/helpers/common/components/richtext';
import { IBasics } from '@/stores/index.interface';

interface AboutProps {
  basicTabs: IBasics;
  onChangeHandler: (value: string, key: string) => void;
}

const About: React.FC<AboutProps> = ({ basicTabs, onChangeHandler }) => {
  return (
    <div className="space-y-4 my-2">
      <RichtextEditor
        label="Career Objective"
        value={basicTabs.objective}
        onChange={(value) => onChangeHandler(value, 'objective')}
        name="objective"
      />
      <RichtextEditor
        label="About me"
        value={basicTabs.summary}
        onChange={(value) => onChangeHandler(value, 'summary')}
        name="summary"
      />
    </div>
  );
};

export default About;

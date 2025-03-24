import React, { Fragment } from 'react';
import { useBasicDetails } from '@/stores/basic';
import BasicHeader from './components/BasicHeader';
import BasicPanel from './components/BasicPanel';

const tabTitles = ['Contacts', 'Links', 'About'];

const BasicLayout = () => {
  const [activeTab, setActiveTab] = React.useState(0);
  const basicTabs = useBasicDetails((state) => state.values);
  const resetBasicDetails = useBasicDetails.getState().reset;

  // Create a wrapper function that matches the expected signature
  const onChangeText = (value: string | boolean, key: string) => {
    // Create a copy of basicTabs and update only the changed field
    const updatedBasicTabs = { ...basicTabs, [key]: value };
    resetBasicDetails(updatedBasicTabs);
  };

  const changeActiveTab = (event: React.SyntheticEvent, activeTab: number) => {
    setActiveTab(activeTab);
  };

  return (
    <Fragment>
      <BasicHeader
        activeTab={activeTab}
        changeActiveTab={changeActiveTab}
        tabTitles={tabTitles}
      ></BasicHeader>
      <BasicPanel basicTabs={basicTabs} onChangeText={onChangeText}></BasicPanel>
    </Fragment>
  );
};

export default BasicLayout;

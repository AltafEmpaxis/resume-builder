/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid } from '@mui/material';
import About from './About';
import Contacts from './Contacts';
import Links from './Links';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import { IBasics } from '@/stores/index.interface';

interface BasicPanelProps {
  basicTabs: IBasics;
  onChangeText: (value: string | boolean, key: string) => void;
}

const BasicPanel = ({ basicTabs, onChangeText }: BasicPanelProps) => {
  const onChangeHandler = (value: string | boolean, key: string) => {
    onChangeText(value, key);
  };

  const [tabIndex, setTabIndex] = useState(0);

  const a11yProps = (index: number) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  };

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box className="p-4 h-full flex flex-col">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="mb-6">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          aria-label="Basic information tabs"
          variant="scrollable"
          scrollButtons="auto"
          className="font-medium"
          TabIndicatorProps={{
            style: {
              height: '3px',
            },
          }}
        >
          <Tab label="About" {...a11yProps(0)} className="font-medium text-sm" />
          <Tab label="Contacts" {...a11yProps(1)} className="font-medium text-sm" />
          <Tab label="Social Links" {...a11yProps(2)} className="font-medium text-sm" />
        </Tabs>
      </Box>
      <Box className="overflow-auto flex-1">
        <Grid item xs={12} hidden={tabIndex !== 0} role="tabpanel" aria-labelledby={`tab-${0}`}>
          <About basicTabs={basicTabs} onChangeHandler={onChangeHandler} />
        </Grid>
        <Grid item xs={12} hidden={tabIndex !== 1} role="tabpanel" aria-labelledby={`tab-${1}`}>
          <Contacts basicTabs={basicTabs} onChangeHandler={onChangeHandler} />
        </Grid>
        <Grid item xs={12} hidden={tabIndex !== 2} role="tabpanel" aria-labelledby={`tab-${2}`}>
          <Links basicTabs={basicTabs} onChangeHandler={onChangeHandler} />
        </Grid>
      </Box>
    </Box>
  );
};

export default BasicPanel;

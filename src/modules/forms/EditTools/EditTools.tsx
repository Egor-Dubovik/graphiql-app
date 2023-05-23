import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Tab,
  Typography,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QueryVariables from '../../../components/graphql/QueryVariables/QueryVariables';
import QueryHeaders from '../../../components/graphql/QueryHeaders/QueryHeaders';

const EditorTools = () => {
  const [value, setValue] = React.useState('Variables');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ position: 'absolute', bottom: '0', p: '0' }}>
      <Accordion sx={{ boxShadow: 'none', width: '100%' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={'GrayText'}>Show more</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '0' }}>
          <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="Tabs">
                  <Tab label="Variables" value="Variables" />
                  <Tab label="Headers" value="Headers" />
                </TabList>
              </Box>
              <TabPanel sx={{ p: '0' }} value="Variables">
                <QueryVariables />
              </TabPanel>
              <TabPanel sx={{ p: '0' }} value="Headers">
                <QueryHeaders />
              </TabPanel>
            </TabContext>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default EditorTools;

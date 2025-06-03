import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Stack, useTheme } from '@mui/material';
import Header from "../../components/Header";
const FAQ = () => {
    const [expanded, setExpanded] = React.useState('panel1'); // أول أكوردين مفتوح افتراضيًا
    const theme = useTheme();
    const textColor = theme.palette.mode === 'dark' ? '#41C1AA' : '#1F2A40';

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
<Box>
        
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />
  
        <Stack direction="column" gap={2}>
            {[
                { id: 'panel1', title: 'General settings', desc: 'I am an accordion', content: 'Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.', defaultExpanded: true },
                { id: 'panel2', title: 'Users', desc: 'You are currently not an owner', content: 'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit.' },
                { id: 'panel3', title: 'Advanced settings', desc: 'Filtering has been entirely disabled for whole web server', content: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.' },
                { id: 'panel4', title: 'Personal data', desc: 'You are currently not an owner', content: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.' },
                { id: 'panel5', title: 'Personal data', desc: 'Donec placerat, lectus sed mattis semper, neque ', content: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.' },
                { id: 'panel6', title: 'Personal data', desc: 'Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim q', content: 'Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue.' }
            ].map(({ id, title, desc, content, defaultExpanded }) => (
                <Accordion 
                    key={id} 
                    expanded={expanded === id} 
                    onChange={handleChange(id)}
                    defaultExpanded={defaultExpanded} // فقط أول أكوردين مفتوح افتراضيًا
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`${id}-content`} id={`${id}-header`}>
                        <Typography component="span" sx={{ width: '33%', flexShrink: 0, color: textColor }}>
                            {title}
                        </Typography>
                        {desc && <Typography component="span" sx={{ color: 'text.secondary' }}>{desc}</Typography>}
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Stack>
        </Box>
    );
};

export default FAQ;

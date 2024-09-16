
import React from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const faqData: FaqItem[] = [
    { question: 'Why should I opt for BSSE ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: 'Why should I opt for BSSE ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: 'Why should I opt for BSSE ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: 'Why should I opt for BSSE ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: 'Why should I opt for BSSE ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: 'Why should I opt for BSSE ?', answer: 'Answer to why opt for BSSE' },
    { question: 'Why should I opt for BSSE ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { question: 'Why should I opt for BSSE ?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
  ];

  return (
    <Box sx={{  px: { xs: 5, sm: 8, md: 10, lg: 12, }, paddingBottom: 5, textAlign: 'center', background: '#f4f6f8' }}>
      <Typography variant="h4" color="#003478" fontWeight="bold" gutterBottom>
        Faq's
      </Typography>
      <Grid container spacing={3}>
        {faqData.map((faq, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <Accordion sx={{ margin: '5px' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Faq;

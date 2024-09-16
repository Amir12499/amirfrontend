
import React from 'react';
import { Box } from '@mui/material';
import PropertiesCard from './PropertiesCard';


const cardsData = [
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    image: '/images/aboutus/Group.png', 
  },
  {
   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    image: '/images/aboutus/Group1.png',
  },
  {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
    image: '/images/aboutus/Group2.png',
  },
];

function ComponentProperties() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
        flexWrap: 'wrap',
        gap: 4,
        justifyContent: 'flex-start',
        padding: 3,
       marginX:4,
      }}
    >
      {cardsData.map((card, index) => (
        <PropertiesCard
          key={index}
          image={card.image}
          text={card.text}
        />
      ))}
    </Box>
  );
}

export default ComponentProperties;
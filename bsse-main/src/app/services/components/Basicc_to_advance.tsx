import React from 'react';
import { Box, Grid, Card, Typography } from '@mui/material';
import Image from 'next/image';

const images = [
  { src: '/images/services/Group 237659 (1).png', alt: 'Java' },
  { src: '/images/services/Group 237660.png', alt: 'C++' },
  { src: '/images/services/Group 237661.png', alt: 'Python' },
  { src: '/images/services/Group 237662.png', alt: 'DBMS' },
  { src: '/images/services/Group 237663.png', alt: 'DSA' },
  { src: '/images/services/Group 237659.png', alt: 'Java' },
];

const Basic_to_advance = () => {
  return (
    <Card>
      <Typography 
        variant="h4" 
        className="mt-5" 
        color="#003478" 
        fontWeight="bold" 
        gutterBottom 
        textAlign='center'
      >
        Learn From basic to advance
      </Typography> 
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  width: '100%',
                  minWidth: 250,  // Ensure a minimum width
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive"
                  width={420}
                  height={80}
                  style={{ borderRadius: '20px', objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default Basic_to_advance;

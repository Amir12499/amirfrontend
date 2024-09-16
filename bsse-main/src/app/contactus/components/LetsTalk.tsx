import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const LetsTalk = () => {
  return (
    <Box
      sx={{
        height: '361px', // Full screen height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center horizontally
        backgroundImage: 'url(/images/career/background-men-image.png)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center', // Center text inside the container
          position: 'relative',
          zIndex: 1, // To ensure content is above the overlay
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#FFFFFF',
            fontWeight: 700,
          }}
        >
          Let's talk about
          <br />
           your idea!
        </Typography>
      </Container>
    </Box>
  );
};

export default LetsTalk;

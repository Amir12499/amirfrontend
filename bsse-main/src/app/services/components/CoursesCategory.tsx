'use client';
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardContent } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CoursesCategory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Card>
      <Box
        sx={{
          paddingX: {
            xs: '10px',   
            sm: '20px',  
            md: '20px',  
          },
        }}
      >
        <CardContent>
          <Typography
            variant='h6'
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#0F50A0',
              justifyContent: 'center',
              marginTop: '20px',
              textAlign: 'center',
              '@media (max-width: 600px)': {
                fontSize: '20px',
              },
            }}
          >
            Our Hiring Partners
          </Typography>

          <Slider {...settings}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <img src='/images/services/u1.png' alt='Partner 1' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <img src='/images/services/u2.png' alt='Partner 2' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <img src='/images/services/u3.png' alt='Partner 3' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <img src='/images/services/u4.png' alt='Partner 4' />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <img src='/images/services/u5.png' alt='Partner 5' />
            </Box>
          </Slider>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CoursesCategory;

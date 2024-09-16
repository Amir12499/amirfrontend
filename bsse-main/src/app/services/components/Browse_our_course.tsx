'use client';
import Head from 'next/head';
import Slider from 'react-slick';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Course {
  title: string;
  image: string;
  duration: string;
  level: string;
}

export default function Home() {
  const courses: Course[] = [
    {
      title: 'Python',
      image: '/images/services/python.png',
      duration: '120 Days',
      level: 'basic to advance'
    },
    {
      title: 'React JS',
      image: '/images/services/react.png',
      duration: '120 Days',
      level: 'basic to advance'
    },
    {
      title: 'Node JS',
      image: '/images/services/node.png',
      duration: '120 Days',
      level: 'basic to advance'
    },
    {
      title: 'expressjs',
      image: '/images/services/expressjs 1.jpg',
      duration: '120 Days',
      level: 'basic to advance'
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <Box sx={{ textAlign: 'center', padding: '50px', marginBottom: '20px', marginLeft: '0px',backgroundColor:'#F5F7F8' }}>
      <Typography variant="h4" color="#003478" fontWeight="bold" gutterBottom>
        Browse our Courses
      </Typography>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <Box key={index} sx={{ padding: '0px', margin: '10px' }}>
            <Card sx={{ maxWidth: 300, boxShadow: 3 }}>
              <Box
                className="bg-white pd-0"
                sx={{
                  padding: '40px',
                  margin: '0px',
                  backgroundColor: 'white', 
                  borderBottomLeftRadius: '50% 20%', 
                  borderBottomRightRadius: '50% 20%',
                }}
              >
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  sx={{
                    width: 100,
                    height: 100,
                    marginBottom: '16px',
                    marginTop: '16px',
                    margin: '0 auto',
                    padding: '10px',
                    backgroundColor: 'white', 
                    borderRadius: '0',
                  }}
                />
              </Box>
              <CardContent sx={{ backgroundColor: '#EBF3FF' }}>
                <Typography variant="h6" component="div" align="center" fontWeight="bold">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  {course.duration}
                </Typography>
                <Typography variant="body2" align="center">
                  {course.level}
                </Typography>
                <Box mt={2} textAlign="center">
                  <Button variant="text" color="primary">
                    Know More
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

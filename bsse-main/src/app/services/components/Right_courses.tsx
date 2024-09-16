"use client";
import React, { useRef } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface Course {
  title: string;
  description: string;
  duration: string;
}

const courses: Course[] = [
  {
    title: 'Full Stack Web Development',
    description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
    duration: '120 Days',
  },
  {
    title: 'Software Development',
    description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
    duration: '120 Days',
  },
  {
    title: 'App Development',
    description: 'The gradual accumulation of information about atomic and small-scale behaviour...',
    duration: '120 Days',
  },
  {
    title: 'Data Science',
    description: 'Learn data manipulation, visualization, and modeling...',
    duration: '150 Days',
  },
  {
    title: 'Machine Learning',
    description: 'Understand the concepts of AI and machine learning...',
    duration: '180 Days',
  },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (scrollOffset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollOffset,
        behavior: 'smooth',
      });
    }
  };

  const cardWidth = 300;
  const gap =2;
  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 4 }, textAlign: 'center', background: '#EBF3FF' }}>
      <Typography variant="h4" color="#003478" fontWeight="bold" gutterBottom>
        Find the right Course for you
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <IconButton onClick={() => scroll(-cardWidth)}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box
          ref={containerRef}
          sx={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            width: '100%',
            maxWidth: '1340px',
            '::-webkit-scrollbar': { display: 'none' },
            '-ms-overflow-style': 'none',             
            'scrollbar-width': 'none',               
          }}
        >
          {courses.map((course, index) => (
            <Card key={index} sx={{ minWidth: cardWidth, maxWidth: cardWidth, margin: gap }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
                  <img
                    src="/images/services/fixed-width.png"
                    alt="Next"
                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
                  {course.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'left', marginTop: 1, marginBottom: 5 }}>
                  {course.description}
                </Typography>
                <Divider sx={{ margin: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="body2" color="text.secondary">
                    {course.duration}
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                    know more
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <IconButton onClick={() => scroll(cardWidth+gap)}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

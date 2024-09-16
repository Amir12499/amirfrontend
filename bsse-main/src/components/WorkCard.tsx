// components/StatCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface StatCardProps {
  number: string;
  heading: string;
  content: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, heading, content }) => {
  return (
    <Card sx={{ maxWidth: 399,height:190, textAlign: 'left', padding: 1 }}>
      <CardContent>
        <Typography variant="h3" color="#003478" sx={{ marginBottom: '8px', fontWeight:'700' }} >
          {number}
        </Typography>
        <Typography variant="h5" component="div" color="#464646" sx={{ marginBottom: '4px', fontSize:'20px', fontWeight:'500'}} >
          {heading}
        </Typography>
        <Typography  variant="body2"color="#525151" sx={{}}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;

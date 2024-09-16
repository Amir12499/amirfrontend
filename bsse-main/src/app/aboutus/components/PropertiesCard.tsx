import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

interface FlightCardProps {
  image: string;
  text: string;
}

const PropertiesCard: React.FC<FlightCardProps> = ({ image, text }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
        maxWidth: { xs: '100%', sm: 350 }, // Full width on small screens, fixed width on larger screens
        marginBottom: 2,
        boxShadow: 'none', // Remove box shadow
        backgroundColor: 'transparent', // Remove background color
        border: 'none', // Remove border
        overflow: 'hidden',
        gap:2
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: 43,
          width:55,
          
        //   width: { xs: '100%', sm: 150 }, // Responsive image width
          objectFit: 'contain', // Ensure image scales properly
          marginTop:7,
          color:'#003478'
        }}
        image={image}
        alt="Card image"
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: { xs: 0, sm: 1 }, // No padding on small screens, padding on larger screens
          textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens
          
        }}
      >
        <Typography 
        sx={{
            // font:'inter',
            fontWeight:400,
            fontSize:14,
            color:'#000000'

        }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertiesCard;
import React from 'react';
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material';

const StudentLearning: React.FC = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#003478', 
        color: '#fff', 
        px: { xs: 5, sm: 8, md: 10, lg: 12, },
        paddingTop: 5,
        paddingBottom: 10,

        textAlign: 'center'
      }}
    >
     
      <Typography 
        variant="h4" 
        sx={{ 
          fontWeight: 'bold', 
          marginBottom: 4 
        }}
      >
        Here’s Why Students Are Learning with Us
      </Typography>
      
     
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center', 
          alignItems: 'center',
        }}
      >
        <Box 
          component="video" 
          src="/videos/services/waterfall.mp4" 
          controls 
          autoPlay 
          loop 
          muted 
          sx={{ 
            width: { xs: '100%', md: '44%' }, 
            borderRadius: 2, 
            marginBottom: { xs: 2, md: 0 },
            marginRight: { md: 2 }        
          }}
        />

<Card 
  sx={{ 
    width: { xs: '100%', md: '45%' },
    height: 320, 
    backgroundColor: '#fff', 
    color: '#000', 
    borderRadius: 2, 
    overflow: 'hidden', 
    position: 'relative',
    textAlign: 'left' 
  }}
>
  <CardMedia
    component="img"
    src="images/services/Quote left.png"
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '12%',
      height: 'auto', 
      objectFit: 'cover',
    }}
  />
  <CardContent 
    sx={{ 
      padding: 2, 
      marginTop: 6,
      marginLeft: 2 
    }}
  > 
    <Typography 
      variant="subtitle1" 
      component="p" 
      sx={{ 
        whiteSpace: 'nowrap', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis',
        fontWeight: 'bold',
        marginBottom: 1,
        textAlign: 'left' 
      }}
    >
    
    </Typography>
    <Typography 
      variant="body2" 
      component="p" 
      sx={{ 
        marginBottom: 8,
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textAlign: 'left' ,
        marginLeft:4
      }}
    >
      Revolutionary hotel booking with flexible pricing options—a groundbreaking platform designed to offer users unparalleled control over their travel accommodations. Unlike traditional booking websites, this platform introduces an innovative bidding system that empowers users to set their own price for their stay.
    </Typography>
    <Typography 
      variant="body2" 
      component="p" 
      sx={{ 
        fontWeight: 'bold', 
        marginTop: 2,
        lineHeight: 1.5,
        textAlign: 'left',
        marginLeft:4 
      }}
    >
      Radhika Sharma<br />
      Full Stack Development (January Batch)
    </Typography>
  </CardContent>
</Card>

      </Box>
    </Box>
  );
};

export default StudentLearning;

import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';

const ContentSection = () => {
  return (
    <Container maxWidth="lg" >
        {/* //spacing={4}mt={1} */}
      <Grid container  alignItems="center" mt={4}>
        {/* Left side with images */}
        <Grid item xs={12} md={6}>
            < Box
              component="img"
              src="/images/AboutImage2.png"
              alt="Description 1"
              sx={{ width:'430px', height:'438px', borderRadius: '8px' }}
              />
           
        </Grid>

        {/* Right side with text */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#003478',fontSize:'32px' }}>
          We are Customized and Personalized App Development Solution in India.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '16px', lineHeight: '1.8', color: '#000000',fontSize:'14px',fontWeight:'400'}}>
          Are you looking for robust app development solution? Take a glance on our customized and personalized app development solution of the new era. We believe in cutting-edge solutions and that’s why we are the Industry Leader of Mobile App Development Solution in Delhi India. The trends are going in the favor of mobile app technology rather than web technology. Thus, your business also required the contemporary changes and updates. Are you looking for robust app development solution? Take a glance on our customized and personalized app development solution of the new era.
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '16px', lineHeight: '1.8', color: '#000000',fontSize:'14px',fontWeight:'400' }}>
          Are you looking for robust app development solution? Take a glance on our customized and personalized app development solution of the new era. We believe in cutting-edge solutions and that’s why we are the Industry Leader of Mobile App Development Solution in Delhi India. The trends are going in the favor of mobile app technology rather than web technology. Thus, your business also required the contemporary changes and updates. Are you looking for robust app development solution? Take a glance on our customized and personalized app development solution of the new era.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContentSection;

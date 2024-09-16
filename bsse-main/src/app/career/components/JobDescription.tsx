import React from 'react';
import { Box, Grid, Typography, Button, Card, CardContent } from '@mui/material';

const JobDescription = () => {
  return (
    <Box
    sx={{
        width:'100%',
        paddingX:7,
        
    }}
    >
        <Box>
    <Box sx={{ px: { xs: 1, sm: 2 },marginTop:'10px' }}> {/* Padding adjusts based on screen size */}
      {/* Upper Box */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: { xs: 3, sm: 0 }, // Margin adjusts between mobile and larger screens
          p: { xs: 1, sm: 2 },
          border: '1px solid #ddd', // Border to distinguish the boxes
        //   background-color:'#FFFFFF',
        backgroundColor:'#FFFFFF'
        }}
      >
        <Grid container spacing={2}>
          {/* Left Side: Text and Button */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{paddingLeft:1}}>
              <Typography sx={{ fontSize: { xs: '10px', md: '14px' }, fontWeight: 500 }}>
                Posted on 5-08-2024
              </Typography>
              <Typography variant="h4" sx={{ fontSize: { xs: '20px', md: '22px' }, fontWeight: 700, color: '#000000' }}>
                Product Design
              </Typography>
              <br />
              <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
                Job Type: &nbsp; &nbsp;Full time
                <Typography>Experience: &nbsp; 4+ years</Typography>
                <Typography>Location: &nbsp; &nbsp; &nbsp; Noida</Typography>
              </Typography>
            </Box>

            {/* Button at the bottom */}
            <Box sx={{ mt: 'auto' }}> {/* Ensures button stays at the bottom */}
              <Button variant="contained" size="large" sx={{ backgroundColor: '#003478', fontSize: { xs: '14px', md: '16px' } }}>
                Apply Now
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Card with Title and Description */}
          <Grid item xs={12} md={9}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: { xs: '24px', md: '28px' } }} gutterBottom>
                  Job Description
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, color: '#535252' }}>
                  HTML, Advance CSS, SCSS/LESS, Knowledge of Flex Layout.
                  <br />
                  Angular, TypeScript (good to have), Tools Photoshop (good to have)
                  <br />
                  UI, UX Designer
                  <br />
                  Responsive Design Exp.
                  <br /> 5-7 yrs. Overall exp,
                  <br />
                  <br />
                  <Typography
  component="span"
  sx={{
    fontSize: { xs: '16px', md: '20px' }, // Responsive font size
    fontWeight: 700,
    color: '#535252',
  }}
>
  Mandatory Competencies
</Typography>

                  <br />
                  UX - UX
                  <br />
                  Beh - Communication
                  <br />
                  <br />
                  <Typography
  component="span"
  sx={{
    fontSize: { xs: '16px', md: '20px' }, // Responsive font size
    fontWeight: 700,
    color: '#535252',
  }}
>
  Perks and Benefits for BSSE
</Typography >

                  <Typography sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, color: '#535252' }} >
                    
                 
                  At BSSE, we offer world-class benefits designed to support the financial, health, and well-being needs
                  of our <br />
                  associates to help achieve harmony between their professional and personal growth. from comprehensive health <br />
                  insurance and competitive salaries to flexible work arrangements and ongoing learning opportunities, we're
                  <br />
                  committed to providing a supportive and rewarding work environment. <br />
                  <br />
                  Join us and experience the difference of working at a company that values its employees' success and
                  happiness.
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
    
    <Box sx={{ p: { xs: 1, sm: 2 } }}> {/* Padding adjusts based on screen size */}
      {/* Upper Box */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: { xs: 3, sm: 5 }, // Margin adjusts between mobile and larger screens
          p: { xs: 1, sm: 2 },
          border: '1px solid #ddd', // Border to distinguish the boxes
        //   background-color:'#FFFFFF',
        backgroundColor:'#FFFFFF'
        }}
      >
        <Grid container spacing={2}>
          {/* Left Side: Text and Button */}
          <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box sx={{paddingLeft:1}}>
              <Typography sx={{ fontSize: { xs: '10px', md: '14px' }, fontWeight: 500 }}>
                Posted on 5-08-2024
              </Typography>
              <Typography variant="h4" sx={{ fontSize: { xs: '20px', md: '22px' }, fontWeight: 700, color: '#000000' }}>
              Software Devlopement
              </Typography>
              <br />
              <Typography variant="body1" sx={{ fontSize: { xs: '16px', md: '18px' } }}>
              Experience:  &nbsp; &nbsp; 8+ years
                <Typography>Experience: &nbsp; 4+ years</Typography>
                <Typography>Location: &nbsp; &nbsp; &nbsp; Noida</Typography>
              </Typography>
            </Box>

            {/* Button at the bottom */}
            <Box sx={{ mt: 'auto' }}> {/* Ensures button stays at the bottom */}
              <Button variant="contained" size="large" sx={{ backgroundColor: '#003478', fontSize: { xs: '14px', md: '16px' } }}>
                Apply Now
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Card with Title and Description */}
          <Grid item xs={12} md={9}>
            <Card>
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: { xs: '24px', md: '28px' } }} gutterBottom>
                  Job Description
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, color: '#535252' }}>
                  HTML, Advance CSS, SCSS/LESS, Knowledge of Flex Layout.
                  <br />
                  Angular, TypeScript (good to have), Tools Photoshop (good to have)
                  <br />
                  UI, UX Designer
                  <br />
                  Responsive Design Exp.
                  <br /> 5-7 yrs. Overall exp,
                  <br />
                  <br />
                  <Typography
  component="span"
  sx={{
    fontSize: { xs: '16px', md: '20px' }, // Responsive font size
    fontWeight: 700,
    color: '#535252',
  }}
>
  Mandatory Competencies
</Typography>

                  <br />
                  UX - UX
                  <br />
                  Beh - Communication
                  <br />
                  <br />
                  <Typography
  component="span"
  sx={{
    fontSize: { xs: '16px', md: '20px' }, // Responsive font size
    fontWeight: 700,
    color: '#535252',
  }}
>
  Perks and Benefits for BSSE
</Typography >

                  <Typography sx={{ fontSize: { xs: '14px', md: '18px' }, fontWeight: 400, color: '#535252' }} >
                    
                 
                  At BSSE, we offer world-class benefits designed to support the financial, health, and well-being needs
                  of our <br />
                  associates to help achieve harmony between their professional and personal growth. from comprehensive health <br />
                  insurance and competitive salaries to flexible work arrangements and ongoing learning opportunities, we're
                  <br />
                  committed to providing a supportive and rewarding work environment. <br />
                  <br />
                  Join us and experience the difference of working at a company that values its employees' success and
                  happiness.
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </Box>
    
    </Box>
  );
};

export default JobDescription;


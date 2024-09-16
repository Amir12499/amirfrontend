import React from 'react';
import { Grid, Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';

const TwoColumnLayout: React.FC = () => {
  return (
    <Grid 
      container 
      spacing={2} 
      sx={{ 
        paddingX: { xs: 2, sm: 4, md: 7 },  // Adjust padding for responsiveness
        paddingY: { xs: 3, sm: 5 },
        backgroundColor: '#F3F3F3' 
      }}
    >
      {/* Left Side - 8 columns */}
      <Grid item xs={12} md={8}>
        <Box sx={{ padding: { xs: 1, md: 2 } }}>
          <Box sx={{ p: { xs: 2, sm: 3 }, borderRadius: 2, backgroundColor: '#FFFFFF' }}>
            <Grid container spacing={2}>
              {/* Box 1 - Location */}
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    component="img"
                    src="/images/contactus/location.png" // Replace with actual image path
                    alt="Location"
                    sx={{ width: '30px', height: '30px', borderRadius: '10%', backgroundColor: '#B92032', mt: -1 }}
                  />
                  <Box>
                    <Typography variant="h6">Visit anytime</Typography>
                    <Typography variant="body2">C58, Sector 65, Noida, UP</Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Box 2 - Email */}
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    component="img"
                    src="/images/contactus/email.png" // Replace with actual image path
                    alt="Email"
                    sx={{ width: '30px', height: '30px', borderRadius: '10%', backgroundColor: '#B92032' }}
                  />
                  <Box>
                    <Typography variant="h6">Write email</Typography>
                    <Typography variant="body2">info@bidinn.in</Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Box 3 - Phone */}
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box
                    component="img"
                    src="/images/contactus/Phones.png" // Replace with actual image path
                    alt="Phone"
                    sx={{ width: '30px', height: '30px', borderRadius: '10%', backgroundColor: '#B92032' }}
                  />
                  <Box>
                    <Typography variant="h6">Phone</Typography>
                    <Typography variant="body2">+91 9356984000</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Location Card */}
          <Box sx={{ mt: 2, mx: 'auto' }}>
      <Box sx={{xs: '100%', sm: '80%', md: '70%', lg: '60%' }}  >
       
          
            <Typography variant="h6" sx={{  alignItems: 'center', gap: 1 }}>
              <Box
                component="img"
                src="/images/contactus/map.png" // Replace with the actual image path
                alt="icon"
                sx={{
                  width: { xs: '100%', sm: '80%', md: '70%', lg: '60%' }, // Responsive widths for different devices
                  height: 'auto', // Maintain aspect ratio
                  mr: 1,
                }}
              />
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://www.google.com/maps/place/28%C2%B036'38.7%22N+77%C2%B023'13.8%22E/@28.6102653,77.3839513,16.16z/data=!4m4!3m3!8m2!3d28.6107402!4d77.3871598?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ marginTop: 2 }}
            >
              View Location
            </Button>
          
        
      </Box>
    </Box>
        </Box>
      </Grid>

      {/* Right Side - 4 columns */}
      <Grid item xs={12} md={4}>
      <Box
        sx={{
          backgroundColor: '#FFFFFF',
          padding: { xs: 2, md: 2 },
          mt: { xs: 2, md: 2 },
          mb: { xs: 5, md: 10 },
        }}
      >
        <Typography
          variant="h6"
          sx={{ color: '#003478', fontWeight: 700, fontSize: { xs: '24px', md: '32px' } }}
        >
          Feel free to write
        </Typography>
        <form>
          <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 1 }}>
          Name
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your name"
            margin="normal"
            InputLabelProps={{ shrink: true }} // Ensures the placeholder is visible
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 1}}>
            Email
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your email"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 1 }}>
            Phone
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter your phone number"
            margin="normal"
            InputLabelProps={{ shrink: true }}
          />

          <Typography variant="subtitle1" sx={{ fontWeight: 500, mt: 1 }}>
            Description
          </Typography>
          <TextField
            fullWidth
            placeholder="Enter description"
            margin="normal"
            multiline
            rows={4}
            InputLabelProps={{ shrink: true }}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ color: '#FFFFFF', backgroundColor: '#B92032', mt: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Grid>
    </Grid>
  );
};

export default TwoColumnLayout;

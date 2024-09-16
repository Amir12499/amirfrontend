import { Box, Typography, Divider,Card } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X'; // Placeholder for Twitter icon

const iconStyle = {
  fontSize: 24,
  margin: '0 8px',
  color: 'black',
};

const Footer: React.FC = () => {
  return (
    <Card>
    <main>
      <Box
        sx={{
          width: '100%',
          marginTop: 6,
          
          paddingX: { xs: 1, md: 6 }, // Horizontal padding for all screen sizes
        }}
      >
        {/* Upper Section */}
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            marginTop: 5,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            paddingY: 3, // Adjusted padding for vertical spacing
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '45%', md: '20%' },
              marginBottom: { xs: 4, sm: 0 },
              marginLeft:5
            }}
          >
            <Typography
              sx={{
                // fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 14,
                lineHeight: 2.46,
                color: '#404040',
                
              }}
            >
              Python Training in Noida
              <br />
              Machine Learning Training in Noida
              <br />
              Data Analytics Training in Noida
              <br />
              Artificial Intelligence Training 
              {/* //in Noida */}
              <br />
              Deep Learning Training in Noida
              <br />
              Django Training in Noida
              <br />
              Business Analyst Training in Noida
              <br />
              Full Stack Training in Noida
              <br />
              Java Training in Noida
              <br />
              Data Science Training in Noida
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: '45%', md: '20%' },
              marginBottom: { xs: 4, sm: 0 },
            }}
          >
            <Typography
              sx={{
                // fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 14,
                lineHeight: 2.46,
                color: '#404040',
              }}
            >
              Mean Stack Training in Noida
              <br />
              Digital Marketing Training in Noida
              <br />
              Web Designing Training in Noida
              <br />
              Dot Net Training in Noida
              <br />
              Php Training in Noida
              <br />
              Flutter Training in Noida
              <br />
              Dart Training in Noida
              <br />
              Kotlin Training in Noida
              <br />
              Mern Training in Noida
              <br />
              React JS Training in Noida
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: '45%', md: '15%' },
              marginBottom: { xs: 4, sm: 0 },
            }}
          >
            <Typography
              sx={{
                // fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 16,
                color: '#000000',
              }}
            >
              COMPANY
            </Typography>
            <Box sx={{ marginTop: 3 }}>
              <Typography
                sx={{
                //   fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: 2.53,
                  color: '#404040',
                }}
              >
                About Us
                <br />
                Contact Us
                <br />
                Our Services
                <br />
                Our Team
                <br />
                FAQ's
                <br />
                Terms & Conditions
                <br />
                Privacy Policy
                <br />
                Press Release
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', sm: '45%', md: '15%' },
            }}
          >
            <Typography
              sx={{
                // fontFamily: 'Inter',
                fontWeight: 600,
                fontSize: 16,
                color: '#000000',
              }}
            >
              COMPANY
            </Typography>
            <Box sx={{ marginTop: 3 }}>
              <Typography
                sx={{
                //   fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: 2.53,
                  color: '#404040',
                }}
              >
                About Us
                <br />
                Contact Us
                <br />
                Webinars
                <br />
                Our Team
                <br />
                FAQ's
                <br />
                Terms & Conditions
                <br />
                Privacy Policy
                <br />
                Press Release
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Box sx={{ width: '100%', paddingY: 2 }}>
          <Divider sx={{ marginY: 2, border: '1px solid #E3E3E3' }} />
        </Box>

        {/* Footer Section */}
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            paddingY: 2,
            paddingX:4
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', md: 'auto' },
              textAlign: { xs: 'center', md: 'left' },
              marginBottom: { xs: 2, md: 0 },
              display: 'flex',
              justifyContent: 'center', // Center text horizontally
            //   marginLeft:0
            }}
          >
            <Typography
              sx={{
                // fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: 12,
                color: '#535252',
              }}
            >
              © 2024 Coursera Inc. All rights reserved.
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: '100%', md: 'auto' },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: 'center',
              gap: 0.1,
            //   marginRight:0// Adds spacing between the icons
            }}
          >
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={iconStyle} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookIcon sx={iconStyle} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={iconStyle} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <XIcon sx={iconStyle} />
            </a>
          </Box>
        </Box>
      </Box>
    </main>
    </Card>
  );
};

export default Footer;
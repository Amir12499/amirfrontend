import { Box, Typography } from '@mui/material';
import { Inter, Poppins } from 'next/font/google';
import Image from "next/image";

function WorkDetails() {
  return (
    <Box
      sx={{
        width: '100%',
        // maxWidth: 1440,
        height: 'auto',
        backgroundColor: '#003478',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        paddingX:0,
      }}
    >
      <Box sx={{width:'800px'}}>
      <Box
        sx={{
          flex: 1,
          padding: 10,
         
          '@media (max-width: 600px)': {
            textAlign: 'center',
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            fontSize: { xs: 20, md: 24 },
            color: '#EFEFEF',
            marginBottom: 1,
          }}
        >
          OUR RECENT WORK
        </Typography>
        <Box
          sx={{
            maxWidth:'1000px',
            marginBottom: 2,
            color: '#F3F3F3',
            '@media (max-width: 600px)': {
              marginLeft: 0,
              
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              fontSize: { xs: 18, md: 20 },
              marginTop:5
            }}
          >
            Bid Inn <span style={{ fontFamily: 'Poppins', fontWeight: 400, fontSize: 16 }}>(Hotel Booking)</span>
          </Typography>
          <br />
          <br />
          <Typography
            sx={{
              // fontFamily: 'Poppins',
              fontWeight: 400,  
              fontSize: { xs: 14, md: 16 },
              color:'#F3F3F3'
            
            }}
          >

Revolutionizing Hotel Booking with Flexible Pricing BidInn is a ground breaking hotel booking platform designed 
to offer users unparalleled control over their travel accommodations. Unlike traditional hotel booking websites
where prices are fixed, BidInn introduces an innovative bidding system that empowers users to set their own 
price for their stay. This user-centric approach ensures that travelers can find accommodations that fit their 
budget while enjoying the comfort and amenities they desire.
          </Typography>
        </Box>
        
        <Box
          sx={{
            width: 'auto',
            maxWidth: 134,
            height: 'auto',
            border: '1px solid #FFFFFF',
            borderRadius: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 2,
            cursor: 'pointer',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: { xs: 14, md: 16 },
              color: '#FFFFFF',
              textAlign: 'center',
              padding: 1,
            }}
          >
            Explore Now
          </Typography>
        </Box>
      </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          marginLeft:6,
          alignItems: 'center',
          '@media (max-width: 600px)': {
            marginTop: 2,
          },
        }}
        >
        <Image
          src='/images/aboutus/mobileImage.png'
          alt='Mobile Image'
          width={327}
          height={557}
          layout='intrinsic'
        />
      </Box>
    </Box>
  );
}

export default WorkDetails;

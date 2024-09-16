// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header
// "use client"
// import { useState } from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import { ArrowForwardIos } from '@mui/icons-material';

// interface Slide {
//   content: string;
//   image: string;
// }

// const slides: Slide[] = [
//   {
//     content: 'Welcome to our website! hello ',
//     image: '/images/image1.png',
//   },
//   {
//     content: 'Explore our features!',
//     image: '/images/image1.png',
//   },
//   {
//     content: 'Join our community!',
//     image: '/images/image1.png',
//   },
// ];

// const Header = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//   };

//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         height: '300px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundImage: `url(${slides[currentSlide].image})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         color: 'black',
//         textAlign: 'center',
//       }}
//     >
//       <Typography variant="h3" component="div">
//         {slides[currentSlide].content}
//       </Typography>

//       <Button
//         variant="contained"
//         color="primary"
//         endIcon={<ArrowForwardIos />}
//         onClick={handleNextSlide}
//         sx={{
//           position: 'absolute',
//           bottom: '20px',
//         }}
//       >
//         Next
//       </Button>
//     </Box>
//   );
// };

// export default Header;


 "use client"
// import React, { useState } from 'react';
// import { Grid, IconButton, Typography, Box, Avatar } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// const HeaderSection: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNext = () => {
//     setCurrentSlide((prev) => (prev + 1) % 2); // Cycle between 0 and 1
//   };

//   const handleBack = () => {
//     setCurrentSlide((prev) => (prev - 1 + 2) % 2); // Cycle between 0 and 1
//   };

//   return (
//     <Box sx={{ padding: '16px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
//       <Grid container alignItems="center">
//         <Grid item xs={1}>
//           <IconButton onClick={handleBack}>
//             <ArrowBackIcon />
//           </IconButton>
//         </Grid>
//         <Grid item xs={7}>
//           <Typography variant="h6">
//             {currentSlide === 0 ? 'Get Job Ready With demanding Skills' : 'Second Slide Text'}
//           </Typography>
//         </Grid>
//         <Grid item xs={2}>
//           <Avatar 
//             src="/images/image1.png" 
//             alt="Slide Image"
//             sx={{ width: 400, height: 400}}
//           />
//         </Grid>
//         <Grid item xs={1}>
//           <IconButton onClick={handleNext}>
//             <ArrowForwardIcon />
//           </IconButton>
//         </Grid>
//       </Grid>
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
//         <Box
//           sx={{
//             width: '10px',
//             height: '10px',
//             backgroundColor: currentSlide === 0 ? 'black' : 'gray',
//             borderRadius: '50%',
//             marginRight: '8px',
//           }}
//         />
//         <Box
//           sx={{
//             width: '10px',
//             height: '10px',
//             backgroundColor: currentSlide === 1 ? 'black' : 'gray',
//             borderRadius: '50%',
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default HeaderSection;


import React, { useState } from 'react';
import { Grid, IconButton, Typography, Box, Button, Avatar } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const slides = [
  {
    heading: 'Get Job Ready With demanding Skills',
    content: 'Start, switch, or advance your career with more than 100 courses, Professional Certificates, and degrees from world-class universities and companies.',
    image: '/images/image1.png',
    buttonText: 'Explore Now',
  },
  {
    heading: 'Get Job Ready With demanding Skills',
    content: 'Start, switch, or advance your career with more than 100 courses, Professional Certificates, and degrees from world-class universities and companies.',
    image: '/images/Rectangle 79.png',  // Different image for the second slide
    buttonText: 'Discover More',
  },
];

const HeaderSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length); // Cycle between slides
  };

  const handleBack = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); // Cycle between slides
  };

  return (
    <Box sx={{ paddingBottom: '16px', backgroundColor: '#ffffff', borderRadius: '8px', width:'100%',display :'flex',flexDirection:'column', justifyContent:'space-around',height:'400px',paddingX:3}}>
      <Grid container alignItems="center" spacing={1}  >
        <Grid item xs={1/2}>
          <IconButton onClick={handleBack}>
          {/* <Box
           
            sx={{
              width: '30px',
              height: '30px',
              // border:'1px solid blue',
              backgroundColor: 'whitesmoke',
              borderRadius: '50%',
              margin: '0 4px',
            }}
            >
              <ArrowBackIosNewRoundedIcon />
              </Box> */}

<Box
      sx={{
        width: '30px',
        height: '30px',
        backgroundColor: 'whitesmoke',
        borderRadius: '50%',
        margin: '6px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #0F50A0' // Uncomment to see the border for debugging
      }}
    >
      <ArrowBackIosNewRoundedIcon />
    </Box>
            
          
            {/* <ArrowBackIosNewRoundedIcon /> */}
          </IconButton>
        </Grid>
        <Grid item xs={11}>
          <Box 
            sx={{ 
              //  backgroundColor: '#f3f3f3', 
              // padding: '16px', 
              // borderRadius: '8px', 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'space-between',
              // boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Box sx={{ maxWidth: '50%' }}>
              <Typography variant="h5" sx={{ fontWeight: '700' ,color:'#3F3F3F',fontSize:'48px',}}>
                {slides[currentSlide].heading}
              </Typography>
              <Typography sx={{ marginTop: '8px', marginBottom: '16px' }}>
                {slides[currentSlide].content}
              </Typography>
              <Button variant="contained" color="primary" sx={{backgroundColor:'#B92032', padding:'2px, 35px, 2px, 35px'}}>
                {slides[currentSlide].buttonText}
              </Button>
            </Box>
            <Avatar 
              src={slides[currentSlide].image} 
              alt="Slide Image"
              sx={{ width: 300, height: 320, marginLeft: '16px' }}
            />
          </Box>
        </Grid>
        <Grid item xs={1/2}>
          <IconButton onClick={handleNext}>
          {/* <Box
           
           sx={{
             width: '30px',
             height: '30px',
             // border:'1px solid blue',
             backgroundColor: 'whitesmoke',
             borderRadius: '50%',
             margin: '0 4px',
           }}
           >
             <ArrowForwardIosRoundedIcon />
             </Box> */}

<Box
      sx={{
        width: '30px',
        height: '30px',
        backgroundColor: 'whitesmoke',
        borderRadius: '50%',
        margin: '0 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
         border: '1px solid #0F50A0' // Uncomment to see the border for debugging
      }}
    >
      <ArrowForwardIosRoundedIcon />
    </Box>
            
          </IconButton>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        {slides.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: '10px',
              height: '10px',
              backgroundColor: currentSlide === index ? 'black' : 'gray',
              borderRadius: '50%',
              margin: '0 4px',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeaderSection;


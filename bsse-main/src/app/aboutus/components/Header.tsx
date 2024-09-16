import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        height: '361px', // Full screen height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundImage: 'url(/images/AboutHeader.png)', // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        //   backgroundColor: '#003478D1',
        //   opacity: 0.82,
        },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          position: 'relative',
          zIndex: 1, // To ensure content is above the overlay
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Explore The Services
          we Offer
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'white',
            mt: 2,
          }}
        >
          Additional content or subtitle goes here.
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;


// we wnat to make responsive for mobile but not work 
// import React from 'react';
// import { Box, Container, Typography } from '@mui/material';

// const Header = () => {
//   return (
//     <Box
//       sx={{
//         height: { xs: '250px', sm: '300px', md: '361px' }, // Adjust height for different screen sizes
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-start',
//         backgroundImage: 'url(/images/AboutHeader.png)', // Replace with your image path
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         position: 'relative',
//         '&:before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           // backgroundColor: '#003478D1',
//           // opacity: 0.82,
//         },
//       }}
//     >
//       <Container
//         maxWidth="md"
//         sx={{
//           position: 'relative',
//           zIndex: 1, // Ensure content is above the overlay
//           textAlign: { xs: 'center', md: 'left' }, // Center text on smaller screens
//           paddingLeft: { xs: 2, sm: 3, md: 4 }, // Add padding for smaller screens
//           paddingRight: { xs: 2, sm: 3, md: 4 }, // Add padding for smaller screens
//         }}
//       >
//         <Typography
//           variant="h2"
//           sx={{
//             color: 'white',
//             fontWeight: 'bold',
//             fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem' }, // Responsive font size
//           }}
//         >
//           Explore The Services
//           We Offer
//         </Typography>
//         <Typography
//           variant="body1"
//           sx={{
//             color: 'white',
//             mt: 2,
//             fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' }, // Responsive font size for subtitle
//           }}
//         >
//           Additional content or subtitle goes here.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Header;

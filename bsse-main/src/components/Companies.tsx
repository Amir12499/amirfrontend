// import React from 'react'
"use client"
// function Companies() {
//   return (
//     <div>
        


//     </div>
//   )
// }

// export default Companies;

// components/MovingImageSection.tsx
// "use client"
// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { keyframes } from '@mui/material';

// // Define keyframes for the continuous right-to-left movement
// const moveLeft = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;

// const MovingImageSection: React.FC = () => {
//   return (
//     <Box sx={{ textAlign: 'center', my: 5, backgroundColor:"#f3f3f3"}}>
//       {/* Heading */}
//       <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
//        Universities & companies  collaborated with us
//       </Typography>

//       {/* Container for moving images */}
//       <Box
//         sx={{
//           display: 'flex',
//           overflow: 'hidden',
//           whiteSpace: 'nowrap',
//           width: '100%',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             animation: `${moveLeft} 30s linear infinite`,
//             '& > *': {
//               mx: 2,
//             },
//           }}
//         >
//           {/* Replace these with your image URLs */}
//           <Box
//             component="img"
//             src="/images/Group 840 1.png"
//             alt="Image 1"
//             sx={{ width: 150, height: 150 }}
//           />
//           <Box
//             component="img"
//             src="/images/Group 843 1.png"
//             alt="Image 2"
//             sx={{ width: 150, height: 150 }}
//           />
//           <Box
//             component="img"
//             src="/images/Group 856 1.png"
//             alt="Image 3"
//             sx={{ width: 150, height: 150 }}
//           />
//           {/* Duplicate images to create a seamless loop */}
//           <Box
//             component="img"
//             src="/images/Group 857 1.png"
//             alt="Image 1"
//             sx={{ width: 150, height: 150 }}
//           />
//           <Box
//             component="img"
//             src="/images/Group 858 1.png"
//             alt="Image 2"
//             sx={{ width: 150, height: 150 }}
//           />
//           <Box
//             component="img"
//             src="/images/Group 856 1.png"
//             alt="Image 3"
//             sx={{ width: 150, height: 150 }}
//           />
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default MovingImageSection;




// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { keyframes } from '@emotion/react';

// // Define keyframes for continuous left-to-right movement
// const moveRight = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-25%);
//   }
// `;

// const MovingBoxSection: React.FC = () => {
//   const boxes = Array.from({ length: 5 }, (_, index) => `Box ${index + 1}`);
//   const boxWidth = 150; // Width of each box
//   const boxMargin = 10; // Margin between boxes
//   const totalBoxWidth = boxWidth + boxMargin;
//   const containerWidth = totalBoxWidth * boxes.length;

//   return (
//     <Box sx={{ textAlign: 'center', my: 5 }}>
//       {/* Heading */}
//       <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
//         Moving Boxes Section
//       </Typography>

//       {/* Container for moving boxes */}
//       <Box
//         sx={{
//           overflow: 'hidden',
//           position: 'relative',
//           width: '100%',
//           height: '150px', // Adjust based on box height
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             position: 'absolute',
//             whiteSpace: 'nowrap',
//             animation: `${moveRight} 20s linear infinite`,
//             width: `${containerWidth * 2}px`, // Double the width for seamless loop
//           }}
//         >
//           {/* Render boxes twice for seamless scrolling */}
//           {[...boxes, ...boxes].map((label, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: `${boxWidth}px`,
//                 height: '100px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#cce5ff',
//                 border: '1px solid #007bff',
//                 margin: `0 ${boxMargin}px`, // Space between boxes
//                 boxSizing: 'border-box',
//               }}
//             >
//               {label}
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default MovingBoxSection;


import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

// Define keyframes for continuous left-to-right movement
const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25%);
  }
    
`;

const MovingBoxSection: React.FC = () => {
  const images = [
    "/images/Group 840 1.png",
    "/images/Group 843 1.png",
   "/images/Group 856 1.png",
   "/images/Group 857 1.png",
    "/images/Group 858 1.png"
  ];
  const boxWidth = 230; // Width of each box
  const boxMargin = 10; // Margin between boxes
  const totalBoxWidth = boxWidth + boxMargin;
  const containerWidth = totalBoxWidth * images.length;

  return (
    <Box sx={{backgroundColor:'#f3f3f3'}}>
    <Box sx={{ textAlign: 'center', my: 5,marginLeft:'50px',marginRight:'50px' , paddingX:3}}>
      {/* Heading */}
      <Typography variant="h2" component="h2" sx={{ mb: 4 ,fontSize:'24px',fontFamily: "Poppins",color:'#0F50A0',fontWeight:'700'}}>
       Universities & companies <br/> collaborated with us
      </Typography>

      {/* Container for moving boxes */}
      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          height: '150px', // Adjust based on box height
        }}
      >
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            whiteSpace: 'nowrap',
            animation: `${moveRight} 20s linear infinite`,
            width: `${containerWidth * 2}px`, // Double the width for seamless loop
            overflow:'hidden'
          }}
        >
          {/* Render images twice for seamless scrolling */}
          {[...images, ...images].map((src, index) => (
            <Box
              key={index}
              sx={{
                width: `${boxWidth}px`,
                height: '135px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#cce5ff',
               border:'1px solid #f3f3f3',
            //    borderRight:'1px solid #f3f3f3',
            //    borderBottom:'1px solid #f3f3f3',
            //    borderLeft:'1px solid #f3f3f3',
                margin: `0 ${boxMargin}px`, // Space between boxes
                boxSizing: 'border-box',
                overflow:"hidden",
              }}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover', // Ensures image covers the box without distortion
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
    </Box>
  );
};

export default MovingBoxSection;


// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { keyframes } from '@emotion/react';

// // Define keyframes for continuous left-to-right movement
// const moveRight = keyframes`
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// `;

// const MovingBoxSection: React.FC = () => {
//   const images = [
//     '/images/image1.jpg',
//     '/images/image2.jpg',
//     '/images/image3.jpg',
//     '/images/image4.jpg',
//     '/images/image5.jpg'
//   ];

//   const boxWidth = 150; // Width of each box
//   const boxMargin = 10; // Margin between boxes
//   const visibleBoxes = 5; // Number of boxes to display initially
//   const totalBoxWidth = boxWidth + boxMargin;
//   const containerWidth = totalBoxWidth * images.length;

//   return (
//     <Box sx={{ textAlign: 'center', my: 5 }}>
//       {/* Heading */}
//       <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
//         Moving Image Section
//       </Typography>

//       {/* Container for moving boxes */}
//       <Box
//         sx={{
//           overflow: 'hidden',
//           position: 'relative',
//           width: '100%',
//           height: '150px', // Adjust based on box height
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             position: 'absolute',
//             whiteSpace: 'nowrap',
//             animation: `${moveRight} 20s linear infinite`,
//             width: `${containerWidth * 2}px`, // Double the width for seamless loop
//           }}
//         >
//           {/* Render images twice for seamless scrolling */}
//           {[...images, ...images].map((src, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: `${boxWidth}px`,
//                 height: '100px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#cce5ff',
//                 border: '1px solid #007bff',
//                 margin: `0 ${boxMargin}px`, // Space between boxes
//                 boxSizing: 'border-box',
//               }}
//             >
//               <img
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover', // Ensures image covers the box without distortion
//                 }}
//               />
//             </Box>
//           ))}
//         </Box>

//         {/* Container to show only the visible boxes initially */}
//         <Box
//           sx={{
//             position: 'absolute',
//             whiteSpace: 'nowrap',
//             width: `${totalBoxWidth * visibleBoxes}px`,
//             overflow: 'hidden',
//             height: '100%',
//           }}
//         >
//           {[...images, ...images].map((src, index) => (
//             <Box
//               key={index}
//               sx={{
//                 width: `${boxWidth}px`,
//                 height: '100px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: '#cce5ff',
//                 border: '1px solid #007bff',
//                 margin: `0 ${boxMargin}px`, // Space between boxes
//                 boxSizing: 'border-box',
//               }}
//             >
//               <img
//                 src={src}
//                 alt={`Image ${index + 1}`}
//                 style={{
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover', // Ensures image covers the box without distortion
//                 }}
//               />
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default MovingBoxSection;











// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

// interface ReusableCardProps {
//   imageSrc: string;
//   heading: string;
//   content: string;

// }

// const ReusableCard: React.FC<ReusableCardProps> = ({ imageSrc, heading, content }) => {
//   return (
//     <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 ,backgroundColor:'#F3F8FF',  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         '&:hover': {
//           transform: 'scale(1.05)',
//           boxShadow: 10,
//         },}}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={imageSrc}
//         alt="Card image"
//         sx={{ objectFit: 'cover' }}
//       />
//       <CardContent>
//         <Box sx={{ textAlign: 'center', mb: 2 }}>
//           <Typography variant="h6" component="div">
//             {heading}
//           </Typography>
//         </Box>
//         <Typography variant="body2" color="text.secondary">
//           {content}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default ReusableCard;
 

import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link } from '@mui/material';

interface ReusableCardProps {
  imageSrc: string;
  heading: string;
  content: string;
  linkHref: string; 
}

const ReusableCard: React.FC<ReusableCardProps> = ({ imageSrc, heading, content,linkHref }) => {
  return (
    <Card
      sx={{
        maxWidth: 360,
        height:500,
        borderRadius: 2,
        boxShadow: 1,
        backgroundColor:'#F3F8FF',
        display: 'flex',
        flexDirection: 'column', // Ensures the content and button stack vertically
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 5,
        },
      }}
    >
      <CardMedia
        component="img"
        height="250"
        image={imageSrc}
        alt="Card image"
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography variant="h6" component="div">
            {heading}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      {/* Know More Button */}

      <Box
        sx={{
          p: 2,
          textAlign: 'center',
        //   borderTop: '1px solid #f3f3f3', // Optional: Adds a top border to separate from the content
        }}
      >
        <Link
          href={linkHref}
          sx={{
            display: 'inline-block',
            textDecoration: 'none',
            color: '#717171',
            // fontWeight: 'bold',
            fontSize: '14px',
            '&:hover': {
              textDecoration: 'underline',
              color:'#endregion'
            },
          }}
        >
          Know More
        </Link>
      </Box>
     
    </Card>
  );
};

export default ReusableCard;




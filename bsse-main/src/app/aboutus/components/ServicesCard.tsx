// import React from 'react';
// import { Box, Typography, Divider, Link } from '@mui/material';



// interface ServiceCardProps {
//     iconSrc: string;
//     title: string;
//     description: string;
//     link: string;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ iconSrc, title, description, link }) => {
//     return (
//         <Box 
//             sx={{ 
//                 p: 2, 
//                 backgroundColor: '#ffffff', 
//                 borderRadius: '10px',
//                 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//                 maxWidth: '300px',
//                 mx: 'auto',
//                 display: 'flex',
//                 flexDirection:'column',
//                 alignItems: 'start',
//                 justifyContent:'start',

//             }}
//         >
//             {/* Icon Box */}
//             <Box 
//                 sx={{
//                     width: '68px',
//                     height: '74px',
//                     borderRadius: '10px',
//                     backgroundColor: '#f0f0f0',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent:'center',
                    
//                 }}
//             >
//                 <img src={iconSrc} alt={title} style={{ maxWidth: '40px', maxHeight: '40px' }} />
//             </Box>

//             {/* Heading */}
//             <Typography variant="h6" component="h3" sx={{ mt: 2, textAlign: 'center' }}>
//                 {title}
//             </Typography>

//             {/* Horizontal Line */}
//             <Divider sx={{ width: '52px', height: '2px', backgroundColor: '#d32f2f', my: 2 }} />

//             {/* Content */}
//             <Typography variant="body2" sx={{ textAlign: 'center', color: '#757575' }}>
//                 {description}
//             </Typography>

//             {/* Bottom Section */}
//             <Divider sx={{ my: 2, }} />
//             <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Link href={link} underline="hover" color="inherit">
//                     know more
//                 </Link>
//             </Box>
//         </Box>
//     );
// };

// export default ServiceCard;


// import React from 'react';
// import { Box, Typography, Divider, Link } from '@mui/material';

// interface ServiceCardProps {
//     iconSrc: string;
//     title: string;
//     description: string;
//     link: string;
// }

// const ServiceCard: React.FC<ServiceCardProps> = ({ iconSrc, title, description, link }) => {
//     return (
//         <Box 
//             sx={{ 
//                 p: 2, 
//                 backgroundColor: '#ffffff', 
//                 borderRadius: '10px',
//                 boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
//                 maxWidth: '300px',
//                 height:'398px',
//                 mx: 'auto',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'start',
//             }}
//         >
//             {/* Icon Box */}
//             <Box 
//                 sx={{
//                     width: '68px',
//                     height: '74px',
//                     borderRadius: '10px',
//                     backgroundColor: '#B92032',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     mb: 2,
//                 }}
//             >
//                 <img src={iconSrc} alt={title} style={{ maxWidth: '40px', maxHeight: '40px' }} />
//             </Box>

//             {/* Heading */}
//             <Typography variant="h6" component="h3" sx={{ textAlign: 'left', mb: 2 }}>
//                 {title}
//             </Typography>

//             {/* Horizontal Line */}
//             <Divider sx={{ width: '52px', height: '2px', backgroundColor: '#d32f2f', mb: 2 }} />

//             {/* Content */}
//             <Typography variant="body2" sx={{ textAlign: 'left', color: '#757575', mb: 2 }}>
//                 {description}
//             </Typography>

//             {/* Bottom Section with Horizontal Line and Link */}
//             <Box sx={{ width: '100%',}}>
//                 <Divider sx={{ mb: 2 }} />
//                 {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                     <Link href={link} underline="hover" color="inherit">
//                         know more
//                     </Link>
//                 </Box> */}

//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                 <Link href={link} underline="hover" color="inherit">
//                     know more
//                 </Link>
//             </Box>
//             </Box>
//         </Box>
//     );
// };

// export default ServiceCard;



import React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';

interface ServiceCardProps {
    iconSrc: string;
    title: string;
    description: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconSrc, title, description, link }) => {
    return (
        <Box 
            sx={{ 
                p: 2, 
                backgroundColor: '#ffffff', 
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '328px',
                height:'340px',
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
            }}
        >
            {/* Icon Box */}
            <Box 
                sx={{
                    width: '68px',
                    height: '74px',
                    borderRadius: '10px',
                    backgroundColor: '#B92032',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                }}
            >
                <img src={iconSrc} alt={title} style={{ maxWidth: '40px', maxHeight: '40px' }} />
            </Box>

            {/* Heading */}
            <Typography variant="h6" component="h3" sx={{ textAlign: 'left', mb: 2 }}>
                {title}
            </Typography>

            {/* Horizontal Line */}
            <Divider sx={{ width: '52px', height: '2px', backgroundColor: '#d32f2f', mb: 2 }} />

            {/* Content */}
            <Typography variant="body2" sx={{ textAlign: 'left', color: '#AB9090', flexGrow: 1,  fontWeight:'400'}}>
                {description}
            </Typography>

            {/* Bottom Section with Horizontal Line and Link */}
            <Box sx={{ width: '100%' }}>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link href={link} underline="hover" color="inherit">
                        know more
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default ServiceCard;




// // import React from 'react';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import IconButton from '@mui/material/IconButton';
// // import Box from '@mui/material/Box';
// // import { Link } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';

// // const Navbar = () => {
// //   return (
// //     <Box >
// //       {/* Fixed Navbar */}
// //       <AppBar position="fixed" color="default"  sx={{paddingX:7}}>
// //         <Toolbar sx={{display:'flex',justifyContent:'space-around'}}>
// //           {/* Logo */}
// //           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
// //             <img src="/BSSE 1 1.png" alt="Logo" style={{ width: '106px',height:'31px' }} /> {/* Replace with your logo */}
// //           </IconButton>

// //           {/* Navigation Links */}
// //           <Box sx={{ flexGrow: 1, display: 'flex', gap: '20px', alignItems: 'center', justifyContent:'center'}}>
// //             <Link href="/" underline="none" color="inherit">
// //               Home
// //             </Link>
// //             <Link href="/aboutus" underline="none" color="inherit">
// //               About Us
// //             </Link>
// //             <Link href="/services" underline="none" color="inherit">
// //               Services
// //             </Link>
// //             <Link href="#" underline="none" color="inherit">
// //               Contact
// //             </Link>
// //           </Box>

// //           {/* Tagline */}
// //           <Typography variant="h6" sx={{ textAlign: 'center', marginRight:'10px',fontSize:'14px' }}>
// //             Level up your career
// //           </Typography>

// //           {/* Login Button */}
// //           <Button color="primary" variant="outlined">
// //             Login
// //           </Button>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Offset for the fixed Navbar */}
// //       <Toolbar />
// //     </Box>
// //   );
// // };

// // export default Navbar;





// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Box from '@mui/material/Box';
// import Link from 'next/link';  // Import Link from next/link

// const Navbar: React.FC = () => {
//   return (
//     <Box>
//       {/* Fixed Navbar */}
//       <AppBar position="fixed" color="default"  sx={{ paddingX: 7 }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
//           {/* Logo */}
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//             <img src="/BSSE 1 1.png" alt="Logo" style={{ width: '106px', height: '31px' }} /> {/* Replace with your logo */}
//           </IconButton>

//           {/* Navigation Links */}
//           <Box sx={{ flexGrow: 1, display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', textDecoration:'none' }}>
//             <Link href="/" passHref >
//               <Typography component="a" sx={{   color: '#535252' }}>
//                 Home
//               </Typography>
//             </Link>
//             <Link href="/aboutus" passHref>
//               <Typography component="a" sx={{  color: '#535252' }}>
//                 About Us
//               </Typography>
//             </Link>
//             <Link href="/services" passHref>
//               <Typography component="a" sx={{  color: '#535252' }}>
//                 Services
//               </Typography>
//             </Link>
//             <Link href="/contact" passHref >
//               <Typography component="a" sx={{  color: '#535252', textUnderlinePosition:'none' }}>
//                 Contact
//               </Typography>
//             </Link>
//           </Box>

//           {/* Tagline */}
//           <Typography variant="h6" sx={{ textAlign: 'center', marginRight: '10px', fontSize: '14px' }}>
//             Level up your career
//           </Typography>

//           {/* Login Button */}
//           <Button color="primary" variant="outlined">
//             Login
//           </Button>
//         </Toolbar>
//       </AppBar>

//       {/* Offset for the fixed Navbar */}
//       <Toolbar />
//     </Box>
//   );
// };

// export default Navbar;




import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Link from 'next/link';  // Import Link from next/link

const Navbar: React.FC = () => {
  return (
    <Box>
      {/* Fixed Navbar */}
      <AppBar position="fixed" color="default"  sx={{ paddingX: 7 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* Logo */}
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <img src="/BSSE 1 1.png" alt="Logo" style={{ width: '106px', height: '31px' }} /> {/* Replace with your logo */}
          </IconButton>

          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1, display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <Link href="/" passHref>
              <Typography  >
                Home
              </Typography>
            </Link>
            <Link href="/aboutus" passHref>
              <Typography >
                About Us
              </Typography>
            </Link>
            <Link href="/services" passHref>
              <Typography >
                Services
              </Typography>
            </Link>
            <Link href="/contact" passHref>
              <Typography >
                Contact
              </Typography>
            </Link>
          </Box>

          {/* Tagline */}
          <Typography variant="h6" sx={{ textAlign: 'center', marginRight: '10px', fontSize: '14px' }}>
            Level up your career
          </Typography>

          {/* Login Button */}
          <Button color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      {/* Offset for the fixed Navbar */}
      <Toolbar />
    </Box>
  );
};

export default Navbar;

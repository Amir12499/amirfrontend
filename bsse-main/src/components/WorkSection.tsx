// import React from 'react';
// import { Container, Grid } from '@mui/material';
// import StatCard from './WorkCard';

// function WorkSection() {
//   return (
//     <Container sx={{ py: 5 }}>
//     <Grid container spacing={4}>
//       <Grid item xs={12} sm={6} md={4} direction="column">
//         <StatCard 
//           number="35+" 
//           heading="Company Mastered" 
//           content="We have successfully mastered over 35 companies with our innovative solutions and expert services."
//         />
//          <StatCard 
//           number="35+" 
//           heading="Company Mastered" 
//           content="We have successfully mastered over 35 companies with our innovative solutions and expert services."
//         />
//          <StatCard 
//           number="35+" 
//           heading="Company Mastered" 
//           content="We have successfully mastered over 35 companies with our innovative solutions and expert services."
//         />
//          <StatCard 
//           number="35+" 
//           heading="Company Mastered" 
//           content="We have successfully mastered over 35 companies with our innovative solutions and expert services."
//         />
//          <StatCard 
//           number="35+" 
//           heading="Company Mastered" 
//           content="We have successfully mastered over 35 companies with our innovative solutions and expert services."
//         />
         
//       </Grid>
//     </Grid>
//   </Container>
    
//   )
// }

// export default WorkSection







import React from 'react';
import {Card,CardContent, Container, Grid,Box ,Typography,Button} from '@mui/material';
import StatCard from './WorkCard';

function WorkSection() {
  return (
    <Box sx={{ backgroundColor:'#F3F8FF'}}>
    <Container sx={{ py: 5, }}>
      <Grid container spacing={2} direction="row"> {/* Container is set to row direction */}
        <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            number="35+" 
            heading="Industries Mastered" 
            content="We have successfully mastered over 35 companies with our innovative solutions and expert services."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            number="50+" 
            heading="Projects Delivered" 
            content="Our team has delivered over 50 projects, ensuring high customer satisfaction and quality."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            number="100+" 
            heading="Satisfied Clients" 
            content="We have over 100 satisfied clients who trust us for our expertise and commitment."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            number="75+" 
            heading="Awards Won" 
            content="Our hard work and dedication have earned us over 75 awards in various fields."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            number="120+" 
            heading="Team Members" 
            content="Our team has grown to over 120 members, each bringing unique skills and expertise."
          />
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            number="120+" 
            heading="Team Members" 
            content="Our team has grown to over 120 members, each bringing unique skills and expertise."
          />
        </Grid> */}
        <Grid  item xs={12} sm={6} md={4}>
        <Card sx={{ backgroundColor: '#003478', color: 'white', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography  component="div" sx={{fontSize:'20', fontWeight:'500',}}>
          Ready to innovate and drive an impact? 
        </Typography>
      </CardContent>
      {/* <Button  color="secondary" sx={{ m: 1}}>
        Join Us
      </Button> */}

<Button 
      color="secondary" 
      sx={{ alignSelf: 'flex-start',marginLeft: 2,marginBottom:1 ,border:'1px solid #ffffff',borderRadius:'10', color:'#ffffff', padding: '5px 15px'}}
    >
     Join Us
    </Button>
    </Card>
    </Grid>
       
        
         
        
      
      </Grid>
      
    </Container>
    </Box>
  );
}

export default WorkSection;


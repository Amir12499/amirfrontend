import React from 'react';
// import '@fontsource/poppins';
// import '@fontsource/roboto';
import { Box, Container, Grid, Typography, Card, CardContent } from '@mui/material';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#B92032',
        }}
      >
        <img src='/images/aboutus/WebAnalytics.png' alt="Fintech App Development" style={{ width: 32, height: 32 }} />
      </Box>
    ),
    title: 'Fintech App Development',
    description: 'Financial services like banking, digital payments, loans, investment management, portfolio management or securities, require a robust security base. Secure payment gateway or complete confidential customer data management, everything needs to be ..',
  },
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#B92032',
        }}
      >
        <img src='/images/aboutus/phonelinkSetup.png' alt="Mobility App Development" style={{ width: 32, height: 32 }} />
      </Box>
    ),
    title: 'Mobility App Development',
    description: 'Financial services like banking, digital payments, loans, investment management, portfolio management or securities, require a robust security base. Secure payment gateway or complete confidential customer data management, everything needs to be …',
  },
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#B92032',
        }}
      >
        <img src='/images/aboutus/Code.png' alt="SaaS-Based Application Development" style={{ width: 32, height: 32 }} />
      </Box>
    ),
    title: 'SaaS-Based Application Development',
    description: 'Financial services like banking, digital payments, loans, investment management, portfolio management or securities, require a robust security base. Secure payment gateway or complete confidential customer data management, everything needs to be …',
  },
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#B92032',
        }}
      >
        <img src='/images/aboutus/DoctorsBag.png' alt="Healthcare App Development" style={{ width: 32, height: 32 }} />
      </Box>
    ),
    title: 'Healthcare App Development',
    description: 'Financial services like banking, digital payments, loans, investment management, portfolio management or securities, require a robust security base. Secure payment gateway or complete confidential customer data management, everything needs to be …',
  },
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#B92032',
        }}
      >
        <img src='/images/aboutus/ERPSystem.png' alt="ERP App Development" style={{ width: 32, height: 32 }} />
      </Box>
    ),
    title: 'ERP App Development',
    description: 'Financial services like banking, digital payments, loans, investment management, portfolio management or securities, require a robust security base. Secure payment gateway or complete confidential customer data management, everything needs to be …',
  },
  {
    icon: (
      <Box
        sx={{
          width: 66,
          height: 66,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#B92032',
        }}
      >
        <img src='/images/aboutus/OnlineShop.png' alt="Ecommerce App Development" style={{ width: 32, height: 32 }} />
      </Box>
    ),
    title: 'Ecommerce App Development',
    description: 'Financial services like banking, digital payments, loans, investment management, portfolio management or securities, require a robust security base. Secure payment gateway or complete confidential customer data management, everything needs to be …',
  },
];

const Industries: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f3f3f3', py: 8 }}>
      <Container maxWidth={false} sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{
            color: '#003478', 
            fontFamily: 'Poppins',
            marginBottom: 6,
            fontWeight:700
          }}
        >
          Industries We Serve
        </Typography>
        <Typography 
          variant="body1" 
          align="left" 
          sx={{ 
            mb: 8,
            pl: 4, 
            // fontFamily: 'Poppins', 
            fontWeight: 400, 
            fontSize: '14px',
            maxWidth: '100%',
            color:'#535252'
          }}
        >
          With the rich experience, AppVin Technologies has established as a leading Software Development Company and addressed diverse needs of clients, companies from various sectors. Our dominance lies in mapping the client requirements to solutions that are easy-to-adapt, confirms value to both employees to drive excellence with in-house processes and achieve customer satisfaction. Being a top-notch software development company we are dedicated to deliver the superior solutions tailored to meet your business needs. From healthcare, Edtech, hospitality, to retail, eCommerce we have delivered customized solutions in forms of SAP Integration, Web & Mobile App Development, Business Intelligence Services, and Technical Consultancy.
        </Typography>
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  textAlign: 'start', 
                  padding: 2,
                  boxShadow: 'none', // Removes shadow
                  backgroundColor: 'transparent', // Makes the card background transparent
                }}
              >
                <Box sx={{ fontSize: 40, mb: 2 }}>
                  {service.icon}
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{color:'#1E1E1E',fontWeight:'600'}}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2"  sx={{color:'#535252',fontWeight:400}}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Industries;
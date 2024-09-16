import React from 'react';
import { Container, Grid,Box,Button,Typography} from '@mui/material';
import Card from '@/components/Card'

const Home: React.FC = () => {
  return (
    <Container sx={{ py: 5, }}>
         {/* Heading */}
         <Box sx={{textAlign: 'center', my: 5,}}>
      <Typography variant="h2" component="h2" sx={{ mb: 4 ,fontSize:'24px',fontFamily: "Poppins",color:'#0F50A0',fontWeight:'700'}}>
      We Offer A Wide Variety Of <br/>IT Services
      </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            imageSrc="/images/Rectangle 77.png"
            heading="Website Design & Development"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. Purus diam elit vitae scelerisque sem rutrum ut pharetra."
            linkHref='#'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            imageSrc="/images/Rectangle 78.png"
            heading="SEO"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. Purus diam elit vitae scelerisque sem rutrum ut pharetra."
            linkHref='#'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            imageSrc="/images/Rectangle 79.png"
            heading="Digital Marketing"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. Purus diam elit vitae scelerisque sem rutrum ut pharetra."
            linkHref='#'
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            imageSrc="/images/Rectangle 77.png"
            heading="Website Design & Development"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. Purus diam elit vitae scelerisque sem rutrum ut pharetra."
            linkHref='#'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            imageSrc="/images/Rectangle 78.png"
            heading="SEO"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. Purus diam elit vitae scelerisque sem rutrum ut pharetra."
            linkHref='#'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            imageSrc="/images/Rectangle 79.png"
            heading="Digital Marketing"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor sed vitae posuere lectus sit tempus dui. Purus diam elit vitae scelerisque sem rutrum ut pharetra."
            linkHref='#'
          />
        </Grid>
      </Grid>

      <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 5, // Margin-top to add space between the cards and the button
          }}
        >
          <Button variant="contained" color="primary" href="#"  sx={{borderRadius:'30px'}}>
           Read More
          </Button>
        </Box>
    
    </Container>
  );
};

export default Home;

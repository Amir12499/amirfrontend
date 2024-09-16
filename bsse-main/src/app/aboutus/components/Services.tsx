
"use client"
import React, { useState } from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
// import ServiceCard from './ServiceCard';
import ServiceCard from './ServicesCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ServicesSection: React.FC = () => {
    const services = [
        {
            iconSrc: '/images/aboutus/AppStore.png',
            title: 'IOS App Development',
            description: 'The gradual accumulation of information about atomic and small-scale behavior...',
            link: '#'
        },
        {
            iconSrc: '/images/aboutus/GooglePlay.png',
            title: 'Android App Development',
            description: 'The gradual accumulation of information about atomic and small-scale behavior...',
            link: '#'
        },
        {
            iconSrc: '/images/aboutus/Programming.png',
            title: 'Web Development',
            description: 'The gradual accumulation of information about atomic and small-scale behavior...',
            link: '#'
        },
        {
            iconSrc: '/images/aboutus/SystemInformation.png',
            title: 'Software Development',
            description: 'The gradual accumulation of information about atomic and small-scale behavior...',
            link: '#'
        },
        {
            iconSrc: '/images/cloud-icon.png',
            title: 'Cloud Services',
            description: 'The gradual accumulation of information about atomic and small-scale behavior...',
            link: '#'
        },
        {
          iconSrc: '/images/cloud-icon.png',
          title: 'Cloud operation',
          description: 'The gradual accumulation of information about atomic and small-scale behavior...',
          link: '#'
      },
        // Add more services here
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCards = 3;

    const handleNext = () => {
        if (currentIndex < services.length - visibleCards) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <Box sx={{ py: 6, backgroundColor: '#EBF3FF' }}>
            <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4 ,color:'#0F50A0',fontWeight:'700'}}>
            We deal with the aspects of <br/> professional IT Services
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {services.slice(currentIndex, currentIndex + visibleCards).map((service, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <ServiceCard 
                            iconSrc={service.iconSrc} 
                            title={service.title} 
                            description={service.description} 
                            link={service.link} 
                        />
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <IconButton 
                    onClick={handleBack} 
                    sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '50%', 
                        border:'1px solid #0F50A0',
                        backgroundColor: '#fff', 
                        color: '#0F50A0', 
                        mx: 1,
                        '&:disabled': {
                            backgroundColor: '#cccccc',
                            color: '#ffffff',
                        },
                    }}
                    disabled={currentIndex === 0}
                >
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton 
                    onClick={handleNext} 
                    sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '50%', 
                        border:'1px solid #0F50A0',
                        backgroundColor: '#fff', 
                        color: '#0F50A0',  
                        mx: 1,
                        '&:disabled': {
                            backgroundColor: '#cccccc',
                            color: '#ffffff',
                        },
                    }}
                    disabled={currentIndex >= services.length - visibleCards}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ServicesSection;

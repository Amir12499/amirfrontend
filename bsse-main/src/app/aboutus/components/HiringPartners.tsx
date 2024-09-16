"use client"
import React from 'react';
import { Box, Grid, Typography, Card, CardMedia } from '@mui/material';

const HiringPartners: React.FC = () => {
    const partners = [
        { src: "/images/Group 840 1.png", alt: 'University of Antwerp' },
        { src: "/images/Group 843 1.png", alt: 'Berkeley University California' },
        { src: "/images/Group 856 1.png", alt: 'University of Nicosia' },
        { src: "/images/Group 857 1.png", alt: 'The University of Auckland' },
        { src: "/images/Group 858 1.png", alt: 'David Tvildiani Medical University' },
    ];

    return (
        <Box sx={{ textAlign: 'center', py: 4,marginX:4 }}>
            <Typography variant="h4" component="h2" gutterBottom  sx={{color:'#003478',fontSize:"32px",fontWeight:'700'}}>
            Our Hiring Partners
            </Typography>
            <Grid container justifyContent="center">
                {partners.map((partner, index) => (
                    <Grid item xs={12} sm={6} md={2.4} key={index} mt={3}>
                        <Card sx={{ width: '200px', mx: 'auto', }}>
                            <CardMedia
                                component="img"
                                image={partner.src}
                                alt={partner.alt}
                                sx={{ width: '100%', height: 'auto', objectFit: 'contain',backgroundColor:'#ffffff' }}
                            />
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HiringPartners;

import React from 'react';
import { Box, Typography, Grid, Button, TextField, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Divider from '@mui/material/Divider';

const Headpage = () => {
    const stats = [
        { value: '90%', label: 'Placement Rate' },
        { value: '1200+', label: 'Hiring Partners' },
        { value: '128%', label: 'Average Hike' },
        { value: '20k+', label: 'Learners' },
    ];

    return (
        <Box sx={{ backgroundColor: '#003478', color: '#fff', Height: '50%', padding: { xs: 4, sm: 6, md: 10 } }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
                        Level Up your career with<br /> expert mentorship & internships
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, marginBottom: 4, flexWrap: 'wrap' }}>
                        <Button variant="contained" sx={{ borderRadius: 20, border: '2px solid white', backgroundColor: '#003478', marginBottom: { xs: 1, sm: 0 } }}>1:1 Mentorship</Button>
                        <Button variant="contained" sx={{ borderRadius: 20, border: '2px solid white', backgroundColor: '#003478', marginBottom: { xs: 1, sm: 0 } }}>Flexible Classes</Button>
                        <Button variant="contained" sx={{ borderRadius: 20, border: '2px solid white', backgroundColor: '#003478', marginBottom: { xs: 1, sm: 0 } }}>Live Project</Button>
                    </Box>
                    <Button
  variant="contained"
  sx={{
    borderRadius: 20,
    border: '2px solid white',
    marginBottom: {
      xs: 5, // for extra small screens
      sm: 10,  // for small screens
      md: 30   // for medium screens and larger
    },
    backgroundColor: '#003478'
  }}
>
  Certification
</Button>

                    <Box sx={{ backgroundColor: '#00004d', padding: { xs: 2, sm: 3 }, borderRadius: '8px', color: '#fff', maxWidth: '600px' }}>
                        <Grid container spacing={2} justifyContent="space-around">
                            {stats.map((stat, index) => (
                                <Grid item xs={6} sm={3} key={index}>
                                    <Box textAlign="center">
                                        <Typography variant="h4" fontWeight="bold">
                                            {stat.value}
                                        </Typography>
                                        <Typography variant="subtitle1">{stat.label}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Box sx={{ backgroundColor: '#f1f1f1', borderRadius: 2, padding: 4 }}>
                        <TextField fullWidth label="Name" variant="outlined" sx={{ marginBottom: 2 }} />
                        <TextField fullWidth label="Email" variant="outlined" sx={{ marginBottom: 2 }} />
                        <TextField fullWidth label="Phone no." variant="outlined" sx={{ marginBottom: 2 }} />
                        <Typography variant="h6" sx={{ marginBottom: 2, color: 'black' }}>Experience *</Typography>
                        <RadioGroup sx={{ color: 'black' }}>
                            <FormControlLabel value="working-technical" control={<Radio />} label="Working Professional - Technical Roles" />
                            <FormControlLabel value="working-nontechnical" control={<Radio />} label="Working Professional - Non Technical" />
                            <FormControlLabel value="college-final" control={<Radio />} label="College Student - Final Year" />
                            <FormControlLabel value="college-prefinal" control={<Radio />} label="College Student - 1st to Pre-final Year" />
                            <FormControlLabel value="others" control={<Radio />} label="Others" />
                        </RadioGroup>
                        <Button variant="contained" fullWidth sx={{ marginTop: 4, backgroundColor: '#d32f2f' }}>
                            Request Call Back
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Headpage;

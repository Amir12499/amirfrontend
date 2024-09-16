import { Grid, Typography, Box, Card, CardContent } from '@mui/material';

const ContentSectionSecond = () => {
  return (
    <Box sx={{ bgcolor: '#fff', p: 4, marginX:4}}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Content */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#003478', mb: 2 }}>
            Why BSSE
          </Typography>
          <Typography variant="body1" paragraph   sx={{ color: '#000000',fontSize:'14px',fontWeight:'400'}}>
          Are you looking for robust app development solution? Take a glance on our customized and personalized app development solution of the new era. We believe in cutting-edge solutions and that’s why we are the Industry Leader of Mobile App Development Solution in Delhi India. The trends are going in the favor of mobile app technology rather than web technology. Thus, your business also required the contemporary changes and updates. Are you looking for robust app development solution? Take a glance on our customized and personalized app development solution of the new era.
          </Typography>
          <Typography variant="body1" paragraph   sx={{ color: '#000000',fontSize:'14px',fontWeight:'400'}}>
          Are you looking for robust app development solution? Take a glance on our customized and personalized app development solution of the new era. We believe in cutting-edge solutions and that’s why we are the Industry Leader of Mobile App Development Solution in Delhi India. The trends are going in the favor of mobile app technology rather than web technology. Thus, your business also required the contemporary changes and updates. Are you looking for robust app development solution? Take a glance on our customized and personalized app development solution of the new era.
          </Typography>
        </Grid>

        {/* Right Content (Icons and Text) */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                    <img src="/images/aboutus/image11.png" alt="Cost Effective" style={{ width: '90px' ,height:'90px'}} />
                  </Box>
                  <Typography variant="h6" align="center"  sx={{fontSize:'18px',fontWeight:'400'}}>
                  COST EFFECTIVE
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                    <img src="/images/aboutus/image10.png" alt="Quality Services" style={{ width: '90px' ,height:'90px'}} />
                  </Box>
                  <Typography variant="h6" align="center" sx={{fontSize:'18px',fontWeight:'400'}}>
                    Quality Services
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                    <img src="/images/aboutus/image9.png" alt="Expertise" style={{ width: '90px' ,height:'90px'}} />
                  </Box>
                  <Typography variant="h6" align="center" sx={{fontSize:'18px',fontWeight:'400'}}>
                    EXPERTISE
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined">
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 1 }}>
                    <img src="/images/aboutus/image8.png" alt="Long Term Partnership" style={{ width: '90px' ,height:'90px'}} />
                  </Box>
                  <Typography variant="h6" align="center" sx={{fontSize:'18px',fontWeight:'400'}}>
                    LONG TERM PARTNERSHIP
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentSectionSecond;

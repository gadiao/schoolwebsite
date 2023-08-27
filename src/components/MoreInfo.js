import * as React from 'react';
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';

export default function MoreInfo() {
  return (
    <Grid item sx={{ mb: { xs: 8, md: 0 } }}>
      <Card
        sx={{
          display: "flex", 
          flexDirection: "column", 
          textAlign: 'center',
          maxWidth: 400,
          mb: 4, 
          p: 1,
          bgcolor: "secondary.main"
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Stay Informed
          </Typography>
          <Typography variant="body2">
            Get Updates on CFESchool's latest events and news to stay informed about our community and our mission.
          </Typography>
        </CardContent>
        <CardActions  sx={{ display: "flex", flexDirection: "column"}}>
          {/* Remember to edit Moreinfo input */}
          <TextField 
            id="outlined-basic"
            label="Enter your email here"
            variant="outlined"
            size="small"
            sx={{ mb: 1 }}
          />
          <Button variant="contained" size="small">Subscribe Now</Button>
        </CardActions>
      </Card>
      <Card
        sx={{ 
          display: "flex",
          flexDirection: "column",
          textAlign: 'center',
          maxWidth: 400,
          p: 1,
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Our School Brochure
          </Typography>
          <Typography variant="body2">
            Learn more about CFGESchool and our programs by downloading our school brochure.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          {/* Remember to edit Moreinfo input */}
          <PictureAsPdfOutlined color="primary" sx={{ fontSize: 60 }}/>
          <Button variant="contained" size="small" sx={{ mt: 1 }}>Download Brochure</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
import * as React from 'react';
import { Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';

export default function MoreInfo() {
  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Card
        sx={{ 
          display: "flex", 
          flexDirection: "column", 
          textAlign: 'center', 
          mb: 3, 
          p: 1,
          bgcolor: "secondary.main"
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
            Stay Informed
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 400  }}>
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
            sx={{ mb: 2 }}/>
          <Button variant="contained" size="small">Subscribe Now</Button>
        </CardActions>
      </Card>
      <Card
        sx={{ 
          display: "flex",
          flexDirection: "column",
          textAlign: 'center',
          p: 1,
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5" sx={{ mb: 2, fontWeight: 500  }}>
            Download Our School Brochure
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 400  }}>
            Learn more about CFGESchool and our programs by downloading our school brochure.
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column"}}>
          {/* Remember to edit Moreinfo input */}
          <PictureAsPdfOutlined color="primary" sx={{ fontSize: 60 }}/>
          <Button variant="contained" size="small" sx={{ mt: 2 }}>Download Brochure</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
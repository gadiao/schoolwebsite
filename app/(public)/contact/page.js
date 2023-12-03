import * as React from "react";
import {
  Box,
  Container,
  Divider,
  Fade,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ flexGrow: 1, bgcolor: "#F3F3F3" }}>
        {/* Change to an active map where the school is */}
        <Fade in={true} timeout={800}>
          <Paper elevation={4} sx={{ position: "relative", height: 450 }}>
            <iframe
              style={{ height: "100%", width: "100%" }}
              loading="lazy"
              src="https://www.google.com/maps/embed/v1/place?q=place_id:EiNBbGJhdHJvc3MgUm9hZCwgTmFzc2F1LCBUaGUgQmFoYW1hcyIuKiwKFAoSCfuceKLKfC-JESSVfqdRqtMSEhQKEgnJ24G5mXwviRHSUF5I0wHvKg&key=AIzaSyBn55IBUOcYe3H5I-qTQS6GmUaRDKWJNYI"
            ></iframe>
          </Paper>
        </Fade>
        <Container maxWidth="lg" sx={{ flexDirection: "row", pb: 8 }}>
          <Paper>
            <Typography
              align="center"
              variant="h2"
              sx={{ py: 8, color: "primary.main", fontWeight: "medium" }}
            >
              CONTACT US
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                px: 2,
                pb: 2
              }}
            >
              <Grid item md={6}>
                <Container
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { mb: 2, width: "100%" },
                  }}
                  noValidate
                >
                  <TextField id="outlined-name-input" label="Name" type="name" />
                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    type="email"
                  />
                  <TextField
                    id="outlined-subject-input"
                    label="Subject"
                    type="subject"
                  />
                  <TextField
                    id="outlined-message-input"
                    label="Message"
                    type="message"
                    multiline
                    rows={4}
                  />
                </Container>
              </Grid>
              <Grid item md={6}>
                <Container
                  sx={{
                    "& .MuiTypography-root": { mb: 4 },
                  }}
                >
                  <Typography>
                    For all inquiries, please call our main reception between
                    8.30am-3.30pm: 123-456-7890
                  </Typography>
                  <Typography>
                    Address: Stapledon Gardens, Albatross Road
                  </Typography>
                  <Typography>Email: info@mysite.com</Typography>
                </Container>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </Fade>
  );
};

export default Contact;

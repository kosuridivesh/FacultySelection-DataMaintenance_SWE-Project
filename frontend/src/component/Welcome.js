import React from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
  Box,
  Switch,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
// import Fade from '@mui/material/core/Fade';
// import FormControlLabel from '@mui/material/core/FormControlLabel';
import Fade from "@material-ui/core/Fade";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const styles = {
  paperContainer: {
    backgroundImage: `url(${"https://cdn.pixabay.com/photo/2017/10/27/15/12/geeks-2894621_960_720.jpg"})`,
    height: 350,
    width: 1500,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
};

const Welcome = (props) => {
  return (
    <Paper style={{ backgroundColor: "Transparent" }}>
      <Box m={2} pl={62} pt={7}>
        <Typography
          variant="h1"
          component="h2"
          style={{ fontFamily: "sans-serif", color: "#2666CF" }}
        >
          FacOutlook
        </Typography>
      </Box>
      <div style={{ height: 50, width: 1500 }}></div>

      <Box pl={70} pt={5}>
        <Box
          borderRadius={16}
          m={2}
          pt={2}
          pl={2}
          pb={5}
          style={{ height: 30, width: 300, backgroundColor: "#35858B" }}
        >
          <Typography
            variant="h3"
            component="h2"
            style={{ fontFamily: "Impact", color: "white" }}
          >
            Hire&Get Hired
          </Typography>
        </Box>
      </Box>

      <div style={{ height: 50, width: 1500 }}></div>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Box m={2} pl={75} pt={2} pb={1}>
              <Typography
                variant="h3"
                component="h2"
                style={{ fontFamily: "Montserrat" }}
              >
                Applicant
              </Typography>
            </Box>

            <Grid container spacing={0}>
              <Grid item xs={4} md={4}>
                <Box m={2} pl={27} pt={3}>
                  <Box
                    m={2}
                    style={{
                      // backgroundImage: `url(${"https://cdn-icons.flaticon.com/png/512/863/premium/863823.png?token=exp=1648225271~hmac=cac419fc826acc8e8545b0e6b131f784"})`,
                      height: 80,
                      width: 80,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  >
                    <i
                      class="fa fa-user-plus"
                      style={{ fontSize: "70px", marginLeft: "35px" }}
                      aria-hidden="true"
                    ></i>
                  </Box>
                </Box>
                <Box m={2} pl={25}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Create an Account
                  </Typography>
                </Box>
                <Box m={2} pl={21} pr={10}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Sign up to our website with your correct information to
                    avail your account.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4} md={4}>
                <Box m={2} pl={20} pt={3}>
                  <Box
                    style={{
                      // backgroundImage: `url(${"https://cdn-icons.flaticon.com/png/512/954/premium/954591.png?token=exp=1648225050~hmac=a2a73c472590310171e889c7852a99ce"})`,
                      height: 80,
                      width: 80,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  >
                    <i class="fa fa-search" style={{ fontSize: "70px" }}></i>
                  </Box>
                </Box>

                <Box m={2} pl={17} pt={2}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Search Jobs
                  </Typography>
                </Box>
                <Box m={2} pl={5} pr={5}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Search for a specific job by filtering. Apply for a job.
                    Withdraw if necessary.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4} md={4}>
                <Box m={2} pl={20} pt={3}>
                  <Box
                    style={{
                      backgroundImage: `url(${"https://www.tnprivatejobs.tn.gov.in/asset/images/resume.png"})`,
                      height: 80,
                      width: 80,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  ></Box>
                </Box>
                <Box m={2} pl={19} pt={2}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Evaluation
                  </Typography>
                </Box>
                <Box m={2} pl={10} pr={15}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Get to know the status of the applied posts, results of the
                    interview and link for the text and interview.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ height: 100, width: 1500 }}></div>
          <Grid item xs={12} style={{ backgroundColor: "#35858B" }}>
            <Box m={2} pt={5} pl={58} pb={5}>
              <Typography
                variant="h3"
                component="h2"
                style={{ fontFamily: "Impact", color: "#EFFFFD" }}
              >
                Find your desired institutions
              </Typography>
            </Box>
          </Grid>
          <div style={{ height: 100, width: 1500 }}></div>
          <Grid item xs={12}>
            <Box m={2} pl={80} pt={2} pb={1}>
              <Typography
                variant="h3"
                component="h2"
                style={{ fontFamily: "Montserrat" }}
              >
                Recruiter
              </Typography>
            </Box>

            <Grid container spacing={0}>
              <Grid item xs={4} md={4}>
                <Box m={2} pl={28} pt={3}>
                  <Box
                    m={2}
                    style={{
                      backgroundImage: `url(${"https://www.tnprivatejobs.tn.gov.in/asset/images/add-account.png"})`,
                      height: 80,
                      width: 80,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  ></Box>
                </Box>
                <Box m={2} pl={25}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Create an Account
                  </Typography>
                </Box>
                <Box m={2} pl={23} pr={5}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Create an account for your institution and provide some
                    details about the institustion.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4} md={4}>
                <Box m={2} pl={20} pt={3}>
                  <Box
                    style={{
                      // backgroundImage: `url(${"https://cdn-icons.flaticon.com/png/512/3810/premium/3810853.png?token=exp=1648223227~hmac=4cd8d25471833fa7dc9d5c155d650370"})`,
                      height: 80,
                      width: 80,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  >
                    <i
                      class="fa fa-graduation-cap"
                      style={{ fontSize: "70px", marginLeft: "3px" }}
                      aria-hidden="true"
                    ></i>
                  </Box>
                </Box>

                <Box m={2} pl={18} pt={2}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Create Jobs
                  </Typography>
                </Box>
                <Box m={2} pl={8} pr={10}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Job openings can be created, modified and deleted.
                    Neccessary details of the jobs can be given.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={4} md={4}>
                <Box m={2} pl={20} pt={3}>
                  <Box
                    style={{
                      backgroundImage: `url(${"https://cdn-icons-png.flaticon.com/512/2942/2942821.png"})`,
                      height: 80,
                      width: 80,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  ></Box>
                </Box>
                <Box m={2} pl={19} pt={2}>
                  <Typography
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    Recruting
                  </Typography>
                </Box>
                <Box m={2} pl={7} pr={15}>
                  <Typography
                    variant="h6"
                    component="h2"
                    style={{ fontFamily: "Montserrat" }}
                  >
                    View the details of the applied candidate. Reject & Recruit
                    applicants.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <div style={{ height: 100, width: 1500 }}></div>
          <Grid item xs={12} style={{ backgroundColor: "#35858B" }}>
            <Box m={2} pt={5} pl={60} pb={5}>
              <Typography
                variant="h3"
                component="h2"
                style={{ fontFamily: "Impact", color: "#EFFFFD" }}
              >
                Hire faculties of your taste.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <div style={{ height: 100, width: 1500 }}></div>
      </Box>
    </Paper>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;

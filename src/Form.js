import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";
import ReactSelect from "react-select";
// import {useFormContext}  from 'react-hook-form';
const theme = createTheme();

function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => console.log(data, "data");
  reset();
  const defaultValues = {
    ReactSelect: { value: "vanilla", label: "Vanilla" },
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", {
                    required: "first name is required",
                  })}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  {...register("lastName", {
                    required: "LASTNAME IS REQUIERD",
                  })}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName?.message}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="mobileNumber"
                  label="mobileNumber"
                  name="mobileNumber"
                  autoComplete="mobileNumber"
                  {...register("mobileNumber", {
                    required: "mobileNumber IS REQUIERD",
                  })}
                  error={Boolean(errors.mobileNumber)}
                  helperText={errors.mobileNumber?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  {...register("email", { required: "email IS REQUIRED" })}
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "PASSWORD  IS REQUIRED",
                  })}
                  autoComplete="new-password"
                  error={Boolean(errors.password)}
                  helperText={errors.password?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl error={Boolean(errors.gender)}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="gender"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio {...register("female")} />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio {...register("male")} />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio {...register("other")} />}
                      label="Other"
                    />
                  </RadioGroup>
                  <FormHelperText style={{ color: "#d32f2f" }}>
                    {errors.gender?.message}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <Controller
                    name="course"
                    control={control}
                    render={({ field }) => (
                      <ReactSelect
                        isClearable
                        {...field}
                        options={[
                          { value: "BE", label: "BE" },
                          { value: "BCOM", label: "BCOM" },
                          { value: "MBBS", label: "MBBS" },
                        ]}
                      />
                    )}
                  />
                  <section>
                    <label>React Select</label>
                    <Controller
                      name="ReactSelect"
                      control={control}
                      render={({ field }) => (
                        <ReactSelect
                          isClearable
                          {...field}
                          options={[
                            { value: "chocolate", label: "Chocolate" },
                            { value: "strawberry", label: "Strawberry" },
                            { value: "vanilla", label: "Vanilla" },
                          ]}
                        />
                      )}
                    />
                  </section>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Form;

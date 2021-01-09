import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./StyleSheets/Login.css";

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="login">
        <Avatar className="login__logo">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className="login__form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="login__submitButton"
          >
            Sign In
          </Button>
          <Box mt={3}>
            <Typography variant="body2" color="primary" align="center">
              <Link to="/password_recovery" variant="body2">
                Forget Password?
              </Link>
            </Typography>
            <Typography variant="body2" color="primary" align="center">
              <Link to="/signin" variant="body2">
                Don't have an account?
              </Link>
            </Typography>
            <Typography variant="body2" color="primary" align="center">
              <Link to="/signin" variant="body2">
                Sign Up
              </Link>
            </Typography>
          </Box>
        </form>
      </div>
      <Box mt={3}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © "}
          <Link color="inherit" to="https://rabiul.netlify.app/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;

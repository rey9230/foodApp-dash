// src/content/pages/Login.tsx
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (email: string, password: string): Promise<void> => {
    //const auth: Auth = getAuth();
  
    try {
      //const userCredential = await getAuth.signInWithEmailAndPassword(auth, email, password);
      //const user = userCredential.user;
  
      // Handle signed-in user
      //console.log('User signed in:', user);
    } catch (error) {
      // Handle sign-in error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Sign-in failed with error code ${errorCode}: ${errorMessage}`);
    }
  };

  const handleLogin = async () => {
    try {
     // await auth.signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };

  return (
    <Box>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;

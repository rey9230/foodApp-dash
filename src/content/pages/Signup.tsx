// src/screens/Signup.tsx
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/firebaseConfig';

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [institution, setInstitution] = useState('');

    const handleSignup = async () => {
        try {
            //await auth.createUserWithEmailAndPassword(email, password);
            // You can add logic here to update user profile with full name and institution
            navigate('/');
        } catch (error) {
            console.error('Signup failed', error.message);
        }
    };

    return (
        <Box>
            <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
                label="Institution"
                variant="outlined"
                fullWidth
                margin="normal"
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
            />
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
            <Button variant="contained" color="primary" onClick={handleSignup}>
                Sign Up
            </Button>
        </Box>
        );
};

export default Signup;

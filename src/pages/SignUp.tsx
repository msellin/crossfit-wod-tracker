// src/components/Auth/SignUp.tsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/home'); // Redirect to the homepage after sign-up
        } catch (err) {
            setError('Error creating account, try again.');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    type="password"
                    label="Password"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button variant="contained" color="primary" fullWidth onClick={handleSignUp}>
                    Create Account
                </Button>
            </Box>
        </Container>
    );
};

export default SignUp;

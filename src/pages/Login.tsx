// src/components/Auth/Login.tsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/home');
        } catch (err) {
            setError('Invalid email or password');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Login
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
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                    Log In
                </Button>
            </Box>
            <Typography variant="body2">
                Don't have an account? <a href="/signup">Sign Up</a>
            </Typography>

        </Container>
    );
};

export default Login;

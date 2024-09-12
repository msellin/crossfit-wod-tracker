// src/pages/Home.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container>
            <Typography variant="h3" mt={5}>
                Welcome to CrossFit WOD Tracker
            </Typography>
            <Typography variant="body1" mt={2}>
                This is the homepage where you can view and track your WOD results.
            </Typography>
        </Container>
    );
};

export default Home;

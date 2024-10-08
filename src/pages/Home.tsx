// src/pages/Home.tsx
import React from 'react';
import { Typography, Container } from '@mui/material';
import Layout from '../components/Layout';

const Home: React.FC = () => {
    return (
        <Layout>
            <Container>
                <Typography variant="h3" mt={5}>
                    Welcome to CrossFit WOD Tracker
                </Typography>
                <Typography variant="body1" mt={2}>
                    Track your workouts and view your progress here.
                </Typography>
            </Container>
        </Layout>
    );
};

export default Home;

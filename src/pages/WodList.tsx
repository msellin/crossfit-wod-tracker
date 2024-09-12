// src/pages/WODList.tsx
import React from 'react';
import { Typography, Container } from '@mui/material';
import Layout from '../components/Layout';

const WODList: React.FC = () => {
    return (
        <Layout>
            <Container>
                <Typography variant="h3" mt={5}>
                    WOD List
                </Typography>
                <Typography variant="body1" mt={2}>
                    Here are the upcoming Workouts of the Day (WODs).
                </Typography>
            </Container>
        </Layout>
    );
};

export default WODList;

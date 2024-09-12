import React, { ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig'; // Firebase auth

// Define the type for props to include 'children'
interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate('/login'); // Redirect to login after logout
        });
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        CrossFit WOD Tracker
                    </Typography>

                    {/* Navigation Links */}
                    <Button color="inherit" component={Link} to="/home">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/wodlist">
                        WOD List
                    </Button>

                    {/* Logout Button */}
                    <Button color="inherit" onClick={handleLogout}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Main content */}
            <Box component="main" sx={{ p: 3 }}>
                {children}
            </Box>
        </>
    );
};

export default Layout;

import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

export const Header = (): ReactElement => {
    return (
        <Box>
            <Stack  spacing={{ xs: 2, sm: 16, md: 32 }} 
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/series">Series</Link>
                <Link to="/celebrities">Celebrities</Link>
            </Stack>
        </Box>
    );
};

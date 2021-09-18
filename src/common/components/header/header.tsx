import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Search } from '../search/search';

export const Header: FC<Record<string, never>> = (): ReactElement => {
    return (
        <Box 
            position="sticky"
            top={0}
            padding="15px 15px"
            display="flex"
            justifyContent="space-between"
            alignItems="center">
            <Box>Stream Feed</Box>
            <Stack  spacing={{ xs: 2, sm: 4, md: 8 }} 
                    direction="row"
                    alignItems="center"
                    marginRight="10px">
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/series">Series</Link>
                <Link to="/celebrities">Celebrities</Link>
            </Stack>
            <Box display={{ xs: 'none', sm: 'unset' }}><Search/></Box>
        </Box>
    );
};

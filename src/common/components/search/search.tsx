import { CSSProperties } from '@emotion/serialize';
import { Collapse, Icon, IconButton, Input } from '@mui/material';
import { Box } from '@mui/system';
import React, { createRef, FC, ReactElement, useState } from 'react';
import { useClickOutside } from './../../hooks/use-click-outside';

interface ISearch {
    styles?: CSSProperties;
}

enum SearchToggle {
    default = 'default',
    input = 'input',
}

export const Search: FC<ISearch> = ({ styles }): ReactElement => {
    const searchRef = createRef();
    const [toggle, setToggle] = useState<SearchToggle>(SearchToggle.default);
    
    useClickOutside(searchRef, () => setToggle(SearchToggle.default));
    
    return (
        <Box ref={searchRef} width={styles?.width || '100%'} display="flex">
            <IconButton onClick={() => setToggle(SearchToggle.input)}>
                <Icon>search</Icon>
            </IconButton>

            <Collapse in={toggle === SearchToggle.input} orientation="horizontal">
                {toggle === SearchToggle.input &&
                        <Box width={styles?.width || '100%'} minWidth={styles?.minWidth || '150px'} maxWidth={styles?.maxWidth || '200px'}>
                            <Input fullWidth={true}/>
                        </Box>
                }
            </Collapse>
        </Box>
    );
};

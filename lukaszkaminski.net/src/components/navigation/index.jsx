import React from 'react';
import tw from "tailwind-styled-components";

import Pages from './pages';

const Box = tw.div`
    grid
    grid-cols-2
`

const Navigation = tw.div`
    grid
    grid-cols-2
`


export default function Index() {
    return (
        <Box>
            <h1>Navigation is here</h1>
            <Navigation>
                <Pages />
            </Navigation>
        </Box>
    )
}
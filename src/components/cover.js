// Cover for the main index page

import React from 'react';

import {
    Wrapper,
    Avatar
} from '/home/gustavo/Blog/gcsilva/src/styles/styles';

export default ({ children }) => (
    <div>
        <Wrapper>
            <Avatar />
            <div style={{ width: '85%' }}>
                {children}
            </div>
        </Wrapper>
    </div>
)
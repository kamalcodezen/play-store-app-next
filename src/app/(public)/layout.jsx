import Navbar from '@/components/shared/Navbar';
import React from 'react';

const PublicLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default PublicLayout;
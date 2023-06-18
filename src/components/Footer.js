import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-light py-3 fixed-bottom">
            <Container className="text-center">
                <p className="mb-0">
                    &copy; {currentYear} Shreya's Website. All rights reserved.
                </p>
            </Container>
        </footer>
    );
};

export default Footer;

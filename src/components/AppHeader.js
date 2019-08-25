import React from 'react';
import { Section, Container, Heading } from 'react-bulma-components/full';

const AppHeader = () => {
    return (
        <Section>
            <Container className="notification is-info">                
                <Heading size={1} className="has-text-centered">ToDo</Heading>                
            </Container>
      </Section>
    );
}

export default AppHeader;
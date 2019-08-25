import React from 'react';
import { Container, Hero, Content, Footer } from 'react-bulma-components/full';

const AppFooter = () => {
    return (
        <Hero size="fullheight">
            <Hero.Head renderAs="header" />
            <Hero.Body />
            <Hero.Footer>
                <Footer>
                    <Content style={{ textAlign: 'center'}}>
                        <Container>
                            <p>
                                <strong>ToDo</strong> by <a href="https://sagartamang.com.np">Sagar Tamang</a>
                                . The source code is licensed in <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                                The website content is licensed{' '} <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                            </p>                    
                        </Container>
                    </Content>
                </Footer>
            </Hero.Footer>
        </Hero>
    );
}

export default AppFooter;
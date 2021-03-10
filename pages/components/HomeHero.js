import React from 'react';
import styled from 'styled-components';
import { StyledImage, Container } from '../../public/styles';

const HomeHero = () => {
  return (
    <StyledMain>
      <Container>
        <div>
          <h1>
            My work is to make{' '}
            <span>
              your <span>dreams</span>
            </span>{' '}
            come true.
          </h1>
          <p>
            Contact me for your next websites ideas that you have. I'm a
            professional web developer and designer.
          </p>
          <button>Contact me</button>
        </div>
        <StyledImage
          src='/images/profile.jpeg'
          alt='Harel Panker'
          width={768}
          height={1024}
        />
      </Container>
    </StyledMain>
  );
};
const StyledMain = styled.main`
  padding: 80px 20px;
  min-height: 90vh;
`;

export default HomeHero;

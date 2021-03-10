import React from 'react';
import styled from 'styled-components';
import { StyledImage, Container, StyledSection } from '../../public/styles';

import services from '../../public/services';

const Services = () => {
  return (
    <StyledSection>
      <Container>
        <StyledImage
          src='/images/services.jpg'
          alt='Services'
          width={1280}
          height={1868}
        />
        <div>
          <h2>
            High <span>quality</span> service.
          </h2>
          <StyledGrid>
            {services.map((service) => (
              <li key={service.id}>
                <StyledFlex>
                  <StyledImage
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                  />
                  <StyledServiceName>{service.title}</StyledServiceName>
                </StyledFlex>
                <p>{service.text}</p>
              </li>
            ))}
          </StyledGrid>
        </div>
      </Container>
    </StyledSection>
  );
};
const StyledServiceName = styled.h3`
  margin-left: 1rem;
`;
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
`;
const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  list-style-type: none;
`;

export default Services;

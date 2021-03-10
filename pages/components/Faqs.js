import React from 'react';
import styled from 'styled-components';
import faqs from '../../public/faqs';
import { StyledSection } from '../../public/styles';

const Faqs = () => {
  return (
    <StyledSection>
      <Container>
        <h2>
          Any questions? <span>FAQ</span>
        </h2>
        {/* faqs */}
        {faqs.map((faq) => (
          <div key={faq.id}>
            <h3>{faq.question}</h3>
            <div>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </Container>
    </StyledSection>
  );
};

const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 1140px;
`;

export default Faqs;

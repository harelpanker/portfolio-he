import Image from 'next/image';
import styled from 'styled-components';

export const StyledImage = styled(Image)`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 1140px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  align-items: center;
`;

export const StyledSection = styled.section`
  padding: 80px 20px;
`;

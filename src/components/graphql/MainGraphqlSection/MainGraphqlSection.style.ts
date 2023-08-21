import { styled } from '@mui/material/styles';

export const MainSection = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;
  @media (max-width: 1400px) {
    width: 90%;
  }
  @media (max-width: 600px) {
    padding: 0 0 15px;
  }
`;

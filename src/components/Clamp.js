import styled from 'styled-components';

export const Clamp = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const OneLineClamp = styled(Clamp)`
  -webkit-line-clamp: 1;
`;

export const TwoLineClamp = styled(Clamp)`
  -webkit-line-clamp: 2;
`;

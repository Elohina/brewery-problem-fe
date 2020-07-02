import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  text-align: left,;
  padding: 2rem;
  label {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  li {
    font-size: 1.8rem;
  }
`;

const SimpleList = ({
  title,
  list
}) => {

  return(
    <StyledContainer>
      <label>{title}</label>
      <StyledList>
        {list.map((element, index) => (
          <li key={index}>{element.name}: {element.amount.value} {element.amount.unit}</li>
        ))}
      </StyledList>
    </StyledContainer>
  );
};

export default SimpleList;
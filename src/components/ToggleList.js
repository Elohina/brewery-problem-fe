import React, {useState} from 'react';
import styled from 'styled-components';
import ToggleButton from './ToggleButton';

const StyledContainer = styled.div`
  text-align: left;
  padding: 2rem;
  label {
    font-size: 1.8rem;
    font-weight: 600;
    color: #900808;
  }
`;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
  margin-top: 2rem;
`;

const ToggleList = ({
  title,
  list,
  enableState,
  disableState
}) => {

  return(
    <StyledContainer>
      <label>{title}</label>
      <StyledList>
        {list.map((element, index) => (
          <StyledItem key={index}>
            {element.name}: {element.amount.value} {element.amount.unit}
            <ToggleButton enableState={enableState} disableState={disableState} />
          </StyledItem>
        ))}
      </StyledList>
    </StyledContainer>
  );
};

export default ToggleList;
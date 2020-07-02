import React, {useState} from 'react';
import styled from 'styled-components';

const StyledToggleButton = styled.button`
  background-color: ${props => props.isEnabled ? '#900808' : 'peru'};
  border: none;
  color: white;
  width: 6rem;
  height: 3rem;
  cursor: pointer;
`;

const ToggleButton = ({
  enableState,
  disableState
}) => {
  const [toggleButton, settoggleButton] = useState(false);
  const changeButtonState = () => {
    const newState = !toggleButton;
    settoggleButton(newState);
  };

  return(
    <StyledToggleButton isEnabled={toggleButton} onClick={()=>changeButtonState()}>
      {toggleButton ? enableState : disableState}
    </StyledToggleButton>
  );
};

export default ToggleButton;
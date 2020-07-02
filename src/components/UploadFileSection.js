import React from 'react';
import { processInput } from '../utils/inputProcessor';
import styled from 'styled-components';

const StyledContainer = styled.div`
    border-top: 1px solid peru;
    border-bottom: 1px solid peru;
    padding: 1rem;

    label {
      font-size: 2rem;
      font-weight: 300;
    }

    input {
      color: transparent;
      padding: 1rem;
    }
`;

const UploadFileSection = ({handleResult, resetResult}) => {

  const getFile = (event) => {
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      const content = fileReader.result;
      const result = processInput(content.split('\n'));

      handleResult(result);
    };
    fileReader.readAsText(file);
  };

  const reset = () => {
    resetResult();
  };

  return(
    <StyledContainer>
      <label htmlFor="file-loader">{"Upload client's preferences"}</label>
      <input id="file-loader" type="file" accept=".txt" onChange={e => getFile(e)}/>
      <button onClick={()=>reset()}>Reset</button>
    </StyledContainer>
  );
};

export default UploadFileSection;
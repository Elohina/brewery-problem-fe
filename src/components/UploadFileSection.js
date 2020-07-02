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
      border-left: 1px solid peru;
      border-right: 1px solid peru;
      color: peru;
      padding: 1rem;
      cursor: pointer;

      &:hover {
        color: #900808;
      }
    }

    input {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    button {
      padding: 1rem;
      border: none;
      border-right: 1px solid peru;
      background-color: white;
      color: peru;
      font-family: 'Josefin Sans', sans-serif;
      font-size: 2rem;
      font-weight: 300;
      cursor: pointer;
      &:hover {
        color: #900808;
      }
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
    if (file) {
      fileReader.readAsText(file);
    }
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
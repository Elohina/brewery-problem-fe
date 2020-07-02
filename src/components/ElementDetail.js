import React from 'react';
import ToggleList from './ToggleList';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0px auto;
  padding: 5rem;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    padding: 1rem;
  }

`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BackButton = styled.button`
  width: 20rem;
  background-color: white;
  border: 1px solid peru;
  height: 5rem;
  color: peru;
  font-size: 2rem;
  cursor: pointer;
`;
const StyledImage = styled.img`
  height: 500px;
  margin: 2rem;
`;
const DescriptionContainer = styled.div`
  padding: 0px 8rem;
  display: flex;
  flex-direction: column;
  flex: 0 0 70%;
  font-size: 1.8rem;

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: 56.25em) {
    padding: 0;
  }
`;

const StyledAbv = styled.p`
  font-size: 2rem;
  color: #900808;
`;

const ElementDetail = ({
  imageSrc,
  name,
  abv,
  description,
  hopsList,
  maltsList,
  methodsList,
  goBackToList
}) => {

  const goBack = () => {
    goBackToList();
  };

  return (
    <StyledContainer>
      <ImageContainer>
        <BackButton onClick={() => goBack()}>{"Back"}</BackButton>
        <StyledImage src={imageSrc} alt={name} />
      </ImageContainer>
      <DescriptionContainer>
        <h2>{name}</h2>
        <StyledAbv>{abv}%</StyledAbv>
        <p>{description}</p>
        <ToggleList title="Methods" list={methodsList} enableState={"DONE"} disableState={"IDLE"}/>
        <ToggleList title="Hops" list={hopsList} enableState={"DONE"} disableState={"IDLE"}/>
        <ToggleList title="Malts" list={maltsList} enableState={"DONE"} disableState={"IDLE"}/>
      </DescriptionContainer>
    </StyledContainer>
  );
};

export default ElementDetail;
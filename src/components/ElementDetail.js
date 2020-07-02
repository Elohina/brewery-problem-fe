import React from 'react';
import SimpleList from './SimpleList';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0px auto;
  padding: 5rem;
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
  justify-content: left;
  font-size: 1.8rem;

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    font-size: 1.8rem;
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
        <h3>Method</h3>
        <p>Fermentation: {methodsList.fermentation.temp.value} {methodsList.fermentation.temp.unit}</p>
        <p>Mash Temp: {methodsList.mash_temp[0].temp.value} {methodsList.mash_temp[0].temp.unit}</p>
        <SimpleList title="Hops" list={hopsList} />
        <SimpleList title="Malts" list={maltsList} />
        <SimpleList title="Method" list={maltsList} />
      </DescriptionContainer>
    </StyledContainer>
  );
};

export default ElementDetail;
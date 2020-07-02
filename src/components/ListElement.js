import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin: 2rem;
  background: palegoldenrod;
  width: 35rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  height: 200px;
    margin: 2rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  overflow-wrap: break-word;
  width: 60%;

  h3 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  p {
    font-size: 1.8rem;
    color: #900808;
  }
`;

const DetailsButton = styled.button`
  width: 100%;
  background-color: Peru;
  border: 0;
  height: 5rem;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  font-family: 'Josefin Sans', sans-serif;

  &:hover {
    background-color: #da9c60;
  }
`;

const ListElement = ({ id, imageSrc, name, typeName, abv, openDetailAction }) => {
  const openDetail = (event, id) => {
    event.preventDefault();
    openDetailAction(id);
  };

  return (
    <StyledListItem>
      <InfoContainer>
        <StyledImage src={imageSrc} alt={name}/>
        <DetailsContainer>
          <h3>{name}</h3>
          <p id="red">{abv}%</p>
          { typeName &&
            <p>{typeName === 'C' ? 'Classic' : 'Barrel aged'}</p>
          }
        </DetailsContainer>
      </InfoContainer>
      <DetailsButton onClick={(e)=>openDetail(e, id)}>See details</DetailsButton>
    </StyledListItem>
  );
};

export default ListElement;

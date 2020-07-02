import React from 'react';
import ListElement from './ListElement';
import styled from 'styled-components';

const StyledList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
`;

const List = ({ list, types, openDetailAction }) => {
  return (
    <StyledList>
      {list.map((element, index) => (
        <ListElement
          key={element.id}
          id={element.id}
          name={element.name}
          abv={element.abv}
          typeName={types && types[index]}
          imageSrc={element.image_url}
          openDetailAction={openDetailAction} />
      ))}
    </StyledList>
  );
};

export default List;
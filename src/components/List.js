import React from 'react';
import ListElement from './ListElement';

const List = ({ list, types, openDetailAction }) => {
  const { container } = styles;
  return (
    <ul style={container}>
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
    </ul>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: '0 auto',
    width: '70%',
  },
};

export default List;
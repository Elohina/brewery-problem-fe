import React from "react";

const SimpleList = ({
  title,
  list
}) => {
  const { container, listContainer, listItem, titleStyles } = styles;
  return(
    <div style={container}>
      <label style={titleStyles}>{title}</label>
      <ul style={listContainer}>
        {list.map((element, index) => (
          <li key={index} style={listItem}>{element.name}: {element.amount.value} {element.amount.unit}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'left',
    padding: '2rem'
  },
  listContainer: {
    listStyle: 'none',
  },
  titleStyles: {
    fontSize: '1.8rem',
    fontWeight: '600',
  },
  listItem: {
    fontSize: '1.8rem',
  }

};

export default SimpleList;
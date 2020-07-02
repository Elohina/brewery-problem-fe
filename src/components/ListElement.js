import React from "react";

const ListElement = ({ id, imageSrc, name, typeName, abv, openDetailAction }) => {
  const { imageStyles, container, info, nameStyles, abvStyles, abvContainer, typeStyles, seeDetailsButton, infoContainer } = styles;
  const openDetail = (event, id) => {
    event.preventDefault();
    openDetailAction(id);
  };

  return (
    <li style={container}>
      <div style={infoContainer}>
        <img src={imageSrc} alt={name} style={imageStyles} />
        <div style={info}>
          <p style={nameStyles}>{name}</p>
          <div style={abvContainer}>
            <p style={abvStyles}>{abv}%</p>
          </div>
          { typeName &&
            <p style={typeStyles}>{typeName === 'C' ? 'Classic' : 'Barrel aged'}</p>
          }
        </div>
      </div>
      <div>
        <button style={seeDetailsButton} onClick={(e)=>openDetail(e, id)}>See details</button>
      </div>
    </li>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    margin: '2rem',
    background: 'PaleGoldenRod',
    width: '30%',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: '2rem',
    justifyContent: 'space-between',
  },
  imageStyles: {
    height: 200,
    margin: '2rem'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    wordWrap: 'break-word',
    width: '60%',
  },
  nameStyles: {
    fontSize: '2rem',
    fontWeight: '500'
  },
  abvStyles: {
    fontSize: '2rem',
    color: '#900808'
  },
  typeStyles: {
    fontSize: '2rem',
    color: '#900808'
  },
  seeDetailsButton: {
    width: '100%',
    backgroundColor: 'Peru',
    border: '0',
    height: '5rem',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
  }
};

export default ListElement;

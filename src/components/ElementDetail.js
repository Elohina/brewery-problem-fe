import React from 'react';
import SimpleList from './SimpleList';

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
  const { container, imageContainer, imageStyle, descriptionContainer, nameStyles, abvStyles, descriptionStyles, backButton, labelStyles } = styles;

  const goBack = () => {
    goBackToList();
  };

  return (
    <div style={container}>
      <div style={imageContainer}>
        <button style={backButton} onClick={() => goBack()}>Back</button>
        <img style={imageStyle} src={imageSrc} alt={name} />
      </div>
      <div style={descriptionContainer}>
        <h2 style={nameStyles}>{name}</h2>
        <p style={abvStyles}>{abv}%</p>
        <p style={descriptionStyles}>{description}</p>
        <h3 style={labelStyles}>Method</h3>
        <p style={descriptionStyles}>Fermentation: {methodsList.fermentation.temp.value} {methodsList.fermentation.temp.unit}</p>
        <p style={descriptionStyles}>Mash Temp: {methodsList.mash_temp[0].temp.value} {methodsList.mash_temp[0].temp.unit}</p>
        <SimpleList title="Hops" list={hopsList} />
        <SimpleList title="Malts" list={maltsList} />
        <SimpleList title="Method" list={maltsList} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '80%',
    margin: '0 auto',
    padding: '5rem',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageStyle: {
    height: 500,
    margin: '2rem'
  },
  descriptionContainer: {
    padding: '0 8rem',
    display: 'flex',
    flexDirection: 'column',
    flex: '0 0 70%',
    justifyContent: 'left'
  },
  nameStyles: {
    fontSize: '2.5rem',
    fontWeight: '600'
  },
  abvStyles: {
    fontSize: '2rem',
    color: '#900808'
  },
  descriptionStyles: {
    fontSize: '1.8rem'
  },
  backButton: {
    width: '20rem',
    backgroundColor: 'white',
    border: '1px solid Peru',
    height: '5rem',
    color: 'Peru',
    fontSize: '2rem',
    cursor: 'pointer',
  },
  labelStyles: {
    fontSize: '1.8rem',
    fontWeight: '600',
  },
};

export default ElementDetail;
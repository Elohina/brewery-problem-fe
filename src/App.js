import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components';
import List from './components/List';
import ElementDetail from './components/ElementDetail';
import UploadFileSection from './components/UploadFileSection';
import { API_URL } from './config/beersAPI';

const StyledContainer = styled.div`
  padding: 5rem;
  text-align: center;
`;

const StyledHeader = styled.header`
  padding: 5rem;
  text-align: center;
  color: #900808;

  h1 {
    font-size: 4.5rem;
  }

  p {
    font-size: 2rem;
  }
`;

function App() {
  const [beers, setBeers] = useState([]);
  const [fetchError, setFetchError] = useState(false);
  const [types, setTypes] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const getBeerList = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setBeers(data);
      return (data);
    } catch(err) {
      setFetchError(true);
    }
  };

  useEffect(() => {
    getBeerList();
  }, []);

  const showResult = (result) => {
    setTypes(result);
    const newList = beers.slice(0, result.length);
    setFilteredBeers(newList);
  };

  const openDetailPage = (id) => {
    setSelectedElement(beers[id-1]);
  };

  const closeDetail = () => {
    setSelectedElement(null);
  };

  const resetList = () => {
    setTypes([]);
    setFilteredBeers([]);
  };

  return (
    <div>
      <StyledHeader>
        <h1>The Brewery Problem</h1>
        <p>By: Elohina Guevara</p>
      </StyledHeader>
      <main>
        <StyledContainer>
          { selectedElement !== null ? (
            <ElementDetail imageSrc={selectedElement.image_url}
              name={selectedElement.name}
              abv={selectedElement.abv}
              description={selectedElement.description}
              hopsList={selectedElement.ingredients.hops}
              maltsList={selectedElement.ingredients.malt}
              methodsList={selectedElement.method}
              goBackToList={closeDetail} />
          ):(
            <>
              <UploadFileSection  handleResult={showResult} resetResult={resetList} />
              { beers.length ? (
                filteredBeers.length ? (
                  <List list={filteredBeers} types={types} openDetailAction={openDetailPage}/>
                ) : (
                  <List list={beers} types={types} openDetailAction={openDetailPage}/>
                )
              ) : (
                <h3>{fetchError ? "There was an error getting the beer's list. Please try later." : "Loading..."}</h3>
              )}
            </>
          )}
        </StyledContainer>
      </main>
    </div>
  );
}

export default App;

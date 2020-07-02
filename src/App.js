import React, {useState, useEffect} from 'react';
import './App.css';
import List from './components/List';
import ElementDetail from './components/ElementDetail';
import { processInput } from './utils/inputProcessor';
import { API_URL } from './config/beersAPI';

function App() {
  const [beers, setBeers] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const { headerContainer, headerTitle, authorText, container, uploadLabel, uploadInput } = styles;
  const [selectedElement, setSelectedElement] = useState(null);

  const getBeerList = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setBeers(data);
      return (data);
    } catch(err) {

    }
  };

  useEffect(() => {
    getBeerList();
  }, []);

  const showResult = (result) => {
    const newList = beers.slice(0, result.length);
    setFilteredBeers(newList);
  };

  const getFile = (event) => {
    const file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = (e) => {
      const content = fileReader.result;
      const result = processInput(content.split('\n'));
      setTypes(result);
      showResult(result);
    };
    fileReader.onerror = (e) => {

    };
    fileReader.readAsText(file);
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
    <div className="App">
      <header style={headerContainer}>
        <h1 style={headerTitle}>The Brewery Problem</h1>
        <p style={authorText}>By: Elohina Guevara</p>
      </header>
      <main>
        <div style={container}>
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
              <label style={uploadLabel} htmlFor="file-loader">Upload client's preferences</label>
              <input style={uploadInput} id="file-loader" type="file" accept=".txt" onChange={e => getFile(e)}/>
              <button onClick={()=>resetList()}>Reset</button>
              { beers.length ? (
                filteredBeers.length ? (
                  <List list={filteredBeers} types={types} openDetailAction={openDetailPage}/>
                ) : (
                  <List list={beers} types={types} openDetailAction={openDetailPage}/>
                )
              ) : (
                <h3>"Loading..."</h3>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    padding: '5rem',
    textAlign: 'center',
  },
  headerContainer: {
    padding: '5rem',
    textAlign: 'center',
    color: '#900808'
  },
  headerTitle: {
    fontSize: '4.5rem'
  },
  authorText: {
    fontSize: '2rem'
  },
  uploadLabel: {
    fontSize: '1.5rem',

  },
  uploadInput: {
    color: 'transparent',
    padding: '1rem'
  }
};

export default App;

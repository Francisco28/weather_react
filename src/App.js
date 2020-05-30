import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';


function App() {


  //state of the Form
  const [ search, saveSearch ] = useState({
    city: '',
    country: ''
  });
  
  //state to cosult
  const [ consult, saveConsult ] = useState(false);

  //state to search
  const { city, country } = search;

  useEffect( () => {
      const consultAPI = async () => {
            
      }
      consultAPI();
  }, [consult]);

  return (
    <Fragment>
        <Header 
          title='Weather React App'
        />

        <div className="container-form">
            <div className="container">
                <div className="row">
                  <div className="col m6 s12">
                      <Form
                        search={search}
                        saveSearch={saveSearch}
                        saveConsult={saveConsult}
                      />
                  </div>
                  <div className="col m6 s12">
                      2
                  </div>
                </div>
            </div>
        </div>

    </Fragment>
    
  );
}

export default App;

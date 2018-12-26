import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import LanguageCollect from '../components/LanguageCollect';

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
      <LanguageStore>
       <LanguageCollect onLanguageChange={this.onLanguageChange} />
        <ColorContext.Provider value="red">
          <UserCreate />
        </ColorContext.Provider>
      </LanguageStore>
      </div>

    );
  }
}

export default App;

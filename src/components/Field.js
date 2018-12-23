import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {

    return (
      <div className="ui field">
          <label htmlFor="">
            <LanguageContext.Consumer>
             {value => value === 'english' ? 'Name' : 'Naam'}
            </LanguageContext.Consumer>
          </label>
        <input type="text"/>
      </div>
    );
  };
}

export default Field;

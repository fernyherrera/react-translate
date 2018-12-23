import React from 'react';
import LanguageContent from '../context/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContent;

  render() {
    return (
      <button className="ui primary button">
        <LanguageContent.Consumer>
          {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
        </LanguageContent.Consumer>
      </button>
    );
  };
}

export default Button;

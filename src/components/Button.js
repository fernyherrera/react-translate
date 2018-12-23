import React from 'react';
import LanguageContent from '../context/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContent;

  render() {
    const text = this.context === 'english' ? 'Submit': 'Voorleggen';
    return (
      <button className="ui primary button">{text}</button>
    );
  };
}

export default Button;

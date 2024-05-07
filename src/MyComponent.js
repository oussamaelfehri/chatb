import React from 'react';
import { useHistory } from 'react-router-dom';

const MyComponent = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Rediriger vers la page contenant le chatbot lorsque le bouton est cliqué
    history.push('/chatbot');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Cliquez ici pour ouvrir le chatbot</button>
    </div>
  );
};

export default MyComponent;

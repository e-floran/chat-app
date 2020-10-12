import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList'

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <ContactList />
      </React.StrictMode>
    </div>
  );
}

export default App;

import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Contact
        image="https://randomuser.me/api/portraits/men/73.jpg"
        name="Marcus Freeman"
        online= {true}
        />
        <Contact
        image="https://randomuser.me/api/portraits/men/9.jpg"
        name="Gary Sanders"
        online= {false}
        />
        <Contact
        image="https://randomuser.me/api/portraits/women/82.jpg"
        name="Elsie Jacobs"
        online= {true}
        />
      </React.StrictMode>
    </div>
  );
}

export default App;

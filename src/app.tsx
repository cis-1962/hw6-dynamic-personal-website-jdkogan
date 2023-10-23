import React from 'react';
import Header from './components/Header';
import Blog from './components/Blog';
import Introduction from './components/Introduction';

function App() {
  return (
    <div className="container">
      <Header />
      <Introduction />
      <Blog />
    </div>
  );
}

export default App;

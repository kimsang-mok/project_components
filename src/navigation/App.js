import Navigation from './components/Navigation';
import React, { useState } from 'react';
import "./App.scss"
import { useEffect } from 'react';


function App() {
  const [noScroll, setNoScroll] = useState(false);

  const handleNoScroll = (isNavOpen) => {
    setNoScroll(isNavOpen);
  };
  console.log(noScroll)

  useEffect(() => {
    if (noScroll) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [noScroll]);

  return (
    <div>
      <Navigation handleNoScroll={handleNoScroll} />
    </div>
  );
}

export default App;

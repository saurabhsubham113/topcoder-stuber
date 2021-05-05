import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import DataPrivacy from './sections/dataPrivacy/DataPrivacy';
import HowItWorks from './sections/howItWorks/HowItWorks';
import WhatItIs from './sections/whatItIs/WhatItIs';
import WhoIsItFor from './sections/whoIsItFor/WhoIsItFor';
import WhyStuber from './sections/whyStuber/WhyStuber';

function App() {
  return (
    <div className="App">
      <Header />
      <WhatItIs />
      <div className="section-container">
        <WhyStuber />
        <WhoIsItFor />
      </div>
      <HowItWorks />
      <DataPrivacy />
      <Footer />
    </div>
  );
}

export default App;

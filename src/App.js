import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Tag from './components/Tag.js';

function App() {
  const homeTag = "OUR SECOND BOOK IS AVAILABLE FOR ORDER AT JUST 749 INR";
  return (
    <>
      <div>
        <Tag tag={homeTag} />
        <Nav />
        <div className="w-5/6 mx-auto">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;

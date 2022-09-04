import './App.css'
import './comonents/main_header_bar/MainHeaderBar.css'
import './comonents/main_header_bar/MainHeaderBar'
import MainHeaderBar from './comonents/main_header_bar/MainHeaderBar';

function App() {
  return (
    <div className="App">
      <h1 id='main_title'>Markus Masalkovski</h1>
      <hr className='header_line'></hr>
        <MainHeaderBar />
      <hr className='header_line'></hr>
    </div>
  );
}

export default App;

import './App.css'
import './components/main_header_bar/MainHeaderBar.css'
import './components/main_header_bar/MainHeaderBar'
import MainHeaderBar from './components/main_header_bar/MainHeaderBar';
import Resume from './components/body/resume/Resume';
import './components/body/resume/Resume.css'

function App() {
  return (
    <div className="App">
      <h1 id='main_title'>Markus Masalkovski</h1>
      <hr className='header_line'></hr>
        <MainHeaderBar />
      <hr className='header_line'></hr>
      <Resume />
    </div>
  );
}

export default App;

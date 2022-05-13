import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import AboutMe from './components/AboutMe/AboutMe';
import Skill from './components/Skill/Skill';
import Information from './components/Information/Information';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import getWindowWidth from './functions/getWindowWidth';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';
import React, { useState } from 'react';
import Toggle from './components/Toggletheme/ToggleTheme';

function App() {
  const [theme, setTheme] = useState('light');
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header />
          <div className='container'>
            <Toggle theme={theme} setTheme={setTheme} />
            {
              (getWindowWidth() <= 1200) ?
                <div className='flexbox-1'>
                  <Profile />
                  <AboutMe />
                  <Information />
                  <Skill />
                </div>
                :
                <div className='flexbox-1'>
                  <div className='col-1'>
                    <Profile />
                    <Skill />
                  </div>
                  <div className='col-2'>
                    <AboutMe />
                    <Information />
                  </div>
                </div>
            }
            <div className='flexbox-2'>
              <Education />
              <Experience />
            </div>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

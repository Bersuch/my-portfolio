import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    /*<main className='text-gray-400 bg-gray-900 body-font'>
      
      <About />  
    </main>*/
    
    

    
    <main className="text-gray-400 bg-gray-900 body-font">
        <About />
        <Projects />
        <Skills />
    </main>
  );
}

/* 

<Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />

*/

export default App;

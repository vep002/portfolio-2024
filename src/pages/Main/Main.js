import React from 'react';
import { NavBar, Landing, AboutMe, Education, Skills, Experience, Projects, Contact, Footer } from '../../components'


function Main() {
  return (
    <div>
      <NavBar />
      <Landing />
      <AboutMe />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main
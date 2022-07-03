import React from 'react'

const Header = () => {
  return (
    <nav class="sticky navbar">
    <div class="brand  display__logo">
      <a href="#top" class="nav__link"> CROSS-<span class="logo"/></a>
    </div>
  
    <input type="checkbox" id="nav" class="hidden" />
    <label for="nav" class="nav__open"><i></i><i></i><i></i></label>
    <div class="nav">
      <ul class="nav__items">
        <li class="nav__item"><a href="/" class="nav__link">Home</a></li>
        <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
        <li class="nav__item"><a href="#portfolio" class="nav__link">Portfolio</a></li>
        <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header
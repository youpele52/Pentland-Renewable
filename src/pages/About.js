import React from 'react'
import styled from 'styled-components'
import sdg1 from '../assets/img/sdg1.png'
import sdg3 from '../assets/img/sdg3.png'
import sdg5 from '../assets/img/sdg5.png'
import sdg7 from '../assets/img/sdg7.png'
import sdg13 from '../assets/img/sdg13.png'
import compass from '../assets/img/compass.jpeg'

function About() {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={sdg1} alt='sdg1' />
        <img src={sdg3} alt='sdg3' />
        <img src={sdg5} alt='sdg5' />
        <img src={sdg7} alt='sdg7' />
        <img src={sdg13} alt='sdg13' />
      </div>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
  margin: 0;
  display: grid;

  // grid-template-columns: 50%;
  .about {
    display: flex;
    justify-content: center;
    font-size: 2rem;
  }
  .img-container {
    padding: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: row;
    // background-color: red;
    img {
      width: calc(100% / 5);
    }
  }
`

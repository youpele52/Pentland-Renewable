import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Wrapper>
      <div className='bg'>
        <div className='statement'>
          <h3>Reliable Energy Partner</h3>
          <p>
            We provide renewable energy solutions that creates economic markets
            for sustainable living within the communities.
          </p>
        </div>
      </div>

      <h1 className='home'>Home</h1>

      {/* <div className='colors'>
        <img
          src='https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
          alt=''
        />
      </div>
      <div className='colors'>
        <img
          src='https://images.unsplash.com/photo-1592833159117-ac790d4066e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
          alt=''
        />
      </div> */}
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  .colors {
    min-height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
    grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
  }
  .statement {
    width: 180%;
    padding: 30px;
    border-radius: 25px;
    margin: 2rem;
    color: white;
    background-color: white;
    // background-size: 3rem 10rem;
    opacity: 0.6;
    // position: -webkit-sticky;
    position: relative;
    top: -27rem;
    left: -27rem;
    h3 {
      font-size: 3rem;
      display: flex;
      color: black;
    }
    p {
      color: black;
      display: flex;
      font-size: 1.2rem;
    }
  }
`

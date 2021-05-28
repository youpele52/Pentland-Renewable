import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <Wrapper className='title section-center page-100'>
      <section>
        <h2>
          404
          {/* <span role='img' aria-label>
            🥴
          </span> */}
        </h2>
        <p>
          We are stuck with technology when all we really want is just stuff
          that works. How do you recognize something that is still technology? A
          good clue is if it comes with a manual. ~ Douglas Adams
        </p>
        <Link to='/' className='btn'>
          Return home
        </Link>
        <div className='underline'></div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  // background: black;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // text-align: center;

  h1 {
    font-size: 10rem;
  }
  // h2 {
  //   color: var(--clr-grey-9);
  // }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  p {
    text-transform: none;
  }
`

export default ErrorPage

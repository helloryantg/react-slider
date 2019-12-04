import React from 'react'
import styled from 'styled-components'

import Slider from './components/Slider'


const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

function App() {
  return (
    <AppContainer className="App">
      <Slider 
        start={50}
        max={100}
        onChange={value => console.log(value)}
      />
    </AppContainer>
  )
}

export default App

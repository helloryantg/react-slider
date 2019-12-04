import React from 'react'
import styled from 'styled-components'


const SliderContainer = styled.div`
  height: 10rem;
  border: 1px solid black;
  
`

const SliderHeader = styled.div`
  display: flex;
  justify-content: center;
`

const SliderBar = styled.div`
  height: 1.4rem;
  border-radius: 4px;
  margin: 1rem;
  background-color: grey;
`

const SliderThumb = styled.div`
  height: 2.4rem;
  width: 1rem;
  position: relative;
  top: -10px;
  background-color: black;
  border-radius: 4px;
  cursor: pointer;
`

export default function Slider({ start, max, onChange }) {
  return (
    <SliderContainer>
      <SliderHeader>
        This is where the count will go
      </SliderHeader>
      <SliderBar>
        <SliderThumb/>
      </SliderBar>
    </SliderContainer>
  )
}
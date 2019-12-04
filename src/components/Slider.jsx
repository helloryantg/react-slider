import React, { useRef } from 'react'
import styled from 'styled-components'


const SliderContainer = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
`

const SliderHeader = styled.div`
  display: flex;
  justify-content: center;
`

const SliderBar = styled.div`
  height: 1.4rem;
  border-radius: 4px;
  margin: 4rem 1.4rem;
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

const calculatePercentage = (current, max) => (100 * current) / max

const getValue = (percentage, max) => (max / 100) * percentage

const getLeft = percentage => `calc(${percentage}% - 5px)`

export default function Slider({ 
  start, 
  max, 
  onChange,
  formatFn = number => number.toFixed(0)
 }) {
  const initialPercentage = calculatePercentage(start, max)

  const sliderRef = useRef()
  const thumbRef = useRef()
  const currentRef = useRef()
  const diff = useRef()

  const handleMouseMove = event => {
    let newX = event.clientX - diff.current - sliderRef.current.getBoundingClientRect().left

    const end = sliderRef.current.offsetWidth - thumbRef.current.offsetWidth

    const start = 0

    if (newX < start) {
      newX = 0
    }

    if (newX > end) {
      newX = end
    }

    const newPercentage = calculatePercentage(newX, end)
    const newValue = getValue(newPercentage, max)

    thumbRef.current.style.left = getLeft(newPercentage)
    currentRef.current.textContent = formatFn(newValue)

    onChange(newValue)
  }

  const handleMouseUp = () => {
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
  }

  const handleMouseDown = event => {
    diff.current = event.clientX - thumbRef.current.getBoundingClientRect().left

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  return (
    <SliderContainer>
      <SliderHeader>
        <div ref={currentRef}>{formatFn(start)}</div>
        &nbsp;/&nbsp;
        {max}
      </SliderHeader>
      <SliderBar ref={sliderRef}>
        <SliderThumb
          ref={thumbRef}
          style={{ left: getLeft(initialPercentage) }}
          onMouseDown={handleMouseDown}
        />
      </SliderBar>
    </SliderContainer>
  )
}
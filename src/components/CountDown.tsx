"use client"
import React from 'react'
import Countdown from 'react-countdown'

const endingDate = new Date('2023-12-29')

const CountDown = () => {
  return (
        <Countdown className='font-bold text-[36px] text-yellow-500' date={endingDate}/>
  )
}

export default CountDown
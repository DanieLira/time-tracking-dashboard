import React from 'react'
import UserContainer from './components/UserContainer'
import TimerContainer from './components/TimerContainer'
import data from '../data.json'

export default function App() {

  const timerElements = data.map(timer => <TimerContainer data={timer} />)

  return (
    <div className="font-['Rubik']">
      <div className='flex'>
        <UserContainer />
        <div>
          <div className='flex'>
            {timerElements.slice(0, 3)}
          </div>
          <div className='flex'>
            {timerElements.slice(3, 6)}
          </div>
        </div>
      </div>
    </div>
  )
}



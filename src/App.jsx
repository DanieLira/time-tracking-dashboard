import React from 'react'
import UserContainer from './components/UserContainer'
import TimerContainer from './components/TimerContainer'
import data from '../data.json'

export default function App() {
  
  const timerElements = data.map(timer => <TimerContainer data={timer}/> )

  return (
    <div className="font-['Rubik']">
      <UserContainer />
      {timerElements}
    </div>
  )
}



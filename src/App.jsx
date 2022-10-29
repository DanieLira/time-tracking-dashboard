import React from 'react'
import UserContainer from './components/UserContainer'
import TimerContainer from './components/TimerContainer'
import data from '../data.json'

export default function App() {

  const [timeChecked, setTimeChecked] = React.useState("daily")

  function changePeriod(timeChecked){
    setTimeChecked(timeChecked)
  }

  const timerElements = data.map(timer => <TimerContainer data={timer} timeChecked={timeChecked}/>)

  return (
    <div className="font-['Rubik'] flex items-center justify-center h-screen">
      <div className='flex'>
        <UserContainer changePeriod={changePeriod}/>
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



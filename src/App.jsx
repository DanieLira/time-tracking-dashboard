import React from 'react'
import UserContainer from './components/UserContainer'
import TimerContainer from './components/TimerContainer'
import data from '../data.json'

export default function App() {

  const [timeFrame, setTimeFrame] = React.useState("daily")

  function changeTimeFrame(timeFrame){
    setTimeFrame(timeFrame)
  }

  const timerElements = data.map(timer => <TimerContainer data={timer} timeFrame={timeFrame}/>)

  return (
    <div className="font-['Rubik'] flex items-center justify-center h-screen">
      <div className='flex'>
        <UserContainer changeTimeFrame={changeTimeFrame}/>
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



import React from "react"
import IconWork from '../images/icon-work.svg';
import IconPlay from '../images/icon-play.svg';
import IconStudy from '../images/icon-study.svg';
import IconExercise from '../images/icon-exercise.svg';
import IconSocial from '../images/icon-social.svg';
import IconSelfCare from '../images/icon-self-care.svg';

export default function UserContainer(props) {
    
    
    
    const timeBeing = {
        "daily":"Yesterday",
        "weekly":"Last Week",
        "monthly": "Last Month"
    }

    const timerType = {
        "Work":{
            icon: IconWork, 
            color: "bg-lightRed"
        },
        "Play":{
            icon: IconPlay, 
            color: "bg-softBlue"
        },
        "Study":{
            icon: IconStudy, 
            color: "bg-red"
        },
        "Exercise":{
            icon: IconExercise, 
            color: "bg-limeGreen"
        },
        "Social":{
            icon: IconSocial, 
            color: "bg-violet"
        },
        "Self Care":{
            icon: IconSelfCare, 
            color: "bg-yellow"
        }
    }

    const currentHours = props.data.timeframes[props.timeFrame].current
    const previousHours = props.data.timeframes[props.timeFrame].previous
    
    const timerContainerClass = `${timerType[props.data.title].color} w-80 h-[17rem] rounded-3xl relative mt-6 ml-6 mr-6 mb-2`

    return (
        <div className={timerContainerClass}>
            <img src={timerType[props.data.title].icon}
                className="absolute right-5"
            />
            <div className="bg-darkBlue absolute bottom-0 w-full rounded-2xl h-[13rem] hover:bg-desaturatedBlue">
                <div className="text-white p-7">
                    <div className="flex justify-between items-center">
                        <p className="text-xl">{props.data.title}</p>
                        <p className="text-xl cursor-pointer">...</p>
                    </div>
                    <h3 className="text-6xl mt-8">{currentHours}hrs</h3>
                    <p className="mt-3 font-thin text-white">{timeBeing[props.timeFrame] || "Today"} - {previousHours}hrs</p>
                </div>
            </div>
        </div>
    )
}
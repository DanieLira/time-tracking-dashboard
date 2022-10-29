import React from "react"
import userImage from "../images/image-jeremy.png"

export default function UserContainer(props) {
    return (
        <div className="bg-darkBlue w-80 h-[36rem] rounded-3xl mt-6">
            <div className="bg-primaryBlue w-80 h-[24rem] rounded-3xl">
                <div className="flex flex-col pl-10 pt-10">
                    <img
                        className="w-24 border-4 border-white rounded-full mb-10"
                        src={userImage}
                    />
                    <p className="text-white font-thin pb-1">Report for</p>
                    <h2 className="text-white text-5xl pb-2">Jeremy</h2>
                    <h2 className="text-white text-5xl">Robson</h2>
                </div>
            </div>
            <ul className="m-10 cursor-pointer">
                <li className="text-white pb-3" onClick={() => props.changePeriod("daily")}>Daily</li>
                <li className="text-white pb-3" onClick={() => props.changePeriod("weekly")}>Weekly</li>
                <li className="text-white pb-3" onClick={() => props.changePeriod("monthly")}>Monthly</li>
            </ul>
        </div>
    )
}

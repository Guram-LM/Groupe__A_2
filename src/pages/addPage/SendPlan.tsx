import React, { useState, type ChangeEvent } from 'react'
import useSendPlan from '../../components/hook/useSendPlan'
import type { SendDataType } from './interfaceAddPage'
import { usePlanState } from '../../zushtand/PlanState'


interface SendPlanProps {
    setWechselnButt: (val: boolean) => void
}
const SendPlan:React.FC<SendPlanProps> = ({ setWechselnButt}) => {
    const {mutate} = useSendPlan("myplan")

    const {planState, clearPlan} = usePlanState()

    const [sendData, setSendData] = useState<SendDataType>()
    const [oh_of, set_on_of] = useState("")

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {

        const name = e.target.value
        set_on_of(name)

        if(planState.length < 1 && name.length < 1) return alert("სახელი და გეგმის ინფორმაცია არ არსებობს")
        setSendData({countries:planState, planName: name})
    }

    const sendPaln = () => {
        if(!sendData) return alert("არ არის გასაგზავნი ინფორმაცია")
        mutate(sendData)
        clearPlan()
    }
  return (
        <div className="flex my-10 flex-col gap-3.5">
            <input
                type="text"
                placeholder="Enter trip name..."
                value={oh_of}
                onChange={onChange}
                className="flex-1 px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className='flex gap-3.5'>
                <button
                onClick={sendPaln}
                disabled={!oh_of.trim()}
                className={`px-6 py-2 rounded-lg text-white font-medium transition-colors w-70
                ${oh_of.trim()
                    ? "bg-green-500 hover:bg-green-600 cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                >
                    Save
                </button>
                <button
                    onClick={() => setWechselnButt(false)}
                    className="px-6 py-2 rounded-lg border border-gray-400 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                    Cancel
                </button>

            </div>
            
        </div>
  )
}

export default SendPlan
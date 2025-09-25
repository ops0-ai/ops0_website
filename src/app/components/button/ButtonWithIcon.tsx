import React from 'react'
import DemoWithFounder from '../../../../public/svg/DemoWithFounder'

const ButtonWithIcon = ({btnText}) => {
  return (
    <div className="mt-10">
          <button className="flex items-center gap-3  text-[12px] p-1 pl-3 rounded-full border border-white/70 bg-transparent text-white font-bold hover:bg-white/10 transition uppercase">
            {btnText}
            <DemoWithFounder />
          </button>
        </div>
  )
}

export default ButtonWithIcon

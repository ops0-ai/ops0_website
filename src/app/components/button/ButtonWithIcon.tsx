import React from 'react'
import DemoWithFounder from '../../../../public/svg/DemoWithFounder'

const ButtonWithIcon = ({ btnText }: { btnText: string }) => {
  return (
    <div className="mt-10">
      <button
        className="flex items-center gap-3 text-[12px] p-1 pl-3 rounded-full border border-white/70 bg-transparent text-white font-bold hover:bg-white/10 transition uppercase"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.12) 21.88%, rgba(255, 255, 255, 0.12) 29.16%, rgba(4, 4, 6, 0.12) 51.01%, rgba(255, 255, 255, 0.12) 75%, rgba(255, 255, 255, 0.12) 82.82%, rgba(255, 255, 255, 0) 100%)'
        }}
      >
        {btnText}
        <DemoWithFounder />
      </button>
    </div>
  )
}

export default ButtonWithIcon
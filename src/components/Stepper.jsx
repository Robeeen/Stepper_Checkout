import React from 'react'
import '../index.css'

const Stepper = ({stepConfig=[]}) => {
  return (
    <div className='main'>
        {stepConfig.map((step, index) => {
            return (
            <div key={step.name} className='steps'>
                <div className='step_number'>{index + 1}</div>
                <div className='step_name'>{step.name}</div>
            </div>);
        })}
    </div>   
  )
}

export default Stepper;
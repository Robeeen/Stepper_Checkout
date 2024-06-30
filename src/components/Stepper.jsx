import React, { useState } from 'react'
import '../index.css'

const Stepper = ({stepConfig=[]}) => {
   const [currentStep, setCureentStep]  = useState(1);
   const [isComplete, setIsComplete] = useState(false);

   if(!stepConfig.length){
    return <></>
   }

   const handleNext = () => {
       setCureentStep((prevStep) => {
        if(prevStep === stepConfig.length){
            setIsComplete(true);
            return prevStep;
        }else{
            return prevStep + 1;
        }
       })
   }

   const ActiveComponent = stepConfig[currentStep - 1].Components;

  return (
    <>
    <div className='main'>
        {stepConfig.map((step, index) => {
            return (
            <div key={step.name} 
            className={`steps 
                ${currentStep > index + 1 || isComplete ? "complete" : ""}
                ${currentStep === index + 1 ? "active" : ""}
            `}
            >
                <div className='step_number'>
                    { currentStep > index + 1 || isComplete ? (<span>&#10003;</span>) : (index + 1) }
                </div>
                <div className='step_name'>
                    {step.name}
                </div>
            </div>);
        })}
    </div>    

    <div className='bottom details'>
        <ActiveComponent />
            {!isComplete && (
                <button className='btn' onClick={handleNext}>
                    {currentStep === stepConfig.length ? "Finish" : "Next"} 
                </button>
            )}
    </div>
    </> 
  );
}

export default Stepper;
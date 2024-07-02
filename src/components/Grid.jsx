import React, { useRef, useState } from 'react';

function Grid() {

const[status, setStatus] = useState(0);
  let progress = useRef(null);

  const handleClick = () => {
    if(status < 100){
    const newProgress = status + 25;
    setStatus(newProgress);
    progress.current.style.width = `${newProgress}%`;
    }

  }


  return (
    <div>      
        
        <h2>Progress Bar Design</h2>
        <div className='progress_bar'>
            <div ref={progress} className='progress-width'></div>
        </div>

        <button className='btn' onClick={handleClick}>Click</button>    
    
    </div>
  )
}

export default Grid;
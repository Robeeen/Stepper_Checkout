import React, { useRef, useState } from 'react';

function Grid() {

const [status, setStatus] = useState("25%");
  let progress = useRef();

  
  const handleClick = () => {
    status = progress.current.style.width;
    setStatus(progress.current.style.width = status + 25);

  }


  return (
    <div>      
        
        <h2>Progress Bar Design</h2>
        <div className='progress_bar'>
            <div ref={progress} style={{backgroundColor: 'green', height: '100%', width: 0}}></div>
        </div>

        <button className='btn' onClick={handleClick}>Click</button>    
    
    </div>
  )
}

export default Grid;
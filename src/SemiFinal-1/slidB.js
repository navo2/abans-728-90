import React from 'react';
import '../App.css';
import FlipClock from 'x-react-flipclock';
import Img from '../asset/Asset 4.png';

function SlideB() {
  return (
    <div className='FirstSemiFinal'>
      <div className='sideBySideContainer'>
        <div className='imageContainer'>
          <img className='img-zoom' src={Img} alt="Zooming Image" />
        </div>
        <div className='clockContainer'>
          <FlipClock
            type="countdown"  
            count_to="2023-11-23 24:00:00"
            units={[
              {
                sep: '',
                type: 'days',
                title: '',
              },
              {
                sep: ':',
                type: 'hours',
                title: '',
              },
              {
                sep: ':',
                type: 'minutes',
                title: '',
              },
              {
                sep: ':',
                type: 'seconds',
                title: '',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default SlideB;

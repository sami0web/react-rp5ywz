import React from 'react';
import React, { useState, useEffect } from 'react';
import './Carousel.css';
function Carousel() {

  const [tbimg, settbimg] = useState([]);


  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(response => response.json())
      .then(data => settbimg(data));
    }, []);



    console.log(tbimg)
 
}

export default Carousel;
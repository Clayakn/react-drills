import React, { Component } from 'react';

function Image (props)  {
    return (
      <div>
          <img src={props.myImage} alt="Unordered Collection of Cats"/>
      </div>
    );
  }

export default Image;
console.log('Look Mom!');
import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Blog),
    document.getElementById('mount')
  );
});
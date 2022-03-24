import React from 'react';
import ReactDom from 'react-dom';
import {Comp1, Comp2}  from './components/Comp1.js'


ReactDom.render(<Comp1 name="HI!!!" />, document.getElementById('div1') );
ReactDom.render(<Comp2 name="Салют! Реакт уже тут!" />, document.getElementById('div2') );

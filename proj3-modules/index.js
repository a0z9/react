import {GreetsA,GreetsB,SayGreets} from './Components/Greets1.js'
import React from 'react';
import * as G from './Components/Greets1.js'

import {GreetsA as A} from './Components/Greets1.js'

const log = console.log;
log(React);

log(GreetsA);
log(SayGreets());
log(G.SayGreets());
log(A);



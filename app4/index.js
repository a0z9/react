import {Greets1, Greets2} from './Greets.js'
import * as GreetsModule from './Greets.js'
import {Greets as G} from "./Greets.js";

var log = console.log

log(Greets1);
log(GreetsModule.Greets2);

const hello = new G("Салют","Андрей");
log(hello.sayGreets())



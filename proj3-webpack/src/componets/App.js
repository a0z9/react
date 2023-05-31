import React from "react";
import {Menu} from "./Menu";

export const randomColor = () =>
{
    const list = '0123456789abcdef';
    let color = '#';
    for(let i=0; i<6; i++) color += list[Math.floor(Math.random()*16)];
    return color;

};

export const Ctx = React.createContext();

export const App = () =>
{
    const [context, setState] = React.useState({color: "lightgreen", size: 24});
    return (
        <Ctx.Provider value={[context,setState]}>
            <Menu />
        </Ctx.Provider>
    )

};
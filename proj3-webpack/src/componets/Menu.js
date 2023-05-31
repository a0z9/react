import React from "react";
import {MenuBox} from "./MenuBox";
import {Ctx} from "./App";
export const Menu = () =>
{
    const [ctx] = React.useContext(Ctx);

    return (
        <div>
            <div style={{backgroundColor: ctx.color,width:75, height:30, borderRadius:12, margin: 5}} />
            <MenuBox />
        </div>
    )

};


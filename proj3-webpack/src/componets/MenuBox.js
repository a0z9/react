import React from "react";
// import ReactDOM from "react-dom";
import {Ctx,randomColor} from "./App";

export const MenuBox = () =>
{
    const clickHandler = (e) => {
        setState({color:ctx.color});

    };
    const ctxHandler = () =>{
        setCtx({...ctx,color:randomColor()});

    };

    // const [ctx] = React.useContext(Ctx);
    const [ctx, setCtx] = React.useContext(Ctx);
    const [data,setState] = React.useState({color:'lightgrey'});

    return (
        <div>
            <button onClick={clickHandler}>Press to use GLOBAL ctx </button>
            <br/>
            <button onClick={ctxHandler}>Press to change ctx </button>
            <div style={{backgroundColor: data.color,width:75, height:30, borderRadius:12, margin: 5}} />
        </div>
    );

};
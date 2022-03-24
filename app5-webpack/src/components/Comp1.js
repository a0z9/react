import React from 'react';

import '../../public/Comp.css'

export class Comp1 extends  React.Component
{
    render(){

      return <div>
          <h2> Component1 {this.props.name} </h2>
           </div>;

    };



}

export class Comp2 extends  React.Component
{
    render(){

        return <div>
            <h2> КОМПОНЕНТ 2 GREETS: {this.props.name} </h2>
        </div>;

    };

}


//export default Comp1;
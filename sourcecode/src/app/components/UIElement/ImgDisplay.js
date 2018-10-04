import React, { Component } from 'react';

export default class ImgDisplay extends Component{
  constructor(props){
    super(props);


  }

  render() {
    if (this.props.options)
       return (
         <div>
              <span className="bestValueImg">
               Best Value
              </span>
         </div>

       )
   else
        return null;


  }


}

import React, { Component } from 'react';
import cinemaWorld  from '../../../asset/img/cinemaworld.jpg';
import filmWorld from '../../../asset/img/filmworld.png';


export default class SourceImgDisplay extends Component{
  constructor(props){
    super(props);
  }

  render() {

    if (this.props.dataSource === "cinemaWorld") {
      return (
          <td style={{width: '100px', minWidth: '100px', backgroundColor: '#fff'}} >
              <img src={cinemaWorld} />
          </td>
      )
    }
    else
    {
        if (this.props.dataSource === "filmWorld") {
                return (
                <td style={{width: '100px', minWidth: '100px', backgroundColor: '#fff'}} >
                    <img src={filmWorld} />
                </td>
              )
            }
        else {
          return (
            <td style={{width: '100px', minWidth: '100px', backgroundColor: '#fff'}} >
                this.props.dataSource
            </td>
          )
        }
   }

 }//end render
}

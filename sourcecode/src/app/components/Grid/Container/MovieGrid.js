import React, { Component } from 'react';

import SortableTbl from 'react-sort-search-table';
import ImageLoader from 'react-imageloader';
import PropTypes from 'prop-types';
import {GetMovies} from '../../../action/GetMovies';
import ReactLoading from 'react-loading';
import cinemaWorld  from '../../../../asset/img/cinemaworld.jpg';
import filmWorld from '../../../../asset/img/filmworld.png';
import ImgDisplay from '../../UIElement/ImgDisplay';
import SourceImgDisplay from '../../UIElement/SourceImgDisplay';

function ProductTblImgpreloader() {
    return <div className="loading-div" style={{minHeight: "100px"}}/>;
}

const TblImageLoader = (props) => (

    <ImageLoader
        src={props.data}
        wrapper={React.createFactory('div')}
        preloader={ProductTblImgpreloader}>Poster Not Available
    </ImageLoader>);

TblImageLoader.propTypes = {
  data: PropTypes.string.isRequired,
};

const BaseMovieTblImageComponent = (props) =>
{

    return (
        <td style={{width: '100px', minWidth: '100px', backgroundColor: '#fff'}} >
            <a href={props.rowData.poster} target="_blank">
                <TblImageLoader data={props.rowData.poster}/>
            </a>
        </td>
    );
};

BaseMovieTblImageComponent.propTypes = {
    rowData: PropTypes.object,
    tdData: PropTypes.string,
};

const BaseDataSourceComponent = (props) =>
{
  return (
  <SourceImgDisplay dataSource={props.rowData.dataSource} />
  )

};

BaseDataSourceComponent.propTypes = {
    rowData: PropTypes.object,
    tdData: PropTypes.string,
};

const BasePriceComponent = (props) =>
{
  if (props.rowData.price =="")
    {
      return (
          <td></td>
      );
    }
  else {
    return (
        <td style={{width: '150px', minWidth: '150px', backgroundColor: '#fff'}} >

            $ {props.rowData.priceDecimal}
            <ImgDisplay options={props.rowData.bestValue}/>
        </td>
    );
  }
};

export default class MovieGrid extends Component{
  constructor(){
    super();

    this.state = {
      myData : [],
      isLoading: true
    }
  }
  async componentDidMount() {

    GetMovies()
        .then((result) => {
            if (result != null)
                this.setState({myData : result})
                //this.setState({myData : result.Movies})
            else
                this.setState({myData : null})

           this.setState({isLoading: false})
        });

  }

render() {
  var col = [
      "title",
      "year",
      "dataSource",
      "priceDecimal",
      "poster"

  ];
  var tHead = [
    "Title",
    "Year",
    "Data Source",
    "Price",
    "Poster"


  ];

  if (this.state.isLoading)
  {
   return (
      <div className="alignCenter">
           <ReactLoading type={'spinningBubbles'} color={'#333333'} height={150} width={150} />
           <div className="loadText">
                   Loading...
           </div>
      </div>


    )}

    else
    {


          return (
            this.state.myData==null ? (<div>service is not available, please try again later</div>)
              :

            (<div className="tableContainer">
              <SortableTbl tblData={this.state.myData}
              customTd={[
                        {custd: BaseMovieTblImageComponent, keyItem: "poster"},
                        {custd: BaseDataSourceComponent, keyItem: "dataSource"},
                        {custd: BasePriceComponent, keyItem: "priceDecimal"}


                        ]}
                  tHead={tHead}
                  dKey={col}
                  search={true}
                  paging={false}
              />
           </div>)

         )
      }

  }
};

MovieGrid.propTypes = {
};

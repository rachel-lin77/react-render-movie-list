import fetch from 'isomorphic-fetch';
import "idempotent-babel-polyfill";
import * as apiRoute from '../config/apiConfig';
import {GetResponseResult} from './GetResponseResult';

export function GetMovies(){
      var url = apiRoute.APIURL;
      //var ACCESS_TOKEN = apiRoute.ACCESS_TOKEN;
      //console.log("start fetch from API");
      return(
        fetch(url,{
            method: "GET",
            crossDomain:true,
            headers:  {
              //"x-access-token": ACCESS_TOKEN,
             //"cache-control": "no-cache"
            },


            })
            .then(function(response) {
                  //console.log("here in response:GetMovies");
                  return GetResponseResult(response,apiRoute.API_ACTION_GET);
            })

      )

}

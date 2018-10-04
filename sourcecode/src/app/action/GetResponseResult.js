
export function GetResponseResult(response, apiAction){
      //console.log('GetResponseResult');
      if (response.status !== 200){
          console.log('response:' + response.status);
          return null;
           }
      else
      {
        //console.log('get data successfully');
        return response.json();
      }

}

import * as axios from 'axios';

export const baseUri = "https://covid.mamed.care";

export const getPersonalData = async (uri) => {
	return await axios.get(baseUri+uri)
    .then( (response) => { 
      console.log(" =================",response.data);
      return response.data
    }) 
    .catch( (error) => {
      console.log(error);  
    }); 
 
}

export const login = async (obj) => {
	return await axios.post(baseUri+'/api_v1/connects.json', obj , { headers: { "Content-type": "application/json" } })
    .then( (response) => {
      console.log(" =================",response); 
      return response
    })
    .catch( (error) => {
      console.log(error);    
    }); 
}
export const onSaveActivity = async (id, obj, idpers) => {
  console.log('in sactiviter', baseUri+'/api_v1/diagnostiques/'+id+'.json')
  return await axios.post(baseUri+'/api_v1/diagnostiques/'+id+'.json', obj , { headers: { "Content-type": "application/json" } })
    .then( async (response) => {
      // let response = await getPersonalData(idpers);
      return response
    })
    .catch( (error) => {
      console.log(error);    
    }); 
}


//covid.mamed.care/api_v1/diagnostiques/2.json



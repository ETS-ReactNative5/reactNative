import * as axios from 'axios';

export const baseUri = "https://covid.mamed.care";
export const getPersonalData = async (uri) => {
	return await axios.get(baseUri+'/api_v1/apis/4/profiles.json')
    .then( (response) => {
      console.log(" =================",response.data);
      return response.data
    })
    .catch( (error) => {
      console.log(error);
    });

}





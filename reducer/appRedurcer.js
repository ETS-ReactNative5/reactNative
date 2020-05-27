

initialState = {
	showLocalisation: false,
	showCenter: false,
	showMesure: true,
	currentItem: "activite",
	data: null,
	casContact: null,
	id: 0,
	idMed: null,
	mess: []
}

function app(state = initialState, action) {

	console.log('in redurecer', action)
	let curentState = state;
  	switch (action.type) {
	  	case 'SHOW_LOCALISATION':
	  		curentState = {...curentState, showLocalisation: true, showCenter: false, showMesure: false}
	      	return curentState;
	    case 'SHOW_MESURE':
	  		curentState = {...curentState, showLocalisation: false, showCenter: false, showMesure: true}
	      	return curentState;
	    case 'SHOW_CENTER':
	  		curentState = {...curentState, showLocalisation: false, showCenter: true, showMesure: false}
	      	return curentState;
	    case 'SHOW_ELEMENT':
	  		curentState = {...curentState, currentItem: action.id}
	      	return curentState;
	    case 'SET_DATA_STATE':
	  		curentState = {...curentState, data: action.data}
	      	return curentState;
	    case 'SET_CAS_CONTACT':
	  		curentState = {...curentState, casContact: action.data}
	      	return curentState;
	    case 'SET_ID':
	  		curentState = {...curentState, id: action.id}
	      	return curentState;
	    case 'TO_SET_ID_MEDECIN':
	  		curentState = {...curentState, idMed: action.data, mess: action.mess}
	      	return curentState;
	    case 'ADD_DATA':
	    	let slice = state.data.user.diagnostiques;
	    	console.log('after op', slice.length)
	    	slice.push(action.data)
	    	console.log('before op', slice.length)
	  		curentState = {...curentState, 
	  			data: {...curentState.data, 
	  			user: {...curentState.data.user,
	  			diagnostiques: slice
	  			}
	  		  }
	  		}
	      	return curentState;
	  	default:
    		return curentState;
  }
}
export default app;
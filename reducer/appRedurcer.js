

initialState = {
	showLocalisation: false,
	showCenter: false,
	showMesure: true,
	currentItem: "activite",
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
	  	default:
    		return curentState;
  }
}
export default app;
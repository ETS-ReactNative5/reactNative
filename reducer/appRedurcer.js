

initialState = {
	showLocalisation: false,
	showCenter: false,
	showMesure: true,
}

function app(state = initialState, action) {

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
	  	default:
    		return curentState;
  }
}
export default app;
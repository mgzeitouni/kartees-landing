import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

if (process.env.VCAP_SERVICES){

	console.log('In index.js');
	var myvar= process.env.myVarName;
	console.log(myvar);

	console.log(process.env.VCAP_SERVICES);
}else{
	console.log('nope not found in index.js');
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

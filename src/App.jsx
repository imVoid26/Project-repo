import './App.css'
import TODOs from './Projects/TODOs/TODOs'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

import store from './Projects/TODOs/Redux/Store'
import {Provider} from 'react-redux'

function App() {
  

  return (
    <>
      <Provider store={store}>
        <TODOs></TODOs>
      </Provider>
        
      
    </>
  )
}

export default App

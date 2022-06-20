import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// based on the 'Example Usage'section on the dashboard, updated for React 18
import { asyncWithDVCProvider, useVariable} from '@devcycle/devcycle-react-sdk';

(async () => {
    const ENV_KEY = 'YOUR_KEY_HERE' // create a variable for the environment key to prevent issues with a typo
    const user = {
        user_id: 'user1',
        email: 'user@taplytics.com'
    }
    const DVCProvider = await asyncWithDVCProvider({ envKey: ENV_KEY, user: user  })
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <React.StrictMode>
            <DVCProvider>
                <App />
            </DVCProvider>
        </React.StrictMode>,
        document.getElementById('root')
    )
})()

const App = () => {
    const variableKey = 'first-feature'
    const defaultValue = false
    const featureVariable = useVariable(variableKey, defaultValue)

    return (
      <div class="wrapper">
        <div class="container">
        <div id="welcome">
          <h2> 
            <span>
              {featureVariable.value ? 'Variable on!' /* Your feature goes here! */ : 'Variable off' }
            </span> 
          </h2> 
        </div>
        </div>  
      </div> 
    )
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { useVariable } from '@devcycle/devcycle-react-sdk' // from the docs

// based on the example usage on the dashboard, but this is updated for React 18
import { asyncWithDVCProvider } from '@devcycle/devcycle-react-sdk';

(async () => {
    const ENV_KEY = 'client-8d9f7840-818a-4df4-a797-2c637e466b75' // create a variable for the environment key to
                                                                  // prevent issues with a typo
    const user = {
        user_id: 'bob',
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
    const variableKey = 'new-react-feature'
    const defaultValue = false
    const featureVariable = useVariable(variableKey, defaultValue)

    return (
      <div class="wrapper">
        <div class="container">
        <div id="welcome">
          <h2> 
            <span>{featureVariable.value ? 'Variable on!' : 'Variable off'}</span> 
          </h2>
        </div>
        </div>  
      </div>
    )
}

// import { asyncWithDVCProvider, useVariable } from '@devcycle/devcycle-react-sdk'

// (async () => {
//   const user = {
//       user_id: 'my_user_id'
//   }
//   const DVCProvider = await asyncDVCProvider({ envKey: 'client-8d9f7840-818a-4df4-a797-2c637e466b75', user })

//   render(
//       <DVCProvider>
//           <App />
//       </DVCProvider>
//   )
// })();

// const App = () => {
//     const variableKey = 'new-react-feature'
//     const defaultValue = false
//     const featureVariable = useVariable(variableKey, defaultValue)

//     return (
//         <div>
//           {featureVariable?.value ? <div>Variable on!</div> : <div>Variable off</div>}
//         </div>
//     )
// }

export default App;

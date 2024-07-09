import React from 'react'
import ReactDOM from 'react-dom/client'

// If you would like to see other code example patterns, change the import to
// the one you would like to see in action.
import App from "../js/observer/user-interactions/App.jsx";

import "normalize.css"
import "./styles.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import store, { persistor } from './redux/store'
import App from './components/app/App'
import theme from './constants/theme'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <App />
            <ToastContainer />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

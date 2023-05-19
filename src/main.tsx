import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const appData = {
  name: 'Counter',
  even: 'Even',
  odd: 'Odd',
  links: [
    {
      'link': 'https://google.com', 
      'text': 'Google'
    },
    {
      'link': 'https://yandex.ru', 
      'text': 'Yandex'
    },
    {
      'link': 'https://yahoo.com', 
      'text': 'Yahoo'
    }
  ]
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

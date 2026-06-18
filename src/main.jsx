
import { createRoot } from 'react-dom/client'
import './index.css'

import Books from './components/Books.jsx'
import BookByTitle from './components/BookByTitle.jsx'
import BookByAuthor from './components/BookByAuthor.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <Books/>
  <BookByTitle title={"Shoe Dog"}/>
  <BookByAuthor author={"Phil Knight"}/>
  </>
  
)

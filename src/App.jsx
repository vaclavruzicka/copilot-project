//App.jsx
//Import functions from DateGallery.jsx and display them dynamically with a optino to find a certain date.
//Remove the original code from app.jsx

import './App.css'
import DateGallery from './components/DateGallery'

function App() {
  return (
    <div>
      <h1>Stock Data Viewer</h1>
      <DateGallery />
    </div>
  )
}

export default App

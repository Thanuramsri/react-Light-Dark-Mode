// Write your code here

import {useState} from 'react'

const LightDarkMode = () => {
  const [isDark, setIsDark] = useState(true)

  const toggleMode = () => {
    setIsDark(prev => !prev)
  }

  return (
    <div className={isDark ? 'dark-container' : 'light-container'}>
      <div className="card">
        <h1>Click To Change Mode</h1>

        <button onClick={toggleMode}>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  )
}

export default LightDarkMode

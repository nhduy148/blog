import React from 'react'
import Sidebar from './Sidebar'

const Main = ({ componentInside, componentOutside, haveSidebar }) => {
  return (
    <main id="main">
      {
        haveSidebar
        ? 
          <>
            <div className="l-container">
              <div className="l-content">
                {componentInside}
              </div>
              <div className="l-sidebar">
                <Sidebar />
              </div>
            </div>
            <div className="l-outside">
              {componentOutside}
            </div>
          </>
        : 
          <div className="l-outside">
            {componentOutside}
          </div>
      }
    </main>
  )
}

export default Main

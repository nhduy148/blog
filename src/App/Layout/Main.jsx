import React from 'react'
import Sidebar from './Sidebar'

const Main = ({ componentInside, componentOutsideTop, componentOutsideBottom, haveSidebar }) => {
  return (
    <main id="main">
      <div className="l-outside">
        {componentOutsideTop}
      </div>
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
              {componentOutsideBottom}
            </div>
          </>
        : 
          <div className="l-outside">
            {componentOutsideBottom}
          </div>
      }
    </main>
  )
}

export default Main

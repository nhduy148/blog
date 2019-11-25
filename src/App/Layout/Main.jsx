import React from 'react'
import Sidebar from './Sidebar'

const Main = ({ componentInside, componentOutside, haveSidebar }) => {
  return (
    <main>
      <div className="l-container">
        {
          haveSidebar
          ? <>
              <div className="l-content">
                {componentInside}
              </div>
              <div className="l-sidebar">
                <Sidebar />
              </div>
              {componentOutside}
            </>
          : componentOutside
        }
      </div>
    </main>
  )
}

export default Main

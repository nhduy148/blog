import React from 'react';
import loadingImage from '../../Assets/image/common/loading.gif'

export default function Loading() {
  return (
    <div className="pre-loading">
      <img src={loadingImage} alt=""/>
    </div>
  )
}

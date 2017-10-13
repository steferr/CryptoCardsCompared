import React from 'react'
import Filters from './Filters'
import ScrollContainer from '../containers/ScrollContainer'
import HiddenColumns from '../containers/HiddenColumns'

const Home = (props) => {
  return(
      <div>
      <Filters />
      <ScrollContainer />
      <HiddenColumns />
    </div>
  )
}

export default Home

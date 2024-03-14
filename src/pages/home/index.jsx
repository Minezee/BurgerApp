import React from 'react'
import HomeBanner from './HomeBanner'
import HomeBtnList from './HomeBtnList'

const Home = () => {
  return (
    <div className='flex flex-col h-screen max-h-max'>
      <HomeBanner />
      <HomeBtnList />
    </div>
  )
}

export default Home
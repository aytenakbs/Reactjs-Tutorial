import React from 'react'
import Detail from '../component/Detail'

function ProfilePage() {
  let points=[3,6,9,12,15,18]
  return <>
  <h1>Details</h1>
  <Detail name="Ayten Akbaş" mail="ayten@gmail.com" phone="5554443322" points={points}/>
  </>
}

export default ProfilePage
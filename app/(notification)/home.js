import React from 'react'
import { Redirect } from 'expo-router'

const homeNotification = () => {
  return (
    <Redirect href={"(home)/home"}/>
  )
}

export default homeNotification
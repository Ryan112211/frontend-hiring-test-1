import React from 'react'
import { wrapper } from '@_redux'

import cookie from '@_utils/cookie'

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  cookie.remove(context, 'token')
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  }
})

export default function Page() {
  return (
    <h1>Signing out...</h1>
  )
}

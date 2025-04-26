"use client"

import React from 'react'

type Props = {}

import { useSession } from 'next-auth/react'

const page = () => {

    const { data: session } = useSession()

    if(!session || !session.user) return <p>Voçê precisa está autentificado</p>

  return (
    <div>page</div>
  )
}

export default page
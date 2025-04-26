import { auth } from 'auth'
import React from 'react'

type Props = {}

const page = async (props: Props) => {

    const session = await auth()

    if(!session || !session.user) {
        return <p>voçe so pode usar essa rota quando estiver logado</p>
    }

  return (
    <div>page</div>
  )
}

export default page
import Navbar from '@/components/Navbar'
import React, { ReactNode } from 'react'

const RootPageLayout = ({children}:{children: ReactNode}) => {
  return (
    <main>
       

       {children}

       {/* footer */}
    </main>
  )
}

export default RootPageLayout

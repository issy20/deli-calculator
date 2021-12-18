import React, { ReactNode, VFC } from 'react'

interface Props {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-mono">
      {children}
    </div>
  )
}

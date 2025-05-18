import React from 'react'

export function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="list-disc pl-6 space-y-2">
      {children}
    </li>
  )
}

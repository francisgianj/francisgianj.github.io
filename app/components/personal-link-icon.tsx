import Link from 'next/link'
import React from 'react'

export function PersonalLinkIcon({ label, href, icon }: { label: string, href: string, icon: React.ReactNode }) {
  return (
    <Link href={href} aria-label={label}>
      {icon}
    </Link>
  )
}

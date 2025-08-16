'use client'

import Link from 'next/link'
import { Fragment } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { ShimmerButton } from '@/components/app/shimmer-button'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export function NavItems() {
  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Segmentos', href: '#segments' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
  ]

  return (
    <>
      {navItems.map(item => (
        <Fragment key={item.href}>
          {/* Mobile: botão com gradiente */}
          <Button
            variant="outline"
            className="w-full bg-gradient-to-r from-sky-200 to-emerald-50 transition-colors duration-500 hover:from-white hover:to-white hover:font-bold md:hidden"
            asChild
          >
            <Link href={item.href} className="w-full">
              {item.label}
            </Link>
          </Button>

          {/* Desktop: só texto com hover branco */}
          <Link
            href={item.href}
            className="hidden items-center rounded-xl px-4 py-2 font-semibold text-slate-700 transition-all duration-500 hover:bg-white/80 hover:text-slate-900 hover:shadow-sm md:inline-flex"
          >
            {item.label}
          </Link>
        </Fragment>
      ))}

      <Separator className="my-2 bg-muted/50 md:hidden" />

      <ShimmerButton icon={<FaWhatsapp />}>Solicitar Orçamento</ShimmerButton>
    </>
  )
}

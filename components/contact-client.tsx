'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ContactModal } from './contact-modal'

export function ContactClient() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button 
        className="w-full py-6 text-lg" 
        size="lg"
        onClick={() => setOpen(true)}
      >
        Liên hệ
      </Button>
      <ContactModal open={open} onOpenChange={setOpen} />
    </>
  )
}

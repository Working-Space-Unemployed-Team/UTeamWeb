'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Facebook, MessageCircle, Mail, ExternalLink } from 'lucide-react'

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const contactChannels = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/unemployedteam',
    description: 'Message us on Facebook'
  },
  {
    name: 'Zalo',
    icon: MessageCircle,
    url: 'https://zalo.me/unemployedteam',
    description: 'Chat with us on Zalo'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:support@unemployedteam.com',
    description: 'Send us an email'
  }
]

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Liên hệ với chúng tôi</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          {contactChannels.map((channel) => {
            const Icon = channel.icon
            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-card border border-muted/20 hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{channel.name}</p>
                  <p className="text-xs text-muted-foreground">{channel.description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            )
          })}
        </div>
      </DialogContent>
    </Dialog>
  )
}

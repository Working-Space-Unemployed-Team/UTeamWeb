import { Facebook, MessageCircle, Mail } from 'lucide-react'

export interface ContactChannel {
  id: string
  name: string
  icon: React.ReactNode
  url: string
  description: string
}

export const contactChannels: ContactChannel[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'Facebook',
    url: 'https://www.facebook.com/unemployedteam',
    description: 'Nhắn tin qua Facebook để được phản hồi nhanh chóng'
  },
  {
    id: 'zalo',
    name: 'Zalo',
    icon: 'MessageCircle',
    url: 'https://zalo.me/unemployedteam',
    description: 'Chat với chúng tôi qua Zalo để được hỗ trợ tức thì'
  },
  {
    id: 'email',
    name: 'Email',
    icon: 'Mail',
    url: 'mailto:support@unemployedteam.com',
    description: 'Gửi email cho chúng tôi nếu bạn có yêu cầu chi tiết'
  }
]

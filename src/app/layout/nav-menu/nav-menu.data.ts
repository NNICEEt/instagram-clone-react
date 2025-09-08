import {
  Clapperboard,
  Compass,
  Heart,
  Home,
  type LucideIcon,
  MessageCircle,
  Search,
  SquarePlus,
  User,
} from 'lucide-react'

export type NavItem = {
  value: string
  path: string
  label: string
  icon: LucideIcon
}

export const desktopItems: NavItem[] = [
  { value: 'home', path: '/', label: 'Home', icon: Home },
  { value: 'search', path: '/search', label: 'Search', icon: Search },
  { value: 'explore', path: '/explore', label: 'Explore', icon: Compass },
  { value: 'reels', path: '/reels', label: 'Reels', icon: Clapperboard },
  {
    value: 'messages',
    path: '/messages',
    label: 'Messages',
    icon: MessageCircle,
  },
  {
    value: 'notifications',
    path: '/notifications',
    label: 'Notifications',
    icon: Heart,
  },
  { value: 'create', path: '/create', label: 'Create', icon: SquarePlus },
  { value: 'profile', path: '/profile', label: 'Profile', icon: User },
]

export const mobileItems: NavItem[] = [
  { value: 'home', path: '/', label: 'Home', icon: Home },
  { value: 'explore', path: '/explore', label: 'Explore', icon: Compass },
  { value: 'reels', path: '/reels', label: 'Reels', icon: Clapperboard },
  { value: 'create', path: '/create', label: 'Create', icon: SquarePlus },
  {
    value: 'messages',
    path: '/messages',
    label: 'Messages',
    icon: MessageCircle,
  },
  { value: 'profile', path: '/profile', label: 'Profile', icon: User },
]

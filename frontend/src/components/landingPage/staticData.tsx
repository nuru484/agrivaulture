import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CloudSun,
  BookOpen,
  MessageSquare,
  FileText,
  TrendingUp,
} from 'lucide-react';

export const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Features', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Knowledge Base', href: '/knowledge' },
  { name: 'Farming Guides', href: '/guides' },
  { name: 'Community', href: '/community' },
  { name: 'Events', href: '/events' },
];

export const legal = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Data Protection', href: '/data-protection' },
  { name: 'Cookies', href: '/cookies' },
];

export const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
  { icon: <Youtube className="h-5 w-5" />, href: '#', label: 'YouTube' },
];

export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const testimonials = [
  {
    quote:
      "This system has completely changed how I farm. The weather alerts helped me avoid crop losses during unexpected rains, and the market price information ensures I get fair prices for my produce. It's like having an agricultural expert in my pocket!",
    name: 'Kwame Adu',
    role: 'Cassava Farmer, Eastern Region',
    avatar: '/placeholder.svg?height=64&width=64&text=KA',
  },
  {
    quote:
      "As a woman farmer in the Northern Region, I've always struggled with access to information. This platform has bridged that gap. The farming tips are practical and the expert advice has helped me increase my yields by 30% this season.",
    name: 'Abena Mensah',
    role: 'Rice Farmer, Northern Region',
    avatar: '/placeholder.svg?height=64&width=64&text=AM',
  },
  {
    quote:
      'The market price feature alone is worth it! Before, middlemen would take advantage of my lack of information. Now I know exactly what my cocoa is worth and can negotiate better prices. My income has increased significantly.',
    name: 'Kofi Owusu',
    role: 'Cocoa Farmer, Western Region',
    avatar: '/placeholder.svg?height=64&width=64&text=KO',
  },
  {
    quote:
      'The ability to communicate with agricultural experts has been invaluable. When my crops showed signs of disease, I received advice within hours and was able to prevent it from spreading. This platform is truly empowering farmers.',
    name: 'Ama Darko',
    role: 'Vegetable Farmer, Ashanti Region',
    avatar: '/placeholder.svg?height=64&width=64&text=AD',
  },
];

export const features = [
  {
    icon: <CloudSun className="w-6 h-6" />,
    title: 'Real-time Weather Forecasts',
    description:
      'Get accurate, localized weather predictions to plan your farming activities effectively.',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Local Market Prices',
    description:
      'Access up-to-date market prices for your crops to make informed selling decisions.',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: 'Farming Tips',
    description:
      'Region-specific farming advice and best practices customized for Ghanaian agriculture.',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Farmer-to-Expert Communication',
    description:
      'Connect directly with agricultural experts to get answers to your questions.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Simple Record Keeping',
    description:
      'Track your farming activities, expenses, and income with our easy-to-use tools.',
  },
];

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { quickLinks, resources, legal, socialLinks } from './staticData';

export default function Footer() {
  return (
    <footer className="w-full bg-muted/50 border-t" id="contact">
      <div className="container justify-content-center mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 ">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">
                Agriculture Information System
              </h3>
              <p className="text-muted-foreground">
                Empowering Ghanaian Farmers with Technology
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>123 Farming Avenue, Tamale, Ghana</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+233 (0) 546 488 115</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@agrisystem.gh</span>
              </div>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  asChild
                >
                  <Link href={social.href} aria-label={social.label}>
                    {social.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Resources</h4>
            <nav className="flex flex-col space-y-2">
              {resources.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest agricultural news and
              updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="max-w-[220px]"
              />
              <Button size="sm" className="shrink-0">
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            <div className="pt-2">
              <h4 className="text-base font-semibold mb-2">Legal</h4>
              <nav className="flex flex-col space-y-2">
                {legal.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Agriculture Information System.
            All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Proudly Made in Ghana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

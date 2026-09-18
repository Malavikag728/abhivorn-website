import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Globe, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#05657f] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-10">
        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr_1fr]">
          {/* Company */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo-footer.png"
                alt="Abhivorn Technologies"
                width={110}
                height={35}
                className="h-auto w-[145px]"
              />
            </Link>

            <p className="mt-5 max-w-[260px] text-sm leading-relaxed text-white/80">
              Enterprise-grade HR &amp; healthcare solutions for modern
              businesses. Building the future of enterprise software.
            </p>

            <div className="mt-4 flex gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#"
                aria-label="Website"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:bg-white/20"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-base font-bold">Products</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                <Link href="/products/vorn-hr" className="hover:text-white">
                  VORN HR
                </Link>
              </li>

              <li>
                <Link href="/products/vorqard" className="hover:text-white">
                  VorQard
                </Link>
              </li>

              <li>
                <Link href="/services#custom" className="hover:text-white">
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-base font-bold">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-white/80">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/projects" className="hover:text-white">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold">Contact</h3>

            <ul className="mt-5 space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                hello@abhivorn.com
              </li>

              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                +91 9966629766
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  Cyber Towers – HITEC City,
                  <br />
                  Hyderabad
                  <br />
                  Telangana, India
                </span>
              </li>
            </ul>
          </div>

          {/* VorQard */}
          <div>
            <h3 className="text-base font-bold">VorQard (Healthcare)</h3>

            <div className="mt-5 space-y-3 text-sm text-white/80">
              <p>support@vorqard.com</p>
              <p>www.vorqard.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-5">
          <div className="flex flex-col justify-between gap-3 text-[8px] text-white/70 sm:flex-row">
            <p>
              © 2025 Abhivorn Technologies Pvt Ltd. All rights reserved.
            </p>

            <div className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>

              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
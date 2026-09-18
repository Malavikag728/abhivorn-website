"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Button from "@/components/ui/Button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5edf2] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[60px] max-w-[1644px] items-center justify-between px-5 sm:px-8 lg:h-[112px] lg:w-[calc(100%-48px)] lg:px-0">
        {/* Logo */}
        <Link
          href="/"
          className="flex h-9 w-[132px] shrink-0 items-center overflow-hidden sm:h-10 sm:w-[145px] lg:h-[50px] lg:w-[155px]"
        >
          <Image
            src="/images/logo-navbar.png"
            alt="Abhivorn Technologies"
            width={350}
            height={109}
            className="h-auto w-full object-contain lg:translate-y-[2px]"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 lg:flex">
          <Link
            href="/about"
            className="text-lg font-medium text-[#3d5264] transition hover:text-[#08afe8]"
          >
            About
          </Link>

          <div
            className="relative"
            onMouseEnter={() => {
              setServicesOpen(true);
              setProductsOpen(false);
            }}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className="text-lg font-medium text-[#3d5264] transition hover:text-[#08afe8]"
              >
                Services
              </Link>
              <button
                type="button"
                aria-label="Open Services menu"
                aria-expanded={servicesOpen}
                onClick={() => {
                  setServicesOpen((value) => !value);
                  setProductsOpen(false);
                }}
                className="text-[#3d5264] transition hover:text-[#08afe8]"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-xl border border-[#e5edf2] bg-white p-2 shadow-xl">
                <Link href="/services#products" className="block rounded-lg px-3 py-2 text-sm text-[#30495c] hover:bg-[#e9f9ff] hover:text-[#08afe8]">
                  SaaS Products
                </Link>
                <Link href="/services#custom" className="block rounded-lg px-3 py-2 text-sm text-[#30495c] hover:bg-[#e9f9ff] hover:text-[#08afe8]">
                  Custom Development
                </Link>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => {
              setProductsOpen(true);
              setServicesOpen(false);
            }}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/products"
                className="text-lg font-medium text-[#3d5264] transition hover:text-[#08afe8]"
              >
                Products
              </Link>
              <button
                type="button"
                aria-label="Open Products menu"
                aria-expanded={productsOpen}
                onClick={() => {
                  setProductsOpen((value) => !value);
                  setServicesOpen(false);
                }}
                className="text-[#3d5264] transition hover:text-[#08afe8]"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 rounded-xl border border-[#e5edf2] bg-white p-2 shadow-xl">
                <Link href="/products/vorn-hr" className="block rounded-lg px-3 py-2 text-sm text-[#30495c] hover:bg-[#e9f9ff] hover:text-[#08afe8]">
                  VORN HR
                </Link>
                <Link href="/products/vorqard" className="block rounded-lg px-3 py-2 text-sm text-[#30495c] hover:bg-[#e9f9ff] hover:text-[#08afe8]">
                  VorQard
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/projects"
            className="text-lg font-medium text-[#3d5264] transition hover:text-[#08afe8]"
          >
            Projects
          </Link>

          <Link
            href="/careers"
            className="text-lg font-medium text-[#3d5264] transition hover:text-[#08afe8]"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            className="text-lg font-medium text-[#3d5264] transition hover:text-[#08afe8]"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            href="/contact"
            className="h-16 min-w-[223px] rounded-2xl px-11 text-xl shadow-lg shadow-cyan-500/20"
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-md text-[#17324a] lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-[#e5edf2] bg-white px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#30495c]"
            >
              About
            </Link>

            <div className="border-y border-[#e5edf2] py-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#30495c]"
                >
                  Services
                </Link>
                <button
                  type="button"
                  aria-label="Open Services menu"
                  aria-expanded={servicesOpen}
                  onClick={() => {
                    setServicesOpen((value) => !value);
                    setProductsOpen(false);
                  }}
                  className="text-[#30495c]"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {servicesOpen && (
                <div className="mt-3 flex flex-col gap-3 pl-3">
                  <Link href="/services#products" onClick={() => setMobileOpen(false)} className="text-sm text-[#30495c]">
                    SaaS Products
                  </Link>
                  <Link href="/services#custom" onClick={() => setMobileOpen(false)} className="text-sm text-[#30495c]">
                    Custom Development
                  </Link>
                </div>
              )}
            </div>

            <div className="border-y border-[#e5edf2] py-3">
              <div className="flex items-center justify-between">
                <Link
                  href="/products"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#30495c]"
                >
                  Products
                </Link>
                <button
                  type="button"
                  aria-label="Open Products menu"
                  aria-expanded={productsOpen}
                  onClick={() => {
                    setProductsOpen((value) => !value);
                    setServicesOpen(false);
                  }}
                  className="text-[#30495c]"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
                </button>
              </div>
              {productsOpen && (
                <div className="mt-3 flex flex-col gap-3 pl-3">
                  <Link href="/products/vorn-hr" onClick={() => setMobileOpen(false)} className="text-sm text-[#30495c]">VORN HR</Link>
                  <Link href="/products/vorqard" onClick={() => setMobileOpen(false)} className="text-sm text-[#30495c]">VorQard</Link>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#30495c]"
            >
              Projects
            </Link>

            <Link
              href="/careers"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#30495c]"
            >
              Careers
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm text-[#30495c]"
            >
              Contact
            </Link>

            <Button
              href="/contact"
              className="mt-1 w-full"
            >
              Book a Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
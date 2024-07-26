"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { i18n, type Locale } from "@/../i18n.config";
import { Globe } from "@phosphor-icons/react";

interface LocaleSwitcherProps {
  lang: 'en' | 'es' | 'pt'
}

export default function LocaleSwitcher({lang}: LocaleSwitcherProps) {
  const pathName = usePathname();

  function switchLang() {
    const index = i18n.locales.indexOf(lang);
    const segments = pathName.split("/")
    if (index !== -1) {
      const nextIndex = (index + 1) % i18n.locales.length;
      const nextLang = i18n.locales[nextIndex];
      segments[1] = nextLang
      return segments.join('/')
    } else {
      return "/";
    }
  }

  return (
    <Link className="absolute flex items-center text-lg top-5 right-4 md:right-8 lg:right-[20rem]" href={switchLang()}>
      <Globe size={28} /> | {lang}
    </Link>
  );
}
"use client";

import { usePathname } from 'next/navigation';
import HeroSection from "./utils/heroSection";

export default function Home() {

  const pathname = usePathname();
  
  // Definindo o conteúdo com base na página atual
  let dynamicContent;
  if (pathname === '/') {
    dynamicContent = <HeroSection/>;
  } else if (pathname === '/acervo') {
    dynamicContent = 'Você está na página acervo';
  } else if (pathname === '/login') {
    dynamicContent = 'Você está na página de Contato';
  } else {
    dynamicContent = 'Página não encontrada';
  }

  return (
    <>
      {dynamicContent}
    </>
  );
}

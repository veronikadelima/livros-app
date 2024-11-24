"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const pathname = usePathname(); // Obtém a rota atual

  // Se não estiver na página inicial, não renderiza nada
  if (pathname !== "/") return null;

  useEffect(() => {
    // Carrega a imagem
    const img = new window.Image();
    img.src = "/images/livros.jpeg";
    img.onload = () => setImageLoaded(true);
  }, []); 

  return (
    <main>
      {imageLoaded ? (
        <img
          src="/images/livros.jpeg"
          alt="Imagem da Página Inicial"
          className="area-image"
        />
      ) : (
        <p>Carregando imagem...</p> // Exibe texto enquanto a imagem carrega
      )}

      <h3 style={{ position: "relative", textAlign: "center"}}>Ler é o caminho do saber, ingresse nessa jornada.</h3>
    </main>

  );
}

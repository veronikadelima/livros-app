"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();

  const handleLinkClick = (path: string) => {
    setActiveLink(path);
    router.push(path); // Navegação sem erros
    router.refresh(); // Força o refresh da página
  };

  return (
    <ul>
      <li>
        <Link
          href="/"
          className={activeLink === "/" ? "actived" : ""}
          onClick={(e) => {
            e.preventDefault(); // Previne a navegação automática do Link
            handleLinkClick("/");
          }}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/acervo"
          className={activeLink === "/acervo" ? "actived" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("/acervo");
          }}
        >
          Acervo
        </Link>
      </li>
      <li>
        <Link
          href="/login"
          className={activeLink === "/login" ? "actived" : ""}
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick("/login");
          }}
        >
          Login
        </Link>
      </li>
    </ul>
  );
}
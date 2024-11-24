import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./assets/styles/layout.css";
import "./assets/styles/inicial.css";
import "./assets/styles/acervo.css";
import "./assets/styles/login-register.css";

import Navigation from "./utils/menuClick";

export const metadata: Metadata = {
  title: "Livro-Next",
  description: "Programa de Gerenciamento de Livros em Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <div className="box-area">
          <header>
            <nav>
              <h2><a href="/">LIVRO-NEXT</a></h2>
              <div className="menu">
                <Navigation/>
              </div>
            </nav>
          </header>
            {children}
          <footer>
            <p>© 2024 - Verônica de Lima</p>
          </footer>  
        </div>        
      </body>
    </html>
  );
}

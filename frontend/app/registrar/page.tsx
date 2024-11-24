import Link from "next/link";
import Button from "../components/Button.components";

export default function Registrar () {
  return (
    <>
      <main>
        <div className="area-form">
          <h5 className="title-form">CADASTRAR</h5>
          <form className="form-logar">
            <div className="input-box">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" required/>
            </div>
            <div className="input-box">
              <label htmlFor="password">Senha</label>
              <input type="password" name="passwor" id="password" required/>
            </div>
            <div className="input-box">
              <label htmlFor="confirm_password">Confirme a senha</label>
              <input type="password" name="passwor" id="confirm_password" required/>
            </div>
            <Button backgroundColor="#2EB8AC" label="Cadastrar"/>
            <div>Tem cadastro? <Link className="link-form" href="/login">Faça o Login!</Link></div>
          </form>
        </div>
      </main>      
    </>
  );
}


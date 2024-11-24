import Link from "next/link";
import Button from "../components/Button.components";

export default function Login () {
  return (
    <>
      <main>
        <div className="area-form">
          <h5 className="title-form">LOGIN</h5>
          <form className="form-logar">
            <div className="input-box">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email"/>
            </div>
            <div className="input-box">
              <label htmlFor="password">Senha</label>
              <input type="password" name="passwor" id="password"/>
            </div>
            <Button backgroundColor="#2EB8AC" label="Acessar"/>
            <div>Não é cadastrado? <Link className="link-form" href="/registrar">Cadastre-se!</Link></div>
          </form>
        </div>
      </main>      
    </>
  );
}
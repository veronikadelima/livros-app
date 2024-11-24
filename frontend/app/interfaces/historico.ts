// Interface do tipo historico
export interface historico extends Document {
  _id: string;
  nome: string;
  email: string;
  password: string;
  nivel_acesso: string;
}
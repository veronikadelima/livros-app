// Interface do tipo Usuario
export interface Usuario extends Document {
  _id: string;
  nome: string;
  email: string;
  password: string;
  nivel_acesso: string;
}
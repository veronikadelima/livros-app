import "./button.style.css";

type ButtonProps = {
  label: string; // Texto do botão
  backgroundColor: string; // Cor de fundo (obrigatória)
  borderColor?: string; // Cor da borda (opcional)
  color?: string; // Cor do texto (opcional, default: branco)
  icon?: JSX.Element; // Ícone opcional
  onClick?: () => void; // Ação ao clicar
  disabled?: boolean; // Botão desabilitado
};

export default function Button({
  label,
  backgroundColor,
  borderColor,
  color = "white", // Se não passar a cor, será branco
  icon,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor,
        borderColor: borderColor || backgroundColor,
        color,
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      className="button"
    >
      {icon && <span className="icon">{icon}</span>}
      {label}
    </button>
  );
}
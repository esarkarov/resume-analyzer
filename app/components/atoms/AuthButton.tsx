interface AuthButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
}

const AuthButton = ({
  onClick,
  children,
  isLoading = false,
}: AuthButtonProps) => (
  <button
    className={`auth-button ${isLoading ? "animate-pulse" : ""}`}
    onClick={onClick}
    disabled={isLoading}
  >
    <p>{children}</p>
  </button>
);

export default AuthButton;

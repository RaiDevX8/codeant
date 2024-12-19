
// components/AuthButton.tsx
interface AuthButtonProps {
  provider: string;
  icon: string;
  onClick: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({ provider, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center py-3 border rounded-lg hover:bg-gray-100 transition"
    >
      <img src={icon} alt={provider} className="w-5 h-5 mr-2" />
      Sign in with {provider}
    </button>
  );
};

export default AuthButton;

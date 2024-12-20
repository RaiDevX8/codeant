import { Link } from "react-router-dom";

interface AuthButtonProps {
  provider: string;
  icon: string;
  onClick?: () => void; 
}

const AuthButton: React.FC<AuthButtonProps> = ({ provider, icon, onClick }) => {
  return (
    <Link to="/repositories">
      <button
        className="w-full mt-2 flex items-center justify-center py-3 border border-gray-300 shadow rounded-lg hover:bg-gray-100 transition"
        onClick={onClick} 
      >
        <img src={icon} alt={`${provider} icon`} className="w-5 h-5 mr-2" />
        Sign in with {provider}
      </button>
    </Link>
  );
};

export default AuthButton;

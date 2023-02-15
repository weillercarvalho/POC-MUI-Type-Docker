import { useNavigate } from "react-router-dom";

export default function PrivatePage({ children }: JSX.Element | any): any{
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem(`weather`) as any);
  if (auth) {
    return <>{children}</>;
  } else {
    alert(`O usuario não está logado, acesso não autorizado.`);
    navigate(`/`);
  }
}

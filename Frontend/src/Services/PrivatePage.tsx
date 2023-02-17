export default function PrivatePage({ children }: JSX.Element | any): any {
  const auth = JSON.parse(localStorage.getItem(`weather`) as any);
  if (auth) {
    return <>{children}</>;
  } else {
    window.location.replace("http://localhost:5173/")
  }
}

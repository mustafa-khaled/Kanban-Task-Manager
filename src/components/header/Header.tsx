import ToggleTheme from "./ToggleTheme";
import logoImage from "/public/logo.png";

export default function Header() {
  return (
    <div className="h-[50px] flex items-center bg-secondary">
      <div className="container flex items-center justify-between mx-auto px-[10px]">
        <div>
          <img src={logoImage} alt="logo" />
        </div>
        <ToggleTheme />
      </div>
    </div>
  );
}

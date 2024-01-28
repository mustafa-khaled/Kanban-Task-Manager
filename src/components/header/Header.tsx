import ToggleTheme from "./ToggleTheme";

export default function Header() {
  return (
    <div className="h-[50px] flex items-center bg-secondary">
      <div className="container flex items-center justify-between mx-auto px-[10px]">
        <div>
          <h2 className="font-bold text-xl">Kanban</h2>
        </div>
        <ToggleTheme />
      </div>
    </div>
  );
}

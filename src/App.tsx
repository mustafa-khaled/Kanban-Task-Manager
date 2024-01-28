import Header from "./components/header/Header";
import KanbanBoard from "./components/KanbanBoard";

export default function App() {
  return (
    <div className="bg-primary text-textColor">
      <Header />
      <KanbanBoard />
    </div>
  );
}

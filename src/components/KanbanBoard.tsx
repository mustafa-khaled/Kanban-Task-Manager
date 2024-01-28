import { useState } from "react";

function KanbanBoard() {
  const [columns, setColumns] = useState([]);

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <button
        onClick={() => {
          // createNewColumn();
        }}
        className=" h-[60px]w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-secondary border-2 
        border-columnBackgroundColor p-4 hover:ring-2 flex gap-2">
        Add Column
      </button>
    </div>
  );
}
export default KanbanBoard;

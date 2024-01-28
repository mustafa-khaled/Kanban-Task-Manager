import { useState } from "react";

export default function KanbanBoard() {
  const [colums, setColums] = useState([]);

  return (
    <div className="min-h-[calc(100vh-50px)] overflow-x-auto p-[20px]">
      <button
        onClick={() => {
          createNewColumn();
        }}
        className="
      h-[60px]
      w-[350px]
      min-w-[350px]
      cursor-pointer
      rounded-lg
      bg-secondary
      border-2
      border-columnBackgroundColor
      p-4
      ring-rose-500
      hover:ring-2
      flex
      gap-2
      ">
        Add Column
      </button>
    </div>
  );
  function createNewColumn() {}
}

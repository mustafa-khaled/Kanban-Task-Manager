import { useMemo, useState } from "react";
import { Column, Id } from "../types";

import { DndContext, DragOverlay, DragStartEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";

import ColumnContainer from "./ColumnContainer";

function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const columnId = useMemo(() => columns.map((col) => col.id), [columns]);

  return (
    <div
      className="m-auto flex gap-4 min-h-[calc(100vh-50px)] w-full items-center  overflow-x-auto 
    overflow-y-hidden px-[40px]">
      <DndContext onDragStart={onDragStart}>
        <div className="flex gap-4">
          <SortableContext items={columnId}>
            {columns?.map((col) => {
              return (
                <ColumnContainer
                  column={col}
                  key={col.id}
                  deleteColumn={deleteColumn}
                />
              );
            })}
          </SortableContext>
        </div>

        <button
          onClick={() => {
            createNewColumn();
          }}
          className="h-[60px]w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-secondary border-2 
         p-4 hover:ring-2 flex gap-2">
          Add Column
        </button>
        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <ColumnContainer
                column={activeColumn}
                deleteColumn={deleteColumn}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns?.length + 1}`,
    };

    setColumns([...columns, columnToAdd]);
  }

  function deleteColumn(id: Id) {
    const filteredColumns = columns.filter((col) => col.id !== id);
    setColumns(filteredColumns);
  }

  function generateId() {
    return Math.floor(Math.random() * 10000);
  }

  function onDragStart(e: DragStartEvent) {
    if (e.active.data.current?.type === "Column") {
      setActiveColumn(e.active.data.current.column);
      return;
    }
  }
}
export default KanbanBoard;

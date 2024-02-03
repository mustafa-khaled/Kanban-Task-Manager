import { useSortable } from "@dnd-kit/sortable";
import { Column, Id } from "../types";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  column: Column;
  deleteColumn(id: Id): void;
}

export default function ColumnContainer(props: Props) {
  const { column, deleteColumn } = props;

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: { type: "Column", column },
  });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  if (isDragging)
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-red-400 bg-opacity-[0.1] w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"></div>
    );
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-red-400 bg-opacity-[0.2] w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col">
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        className="text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold
      bg-secondary flex items-center justify-between">
        <div className="flex gap-2">
          <div className="flex justify-center items-center px-2 py-1 text-sm rounded-full">
            0
          </div>
          {column.title}
        </div>
        {/* Delete Icon */}
        <button
          onClick={() => deleteColumn(column.id)}
          className="stroke-gray-500 hover:stroke-gray-400 hover:bg-columnBackgroundColor
        rounded px-1 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>

      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto"></div>
      {/* Column footer */}
      <button
        className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4
        border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-rose-500  justify-center active:bg-black"
        onClick={() => {}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
}
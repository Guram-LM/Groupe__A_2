import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Del_Icon, DragendIcon } from "./AddIcons";
import type { CountryType } from "../countrys/CountrysInterface";

interface SortableItemProps {
  id: string;
  item: CountryType;
  removePlan: (name: string) => void;
}

export const SortableItem: React.FC<SortableItemProps> = ({ id, item, removePlan }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1, 
    backgroundColor: isDragging ? "#e0f7fa" : "white", 
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white border border-none rounded-lg p-3 flex flex-col space-y-4 shadow-md mb-3 cursor-move"
    >
      <div className="flex items-center gap-4">
        <DragendIcon />
        <img
          src={item.flags.png}
          alt="flags images"
          className="w-10 h-5 object-cover rounded"
        />
        <div className="flex flex-col">
          <h2 className="text-md font-semibold">{item.name.common}</h2>
          <p className="text-gray-600">{item.continents[0]}</p>
        </div>
        <div className="ml-auto">
          <button
            onClick={() => removePlan(item.name.common)}
            className="p-2 rounded hover:bg-red-100"
          >
            <Del_Icon />
          </button>
        </div>
      </div>
    </div>
  );
};
import { useState } from "react";
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor, KeyboardSensor } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";
import type { CountryType } from "../countrys/CountrysInterface";
import { SaveIcon } from "./AddIcons";
import SendPlan from "./SendPlan";

interface AddCardProps {
  data: CountryType[];
  removePlan: (name: string) => void;
  clearPlan: () => void;
  updatePlanOrder: (newData: CountryType[]) => void;
}

const AddCard: React.FC<AddCardProps> = ({ data, clearPlan, removePlan, updatePlanOrder }) => {
  const [wechselnButt, setWechselnButt] = useState(false);


  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, 
      },
    }),
    useSensor(KeyboardSensor)
  );

 
  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = data.findIndex((item) => item.name.common === active.id);
      const newIndex = data.findIndex((item) => item.name.common === over.id);
      const newData = arrayMove(data, oldIndex, newIndex);
      updatePlanOrder(newData);
    }
  };

  return (
    <section>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={data.map((item) => item.name.common)} strategy={verticalListSortingStrategy}>
          <div className="bg-blue-100 border-2 border-dashed border-blue-400 rounded-lg p-7">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-lg font-semibold text-blue-700">Current Trip</h1>
              <button
                onClick={clearPlan}
                className="text-red-500 hover:text-red-600 font-medium"
              >
                Clear All
              </button>
            </div>

            {data?.map((item) => (
              <SortableItem
                key={item.name.common}
                id={item.name.common}
                item={item}
                removePlan={removePlan}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      {!wechselnButt ? (
        <button
          onClick={() => setWechselnButt(true)}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center gap-2 w-full my-10"
        >
          <SaveIcon />
          Save Trip
        </button>
      ) : (
        <SendPlan setWechselnButt={setWechselnButt} />
      )}
    </section>
  );
};

export default AddCard;
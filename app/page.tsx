import { Task } from "@/components/native/Task";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  return (
    <div className="w-full px-10 pb-15">
      <div className="max-w-2xl w-full mx-auto">
        <h1>Сегодня</h1>
        <div>List</div>
        <div>
          <Task name="Task name" completed={false} /> 
          <div>Добавить задачу</div>
        </div>
      </div>
    </div>
  );
}

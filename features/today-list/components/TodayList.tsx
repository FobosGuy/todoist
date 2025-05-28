"use client";

import { Task } from "@/components/native/Task";
import React, { useEffect, useState } from "react";

const DATA = [
  {
    id: "0",
    name: "Task name 1",
    completed: false,
  },
  {
    id: "1",
    name: "Task name 2",
    completed: false,
  },
  {
    id: "2",
    name: "Task name 3",
    completed: false,
  },
];

type Task = {
  id: string;
  name: string;
  completed: boolean;
};

export const TodayList = () => {
  const [list, setList] = useState<Task[] | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setList(DATA);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full px-10 pb-15">
      <div className="max-w-2xl w-full mx-auto">
        <h1>Сегодня</h1>
        <div>
          {list
            ? list.map(({ id, name, completed }) => (
                <Task
                  key={`today.task.${id}`}
                  name={name}
                  completed={completed}
                />
              ))
            : "Loading..."}
          <div>Добавить задачу</div>
        </div>
      </div>
    </div>
  );
};

import Task from "./Task";
import React from "react";

const onArchiveTask = () => {};
const onPinTask = () => {};

const task = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    completed: false,
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export default {
    default: <Task task={task} onArchiveTask={onArchiveTask} onPinTask={onPinTask}/>
}
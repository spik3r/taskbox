import React from 'react';
import Task from './Task';

export const theTask = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    completed: false,
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

const theActions = {
    onPinTask: () => {},
    onArchiveTask: () => {},
};

export default <Task task={theTask} onArchiveTask={theActions.onArchiveTask} onPinTask={theActions.onPinTask} />;

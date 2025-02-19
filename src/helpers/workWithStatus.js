export const isStatusSelectable = (tasks, status) => {
  const conpletedTasks = tasks.filter((task) => task.completed).length;
  console.log();

  if (
    (tasks.length == conpletedTasks && status == "waiting") ||
    (tasks.length == conpletedTasks && status == "progress")
  )
    return true;

  return false;
};

// change task status when project status changes
export const updateAllTasksStatus = (allTasks, status) => {
  let modifyTasks;

  if (status === "completed") {
    modifyTasks = allTasks.map((item) => ({
      ...item,
      completed: true,
    }));
  }

  if (status === "total") {
    modifyTasks = allTasks.map((item) => ({
      ...item,
      completed: false,
    }));
  }

  return modifyTasks;
};

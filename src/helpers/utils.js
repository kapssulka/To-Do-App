export const calcPersentComplitedTasks = (tasks) => {
  let persentCompleted = 0;
  if (tasks.length > 0) {
    const completed = tasks.filter((task) => task.completed === true);
    persentCompleted = (100 * completed.length) / tasks.length;
  }

  return Math.round(persentCompleted);
};

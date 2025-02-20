// calcPersentComplitedTasks
export const calcPersentComplitedTasks = (tasks) => {
  let persentCompleted = 0;
  if (tasks.length > 0) {
    const completed = tasks.filter((task) => task.completed === true);
    persentCompleted = (100 * completed.length) / tasks.length;
  }

  return Math.round(persentCompleted);
};

// returns projects with the specified status

export const getProjectsByStatus = (data, status) => {
  return data?.filter((item) => item.status === status) || [];
};

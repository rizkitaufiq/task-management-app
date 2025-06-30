export const generateId = (): string => {
  const key = "task_id_counter";

  const lastId = parseInt(localStorage.getItem(key) || "0", 10);

  const newId = lastId + 1;

  localStorage.setItem(key, newId.toString());

  return `SM-${newId}`;
};
export const ADD_ONE = "ADD_ONE";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const CHANGE_MEMORY = "CHANGE_MEMORY";
export const APPLY_MEMORY = "APPLY_MEMORY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const clearMemory = () => {
  return { type: CLEAR_MEMORY };
};

export const changeMemory = () => {
  return { type: CHANGE_MEMORY };
};

export const applyMemory = () => {
  return { type: APPLY_MEMORY };
};
export const addItem = item => {
  return {
    type: "ADD_ITEM",
    data: item
  };
};

export const removeItem = id => {
  return {
    type: "REMOVE_ITEM",
    id: id
  }
}
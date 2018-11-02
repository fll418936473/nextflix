const initeState = [
  {
    title: "Futurama",
    id: 1,
    img: "http://cdn1.nflximg.net/webp/7621/3787621.webp"
  },

  {
    title: "The Interview",
    id: 2,
    img: "http://cdn1.nflximg.net/webp/1381/11971381.webp"
  },

  {
    title: "Gilmore Girls",
    id: 3,
    img: "http://cdn1.nflximg.net/webp/7451/11317451.webp"
  }
];

const mylist = (state = initeState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      for (let obj of state) {
        if (obj.id === action.data.id) {
          return state;
        }
      }
      return [...state, action.data];

    case "REMOVE_ITEM":
      return state.filter(element => element.id !== action.id);

    default:
      return state;
  }
};

export default mylist;

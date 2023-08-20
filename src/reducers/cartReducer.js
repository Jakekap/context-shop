const initialState = JSON.parse(window.localStorage.getItem("cart")) || [];

// const updateLocalStorage = (state) => {
//   window.localStorage.setItem("cart", JSON.stringify(state));
// };

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;
  switch (actionType) {
    case "ADD_TO_CART": {
      const productCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      );
      if (productCartIndex >= 0) {
        const newState = structuredClone(state);
        newState[productCartIndex].quantity += 1;
        // updateLocalStorage(newState);
        return newState;
      } else {
        const newState = [...state, { ...actionPayload, quantity: 1 }];
        // updateLocalStorage(newState);
        return newState;
      }
    }
    case "DELETE_FROM_CART": {
      const productCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      );
      if (productCartIndex >= 0 && actionPayload.quantity > 1) {
        const newState = structuredClone(state);
        newState[productCartIndex].quantity -= 1;
        // updateLocalStorage(newState);
        return newState;
      } else {
        const newState = state.filter((item) => item.id !== actionPayload.id);
        // updateLocalStorage(newState);
        return newState;
      }
    }
    case "CLEAR_CART": {
      const newState = [];
      //   updateLocalStorage(newState);
      return newState;
    }
  }
};
export { initialState, reducer };

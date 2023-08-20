const initialState = JSON.parse(window.localStorage.getItem("cart")) || [];

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
        return newState;
      } else {
        const newState = [...state, { ...actionPayload, quantity: 1 }];
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
        return newState;
      } else {
        const newState = state.filter((item) => item.id !== actionPayload.id);
        return newState;
      }
    }
    case "CLEAR_CART": {
      const newState = [];
      return newState;
    }
  }
};
export { initialState, reducer };

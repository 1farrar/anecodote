const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return action.data;
    case "HIDE_NOTIFICATION":
      return null;
    default:
      return state;
  }
};

export const showNotification = (notification, timeout) => {
  return async (dispatch) => {
    dispatch({
      type: "SHOW_NOTIFICATION",
      data: notification,
    });

    setTimeout(() => {
      dispatch({
        type: "HIDE_NOTIFICATION",
      });
    }, timeout * 1000);
  };
};

export default notificationReducer;

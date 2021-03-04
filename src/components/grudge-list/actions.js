export const actionTypes = {
  ADD_GRUDGE: 'ADD_GRUDGE',
  REMOVE_GRUDGE: 'REMOVE_GRUDGE',
  TOGGLE_FORGIVENESS: 'TOGGLE_FORGIVENESS'
};

export const addGrudgeAction = (personName, reason) => ({
  type: actionTypes.ADD_GRUDGE,
  payload: {
    personName,
    reason
  }
});

export const removeAction = id => ({
  type: actionTypes.REMOVE_GRUDGE,
  payload: {
    id
  }
})

export const toggleForgiveAction = id => ({
  type: actionTypes.TOGGLE_FORGIVENESS,
  payload: {
    id
  }
})

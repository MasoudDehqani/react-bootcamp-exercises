export const actionTypes = {
  ADD_GRUDGE: 'ADD_GRUDGE',
  REMOVE_GRUDGE: 'REMOVE_GRUDGE',
  TOGGLE_FORGIVENESS: 'TOGGLE_FORGIVENESS'
};

export interface ActionsType {
  type: string;
  payload: {
    personName?: string;
    reason?: string;
    id?: string;
  }
}

export const addGrudgeAction = (personName: string, reason: string) => ({
  type: actionTypes.ADD_GRUDGE,
  payload: {
    personName,
    reason
  }
});

export const removeAction = (id: string) => ({
  type: actionTypes.REMOVE_GRUDGE,
  payload: {
    id
  }
})

export const toggleForgiveAction = (id: string) => ({
  type: actionTypes.TOGGLE_FORGIVENESS,
  payload: {
    id
  }
})

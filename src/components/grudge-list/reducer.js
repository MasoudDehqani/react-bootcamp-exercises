import { actionTypes } from './actions';
import GrudgeItem from './grudge.model';

export default function grudgeReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_GRUDGE:
      const grudge = new GrudgeItem(
        action.payload.personName,
        action.payload.reason
      );
      return state.concat(grudge);
    case actionTypes.REMOVE_GRUDGE:
      return state.filter(grudge => grudge.id !== action.payload.id);
    case actionTypes.TOGGLE_FORGIVENESS:
      return state.map(grudge => {
        if (grudge.id !== action.payload.id) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven };
      });
    default:
      throw new Error('NOT SUPPORTED');
  }
}

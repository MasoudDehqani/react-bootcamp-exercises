import { useEffect, useReducer, useState } from 'react';
import { addGrudgeAction, removeAction, toggleForgiveAction } from './actions';
import Grudge from './Grudge';
import GrudgeItem, { GrudgeItemType } from './grudge.model';
import grudgeReducer from './reducer';



const GrudgeList = () => {
  // const [items, setItems] = useState([]);
  const [items, dispatch] = useReducer(grudgeReducer, getState());
  const [personName, setPersonName] = useState('');
  const [reason, setReason] = useState('');

  function getState() {
    const savedState = localStorage.getItem('savedState')
    if (savedState === null) return []
    return JSON.parse(savedState)
  }

  const addGrudge = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addGrudgeAction(personName, reason));
    setPersonName('');
    setReason('');
  };

  const removeGrudge = (id: string) => {
    // const updatedItems = items.filter(grudge => grudge.id !== id);
    dispatch(removeAction(id))
    // setItems(updatedItems);
  };

  const toggleForgiveness = (id: string) => {
    // const updatedItems = items.map(grudge => {
    //   if (grudge.id !== id) return grudge;
    //   return { ...grudge, forgiven: !grudge.forgiven };
    // });
    dispatch(toggleForgiveAction(id))
    // setItems(updatedItems);
  };

  const changeInput = () => setPersonName('Forough');

  useEffect(() => {
    localStorage.setItem('savedState', JSON.stringify(items))
  }, [items])

  return (
    <div>
      <form onSubmit={(e) => addGrudge(e)}>
        <input
          type='text'
          name='person'
          placeholder='person'
          value={personName}
          onChange={event => setPersonName(event.target.value)}
        />
        <input
          type='text'
          name='reason'
          placeholder='reason'
          value={reason}
          onChange={event => setReason(event.target.value)}
        />
        <input type='submit' />
      </form>
      <button onClick={changeInput}>Change</button>

      <ul>
        {items.map((item: GrudgeItemType) => (
          <Grudge
            key={item.id}
            grudge={item}
            onRemove={removeGrudge}
            onToggle={toggleForgiveness}
          />
        ))}
      </ul>
    </div>
  );
};

export default GrudgeList;

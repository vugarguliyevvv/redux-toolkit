import classes from "./Counter.module.css";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const {counter, showCounter} = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => dispatch(counterActions.incremenet());
  const increaseHandler = () => dispatch(counterActions.increase(10));
  const decrementHandler = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button className={classes['counter-actions']} onClick={incrementHandler}>Increment</button>
        <button className={classes['counter-actions']} onClick={increaseHandler}>Increase</button>
        <button className={classes['counter-actions']} onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

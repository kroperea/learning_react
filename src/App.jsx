import './App.css'
import chef from './images/photo.jpg'
import { useReducer, useEffect } from 'react'
let heart = '❤️'

function Header({ name, year }) {
  // child component
  return (
    <header>
      <h1>
        {name}&apos;s kitchen {heart}
      </h1>
      <p> Copyright {year}</p>
    </header>
  )
}

const items = [
  'Macaroni and Cheese',
  'Salmon with Potatoes',
  'Tofu with Vegetables',
]

const dishObjects = items.map((dish, i) => ({ id: i, title: dish }))
console.log(dishObjects)

function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}> I want to be open </button>
        <h2>
          Welcome to this beautiful restaurant! {openStatus ? 'Open' : 'Closed'}
        </h2>
      </div>
      <main>
        <img
          src={chef}
          alt="image of the restaurant's chef"
          className='chef'
          style={{ maxWidth: '20%' }}
        />
        <section>
          <p>We serve the most delicious food around.</p>
          <h3>Check out our menu:</h3>
          <ul>
            {dishes.map((dish) => (
              <li key={dish.id} style={{ listStyle: 'none' }}>
                {dish.title}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

function App() {
  // parent component
  // when we use reducer, the first argument expected is a function.
  const [status, toggle] = useReducer((status) => !status, true)

  // useEffect is a hook that will change after the state value changes.
  useEffect(() => {
    console.log(`The restaurant is ${status ? 'Open' : 'Closed'}`)
  }, [status])

  return (
    <div>
      <h1> The restaurant is currently {status ? 'Open' : 'Closed'}. </h1>
      <button onClick={toggle}>{status ? 'close' : 'open'} restaurant</button>
      <Header name='Caro' year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  )
}

/* 
My notes:
Passing components up would mean all components 
that use the same state would be in sync 
 Benefits of Passing State Up
✅ Keeps components in sync – All child components get the same state.
✅ Prevents unnecessary duplication – Only one state is needed instead of separate ones.
✅ Easier debugging – The logic is in one place (parent), reducing complexity.
✅ Makes components reusable – Since the child doesn’t manage state, it can be used anywhere.

Callbacks in React:
A callback function in React is a function that is passed as an argument to another function 
and gets executed later, usually in response to an event or after an operation completes.
When passing callbacks to child components, React might re-create functions unnecessarily, causing extra re-renders.
✅ useCallback memoizes the function, preventing unnecessary re-creation.
✅ Passing Data from Child to Parent (Lifting State Up)
✅ Handling Asynchronous Code (e.g., API calls)
✅ Optimizing Performance (e.g., useCallback to prevent unnecessary re-renders)


✅ useEffect is a hook that will change when the Component Mounts
setting an [] as the second argument will make the useEffect run when rendered 1st time.
*/

export default App

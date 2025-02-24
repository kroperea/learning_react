import './App.css'
import chef from './images/photo.jpg'
import { useState } from 'react'
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
  const [status, setStatus] = useState(true)
  console.log(status)
  return (
    <div>
      <h1> The restaurant is currently {status ? 'Open' : 'Closed'}. </h1>
      <button onClick={() => setStatus(!status)}>
        {status ? 'close' : 'open'} restaurant
      </button>
      <Header name='Caro' year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={setStatus} />
    </div>
  )
}

export default App

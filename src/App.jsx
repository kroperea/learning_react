import './App.css'
import chef from './images/photo.jpg'
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

function Main({ dishes }) {
  return (
    <ul>
      {dishes.map((dish) => (
        <li key={dish.id} style={{ listStyle: 'none' }}>
          {dish.title}
        </li>
      ))}
    </ul>
  )
}

function App() {
  // parent component
  return (
    <div>
      <Header name='Caro' year={new Date().getFullYear()} />
      <Main dishes={dishObjects} />
    </div>
  )
}

export default App

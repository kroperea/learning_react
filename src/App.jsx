import './App.css'
let heart = '❤️'

function Header() {
  return (
    <header>
      <h1> Caro's kitchen {heart} </h1>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2> We serve the most delicious food around</h2>
      </main>
    </div>
  )
}

export default App

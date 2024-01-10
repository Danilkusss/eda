import './App.css'
import Header from './components/Header'
import Item from './components/item'
import { items } from './data'

function App() {
  return (
   <div>
    <Header />
    <main>
      <section>
        <h3>Специальные предложения</h3>

        <div className='block-indifidual-item'>
          <h3>Индивидуальные предложения для вас</h3>
          <ul>
            {
              items.map(data => {
                return(
                 <li key={data.id}><Item key={data.id} title={data.title} price={data.price} about={data.about}/></li>
                )
              })
            }
          </ul>
        </div>
      </section>
    </main>
   </div>
  )
}

export default App

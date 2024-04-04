import { useContext } from "react"
import { useParams } from "react-router"
import { ContextApp } from "../App"

function Home() {

    const { pizzaName } = useParams()
    const c = useContext(ContextApp)

    return (
      <div className="galleryWrapper">
        {
            c.dataPizzas.map((pizza, index) => {
                return (
                    <div key={index}>
                        <img src={pizza.img}/>
                        <h3>{pizza.name}</h3>
                        <ul> Ingredientes:
                        {
                            pizza.ingredients.map((e, index) => {
                                return(
                                    <li key={index}>{e}</li>
                                )
                            })
                        }
                        </ul>
                        <h2>$ {pizza.price}</h2>
                        <button>Ver mas 👀</button>
                        <button>Añadir 🛒</button>
                    </div>
                )
            })
        }
      </div>
    )
  }
  
  export default Home
  
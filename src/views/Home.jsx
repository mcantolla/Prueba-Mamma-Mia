import { useContext } from "react"
import { useNavigate, useParams } from "react-router"
import { ContextApp } from "../App"

function Home() {

    const { pizzaName } = useParams()
    const c = useContext(ContextApp)
    const navigate = useNavigate()

    const handleClickDetails = (pizza) => {
        navigate(`/pizza/${pizza.name}`)        
    }

    const handleClickAdd = (index) => {
        c.dataPizzas.map((pizza, i) => {
            if (i === index) {
                pizza.count = pizza.count + 1
                c.setTotal(c.total + pizza.price)
            }
        })
    }

    return (
    <>
    <h1 className="title">¡Pizzeria Mamma Mia!</h1>
    <p className="subTitle">¡Tenemos las mejores pizzas que podras encontrar!</p>
      <div className="galleryWrapper">
        {
            c.dataPizzas.map((pizza, index) => {
                return (
                    <div className="galleryCard" key={index}>
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
                        <button onClick={() => handleClickDetails(pizza)}>Ver mas 👀</button>
                        <button onClick={() => handleClickAdd(index)}>Añadir 🛒</button>
                    </div>
                )
            })
        }
      </div>
      </>
    )
  }
  
  export default Home
  
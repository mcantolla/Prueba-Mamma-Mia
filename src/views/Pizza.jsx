import { useContext } from "react"
import { useParams } from "react-router"
import { ContextApp } from "../App"

function Pizza() {

    const { pizzaName } = useParams()
    const c = useContext(ContextApp)

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
        {
          c.dataPizzas.map((pizza, index) => {
            if (pizza.name == pizzaName) {
              return (
                <div className="pizzaWrapper" key={index}>
                    <img src={pizza.img}/>
                    <div className="infoWrapper">
                    <h3>{pizza.name}</h3>
                    <p>{pizza.desc}</p>
                    <ul> Ingredientes:
                    {
                        pizza.ingredients.map((e, index) => {
                            return(
                                <li key={index}>{e}</li>
                            )
                        })
                    }
                    </ul>
                    <h2>Precio: $ {pizza.price}</h2>
                    <button onClick={() => handleClickAdd(index)}>Añadir 🛒</button>
                    </div>
                </div>
            )
            }
          })
        }
      </>
    )
  }
  
  export default Pizza
  
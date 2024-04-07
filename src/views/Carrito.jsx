import { useContext } from "react"
import { ContextApp } from "../App"

function Carrito() {

  const c = useContext(ContextApp)

  const handleClickAdd = (index) => {
    c.dataPizzas.map((pizza, i) => {
        if (i === index) {
            pizza.count = pizza.count + 1
            c.setTotal(c.total + pizza.price)
        }
    })
}

const handleClickRemove = (index) => {
  c.dataPizzas.map((pizza, i) => {
      if (i === index) {
          pizza.count = pizza.count - 1
          c.setTotal(c.total - pizza.price)
      }
  })
}
  

    return (
      <div className="carritoWrapper">
        <h3>Detalles del pedido:</h3>
        {
          c.dataPizzas.map((pizza, index) => {
            if (pizza.count > 0) {
              return (
                <div className="pedidoWrapper" key={index}>
                  <img src={pizza.img} alt={pizza.name} />
                  <h4>{pizza.name}</h4>
                  <p>${pizza.count * pizza.price}</p>
                  <button onClick={() => handleClickRemove(index)}>-</button>
                  <p>{pizza.count}</p>
                  <button onClick={() => handleClickAdd(index)}>+</button>
                </div>
              )
            }
          })
        }
        <h2>Total: ${c.total}</h2>
      </div>
    )
  }
  
  export default Carrito
  
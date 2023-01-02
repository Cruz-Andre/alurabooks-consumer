import { AbBotao } from "alurabooks-ds-andre"
import axios from "axios"
import { useEffect, useState } from "react"
import { IPedido } from "../../interfaces/IPedido"

import styles from './Pedidos.module.scss'

const Pedidos = () => {

  const [pedidos, setPedidos] = useState<IPedido[]>([])

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    axios.get<IPedido[]>('http://localhost:8000/pedidos', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(resposta => setPedidos(resposta.data))
      .catch(erro => console.log(erro))

  }, [])

  const removerPedido = (pedido: IPedido) => {
    const token = sessionStorage.getItem('token')
    axios.delete<IPedido[]>(`http://localhost:8000/pedidos/${pedido.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(() => {
        setPedidos(pedidos.filter(remove => remove.id !== pedido.id))
      })
      .catch(erro => console.log(erro))

  }


  return (
    <section className={styles.pedidos}>
      <h1>Meus Pedidos</h1>
      {pedidos.map(pedido => (
        <div className={styles.pedido} key={pedido.id}>
          <ul>
            <li>Pedido: <strong>{pedido.id}</strong></li>
            <li>Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong></li>
            <li>Valor Total: <strong>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(pedido.total)}</strong></li>
            <li>Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong></li>
          </ul>
          <AbBotao texto="Detalhes" />
          <AbBotao texto='Remover pedido' onClick={() => removerPedido(pedido)} />
        </div>
      ))}
    </section>
  )
}

export default Pedidos
import { AbBotao } from "alurabooks-ds-andre"
import { useEffect, useState } from "react"
import http from "../../HTTP"
import { IPedido } from "../../interfaces/IPedido"

import styles from './Pedidos.module.scss'

const Pedidos = () => {

  const [pedidos, setPedidos] = useState<IPedido[]>([])

  useEffect(() => {
    http.get<IPedido[]>('pedidos')
      .then(resposta => setPedidos(resposta.data))
      .catch(erro => console.log(erro))

  }, [])

  const removerPedido = (pedido: IPedido) => {
    http.delete<IPedido[]>(`pedidos/${pedido.id}`)
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
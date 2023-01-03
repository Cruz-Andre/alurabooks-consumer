import { AbBotao, AbCampoTexto } from "alurabooks-ds-andre"
import { AbModal } from "ds-alurabooks"
import { useState } from "react"
import imgCadastro from './cadastro.svg'
import styles from './ModalCadastroUsuario.module.scss'
import http from "../../../../HTTP"

interface PropsModalCadastroUsuario {
  aberta: boolean
  aoFechar: () => void
}


const ModalCadastroUsuario = ({ aberta, aoFechar }: PropsModalCadastroUsuario) => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cep, setCep] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const usuario = {
      nome,
      email,
      endereco,
      complemento,
      cep,
      senha
    }

    http.post('public/registrar', usuario)
      .then(() => {

        alert("Usuário foi cadastrado com sucesso!")

        setNome('')
        setEmail('')
        setEndereco('')
        setComplemento('')
        setCep('')
        setSenha('')
        setConfirmarSenha('')
        aoFechar()

      })
      .catch(erro => {
        alert(erro.response.data.message)
      })

    console.log(usuario)
  }

  return (
    <AbModal
      titulo="Cadastrar"
      aberta={aberta}
      aoFechar={aoFechar}
    >
      <div className={styles.corpoModalCadastro}>
        <figure>
          <img src={imgCadastro} alt="imagem de cadastro" />
        </figure>
        <form onSubmit={aoSubmeterFormulario}>
          <AbCampoTexto
            tituloLabel="Nome"
            placeholder="Digite seu nome completo"
            value={nome}
            type="text"
            onChange={setNome}
          />

          <AbCampoTexto
            tituloLabel="E-mail"
            placeholder="Digite seu E-mail"
            value={email}
            type="email"
            onChange={setEmail}
          />

          <AbCampoTexto
            tituloLabel="Endereço"
            placeholder="Digite sua rua e número"
            value={endereco}
            type="text"
            onChange={setEndereco}
          />

          <AbCampoTexto
            tituloLabel="Complemento"
            placeholder="Apto/casa, bloco, referência"
            value={complemento}
            type="text"
            onChange={setComplemento}
          />

          <AbCampoTexto
            tituloLabel="CEP"
            placeholder="Digite seu CEP"
            value={cep}
            type="text"
            onChange={setCep}
          />

          <AbCampoTexto
            tituloLabel="Senha"
            placeholder=""
            value={senha}
            type="password"
            onChange={setSenha}
          />

          <AbCampoTexto
            tituloLabel="Confirmar senha"
            placeholder=""
            value={confirmarSenha}
            type="password"
            onChange={setConfirmarSenha}
          />
          <footer>
            <AbBotao texto="Cadastrar" />
          </footer>
        </form>
      </div>
    </AbModal>
  )
}

export default ModalCadastroUsuario
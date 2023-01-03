import { useState } from "react"
import { AbModal } from "ds-alurabooks"
import { AbBotao, AbCampoTexto } from "alurabooks-ds-andre"
import imgLogin from './login.svg'
import styles from './ModalLoginUsuario.module.scss'
import http from "../../../../HTTP"

interface PropsModalLoginUsuario {
  aberta: boolean
  aoFechar: () => void
  aoEfetuarLogin: () => void
}

const ModalLoginUsuario = ({ aberta, aoFechar, aoEfetuarLogin }: PropsModalLoginUsuario) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const aoSubmeterFormulario = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const usuario = {
      email,
      senha
    }
    http.post('public/login', usuario)
      .then(resposta => {
        sessionStorage.setItem('token', resposta.data.access_token)
        setEmail('')
        setSenha('')
        aoEfetuarLogin()
        console.log(resposta)

      })
      .catch(erro => {
        if (erro?.response?.data?.message) {
          alert(erro.response.data.message)
        } else {
          alert('Aconteceu um erro inesperado ao efetuar o seu login! Entre em contato com o suporte')
        }
        console.log(erro)
      })

    console.log(usuario)
  }

  return (
    <AbModal
      titulo="Login"
      aberta={aberta}
      aoFechar={aoFechar}
    >
      <div className={styles.corpoModalLogin}>
        <figure>
          <img src={imgLogin} alt="imagem de cadastro" />
        </figure>
        <form onSubmit={aoSubmeterFormulario}>

          <AbCampoTexto
            tituloLabel="E-mail"
            placeholder="Digite seu E-mail"
            value={email}
            type="email"
            onChange={setEmail}
          />

          <AbCampoTexto
            tituloLabel="Senha"
            placeholder="Digite sua senha"
            value={senha}
            type="password"
            onChange={setSenha}
          />

          <footer>
            <div className={styles.fazerLogin}>
              <h3>Esqueci minha senha</h3>
              <AbBotao texto="Fazer Login" />
            </div>
            <div className={styles.criaConta}>
              <h3>Ainda não tem uma conta?</h3>
              <AbBotao texto="Criar Conta" />
            </div>
          </footer>
        </form>
      </div>
    </AbModal>
  )
}

export default ModalLoginUsuario
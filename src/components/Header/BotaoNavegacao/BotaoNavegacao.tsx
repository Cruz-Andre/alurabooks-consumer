import styles from './BotaoNavegacao.module.scss'

interface BotaoNavegacaoProps {
    imagemSrc: string
    textoAltSrc: string
    texto?: string
    onClick?: () => void
}

const BotaoNavegacao = ({ imagemSrc, texto, textoAltSrc, onClick }: BotaoNavegacaoProps) => {
    const manipularClick = () => {
        if (onClick) {
            onClick()
        }
    }
    
    return (<button className={styles.btnNav} onClick={manipularClick}>
        <img src={imagemSrc} alt={textoAltSrc} />
        {texto}
    </button>)
}

export default BotaoNavegacao
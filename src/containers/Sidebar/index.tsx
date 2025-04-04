import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from "../../components/Titulo"

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => {

  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={18}>Giovana Maia </Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>GiovanaMv 🌷 </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheira de Front-End</Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  );
}

export default Sidebar;

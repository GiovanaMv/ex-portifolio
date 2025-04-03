import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => {

  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={18}>Giovana Maia </Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>GiovanaMv 🌷 </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>Engenheira de Front-End</Descricao>
        <BotaoTema>Trocar Tema</BotaoTema>
      </SidebarContainer>
    </aside>
  );
}

export default Sidebar;

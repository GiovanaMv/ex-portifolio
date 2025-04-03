import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import {GithubSecao} from './styles'

const Sobre = () => {
  return (
    <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo='principal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem esse dicta ipsum voluptatum, sed reprehenderit quidem provident voluptas quod illum labore hic illo a molestiae quis vel nobis tempora voluptate!</Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=GiovanaMv&show_icons=true&theme=default&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=GiovanaMv&layout=compact&langs_count=7&theme=default"/>
    </GithubSecao>
  </section>
  )
}

export default Sobre

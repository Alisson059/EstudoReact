import Image6 from '../../images/venom.png'
import Image5 from '../../images/Doutor.png'
import Image4 from '../../images/DuendeVerde.png'
import Image3 from '../../images/HomemAranha.png'
import Image2 from '../../images/HomemAranha2.png'
import Image1 from '../../images/HomemAranha3.png'
import './Main.css'
import Equipe from '../../Equipe/Equipe'


const Main = () => {

    return (
        <main>
            <Equipe titulo={'Titulo 1'} img1={Image1} nome1={"Imagem1"} img2={Image2} nome2={"Imagem2"} img3={Image3} nome3={"Imagem3"}/>
            <Equipe titulo={'Titulo 2'} img1={Image4} nome1={"Duende Verde"} img2={Image5} nome2={"Doutor Octopus"} img3={Image6} nome3={"Venom"}/>
            

        </main>

     
    )

}

export default Main;
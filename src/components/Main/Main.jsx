import Image from '../../images/imagem 1.webp'
import Image2 from '../../images/imagem 2.jpg'
import Image3 from '../../images/image 3.webp'
import Image4 from '../../images/HomemAranha.png'
import Image5 from '../../images/HomemAranha2.png'
import Image6 from '../../images/HomemAranha3.png'

import './Main.css'
import Perfil from '../Perfil/Perfil/';

const Main = () => {

    return (
        <>
            <h1 className='t-center'>DeadCells</h1>
            <div className='perfis'>
                
                <Perfil img={Image} titulo={'Image'}/> 
                <Perfil img={Image2} titulo={'Image2'}/>
                <Perfil img={Image3} titulo={'Image3'}/>

            </div>

            <h1 className='t-center'>DeadCells</h1>
            <div className='perfis'>
                
                <Perfil img={Image4} titulo={'Image'}/> 
                <Perfil img={Image5} titulo={'Image2'}/>
                <Perfil img={Image6} titulo={'Image3'}/>

            </div>

        </>
    )

}

export default Main;
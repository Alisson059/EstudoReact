import './Descricao2.css'
import Image1 from '../../images/HomemAranha2.png'

const Descricao2 = () => {
 
    return(
     
    <div class='Descricao'>

        <h1>Homem Aranha</h1> 
        

        <div class="conteiner">
            <div class="Imagem">

                <img src={Image1}/>

            </div>
       
            <div class="Texto">

                <p> Peter Parker mas conhecido como Homem aranha era um adolescente órfão, tímido e franzino, dedicado aos estudos e com poucos amigos além de 
                seus tios que o criaram, o casal Ben e May Parker. Mas a vida de Peter mudou quando visitou uma exposição de ciências e 
                foi picado por uma aranha radioativa, fruto de um experimento realizado ali. Logo, Peter descobriu que adquiriu 
                os poderes da aranha: a capacidade de se fixar a paredes e grande força física, além de um “sentido de aranha” que o avisa 
               sobre situações perigosas.</p>

            </div>

        </div> 
   
   </div>
     
    )
     
    }
     
    export default Descricao2;
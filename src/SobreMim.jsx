import { useState } from "react"
import perfilImage from "./assets/perfil.jpg";

const SobreMim = () => {
    const [imagem] = useState(perfilImage);

    return (
        <>
            <h1>Pedro Henrique Pinheiro Mendes Huck</h1>
            <p>
                Meu nome é Pedro Henrique Pinheiro Mendes Huck, tenho 17 anos e sou estudante de programação pela Tech4me desde setembro do ano de 2023, aprendi linguagens de marcação, de estilização, e programação. Sendo essas as tecnologias HTML, CSS, JavaScript e React, nessa trajetória, o ponto mais dificil foi a matéria de lógica de programação, e o ponto mais legal, com certeza foi aprender e usar a biblioteca React com o professor Yago
            </p>
            <div>
                <img src={imagem} width={400} />
            </div>

        </>
    )
}

export default SobreMim 
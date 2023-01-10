import { Typography } from "@mui/material"
import { TextFieldGeneric } from "../../components/textFieldGeneric/TextFieldGeneric"




export const Home = () => {

    const produtos = [
        {
            id: 1,
            name: "bola"
        },
        {
            id: 2,
            name: "bolao"
        },
        {
            id: 3,
            name: "processador ryzen 5600 v.2"
        },
        {
            id: 4,
            name: "notbook dell gamer super ultra mega"
        },
        {
            id: 5,
            name: "copo de agua gelada"
        },
        {
            id: 5,
            name: "copo de agua"
        }
    ]

    return( 
        <div>

            <h1>Criando autocomplete</h1>
            <Typography>
                <TextFieldGeneric name='Nome' data={produtos} />
                <br />
                <TextFieldGeneric name='Grupo' data={produtos} />
                <br />
                <TextFieldGeneric name='Classe' data={produtos} />
                <br />
                <TextFieldGeneric name='Setor' data={produtos} />
            </Typography>
        
        </div>
    )
}
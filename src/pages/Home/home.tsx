import { Typography } from "@mui/material"
import { AutoCompleteGeneric } from "../../components/autoCompleteGeneric/AutoCompleteGeneric"
import Grid from '@mui/material/Grid';



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
            name: "copo de agua fria"
        },
        {
            id: 5,
            name: "copo de quente"
        },
        {
            id: 5,
            name: "copo de agua vindo direto do açude"
        }
    ]

    return( 

        <div>
            <Typography>

                <h1>Criando autocomplete</h1>

                <Grid container spacing={1.5} >

                    <Grid item xs={8}>
                    <AutoCompleteGeneric name='Nome' data={produtos}  />
                    </Grid>
                 
                    <Grid item xs={4}>
                    <AutoCompleteGeneric name='Nome' data={produtos}  />
                    </Grid>

                    <Grid item xs={6}>
                    <AutoCompleteGeneric name='Nome' data={produtos}  />
                    </Grid>
                 
                    <Grid item xs={6}>
                    <AutoCompleteGeneric name='Nome' data={produtos}  />
                    </Grid>

                    <Grid item xs={4}>
                    <AutoCompleteGeneric name='Nome' data={produtos}  />
                    </Grid>
                 
                    <Grid item xs={8}>
                    <AutoCompleteGeneric name='Nome' data={produtos}  />
                    </Grid>

                    <Grid item xs={10}>
                    <AutoCompleteGeneric name='Nome' data={produtos}  />
                    </Grid>
                 
                    <Grid item xs={2}>
                    <AutoCompleteGeneric name='Nome' data={produtos}  />
                    </Grid>


                </Grid>

            </Typography>
        </div>

    )
}

import '../textFieldGeneric/TextFieldGeneric.css'

import { GoSearch } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'



export const TextFieldGeneric = (props: any) => {

    const data = props.data

    const [inputSearch, setInputSearch] = useState('')
    const [filterItens, setFilterItens] = useState([])


    const handleFilter = (e: any) => {

        setInputSearch(e.target.value)

        const newFilter = data.filter((value: any) => {
            return value.name.toLowerCase().includes(inputSearch.toLowerCase())
        })

        setFilterItens(newFilter)

        if(inputSearch.length < 2){
            setFilterItens([])
        }
    }

    const handleClickItem = (item: any) => {
        setFilterItens([])
        setInputSearch(item.name)
    }

    const clearInput = () => {
        setFilterItens([])
        setInputSearch("")
    }

    return(
        <div>
            
            <div className='autocomplete-input'>
                
                <IconContext.Provider value={{color: "#696969", size: "20px"}}>
                    <GoSearch />    
                    <input type="text" placeholder={props.name} value = {inputSearch} onChange={handleFilter}  />

                    {inputSearch !== "" ?
                     <AiOutlineClose onClick={clearInput}/>
                      : "" }
                </IconContext.Provider>

            </div>
            
            {filterItens !== null &&
                <div className='autocomplete-result'>

                    {filterItens.map((item: any) => (
                        <div className='autocomplete-result-item' key={item.id} onClick={() => handleClickItem(item)}>
                            <IconContext.Provider value={{color: "#696969", size: "15px"}}>
                                <GoSearch />
                                <p>{item.name}</p>
                            </IconContext.Provider>
                        </div>
                    ))}

                </div>
            }

        </div>
    )
}
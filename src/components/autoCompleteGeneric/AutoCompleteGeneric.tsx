
import './AutoCompleteGeneric.css'

import { GoSearch } from 'react-icons/go'
import { IconContext } from 'react-icons/lib'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'



export const AutoCompleteGeneric = (props: any) => {

    const data = props.data

    let itemSelected = -1

    const [inputSearch, setInputSearch] = useState('')
    const [filterItens, setFilterItens] = useState<any>([])

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

    const keyBoardEvents = (e: any) => {
        if(e.key === "Enter"){
            
            handleClickItem(filterItens[itemSelected])
        }
        if(e.key === "ArrowDown"){

            if(filterItens[itemSelected+1].name){
                itemSelected++
            }

            document.getElementById(filterItens[itemSelected]?.name)?.focus()
        }
        if(e.key === "ArrowUp"){

            if(filterItens[itemSelected-1].name){ 
                itemSelected--
            }

            document.getElementById(filterItens[itemSelected]?.name)?.focus()
        }
    }

    return(
        <div className='autocomplete'>
            
            <div className='autocomplete-input'>
                
                <IconContext.Provider value={{color: "#2B7C41", size: "20px"}}>
         
                    <input id='input' type="text" value = {inputSearch} onChange={handleFilter} onKeyDown={keyBoardEvents} />
                    <label htmlFor="input">{props.name}</label>

                    {inputSearch !== "" ?
                     <AiOutlineClose onClick={clearInput}/>
                      : "" }

                    {inputSearch === "" && <GoSearch />}  

                </IconContext.Provider>

            </div>
            
            {filterItens !== null &&
                <div className='autocomplete-result'>

                    {filterItens.map((item: any, index: any) => (
                        <div className='autocomplete-result-item' id={filterItens[index].name} key={item.id} onClick={() => handleClickItem(item)} contentEditable onKeyDown={keyBoardEvents}>

                            <IconContext.Provider value={{color: "#2B7C41", size: "17px"}}>

                                <p>{item.name}</p>

                                <GoSearch className='autocomplete-icon'/>

                            </IconContext.Provider>

                        </div>
                    ))}

                </div>
            }

        </div>
    )
}
import { useState } from 'react'
 
function SingleMenuComponent(props){
    console.log('props ->', props)
    return (
        <>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        </>
    )

}
export default function Home() {
    const [menuItems, setMenuItems] = useState([])

    //FETCH DATA
    //GET ARRAY OF OBJECTS
    //RENDER EACH OBJECT
    //3.1 create a state variable
    //3.2 put inside state variable the array of objects
    //3.3 display each item in DOM
    // 3.3.1 map ove rhte array of objects
    // 3.3.2 return each item so that it displays on the browser

    console.log('menuItems ->', menuItems)

    const handleBtnClick = () => {
        console.log('hey class from a function')

        fetch(`https://codice-boca.web.app/menu`)
            .then(res => res.json()) // contacting the API
            .then(data => setMenuItems(data))                          //
            .catch(x => console.error(x))


    }
    return (
        <>
            
            <h2>I'm Home Component</h2>
            <button onClick={() => handleBtnClick()}>get data</button>
            {menuItems && menuItems.map((singleItem) => {
                console.log('singleItem ->', singleItem)

                 
                return (
                    <>
                        <SingleMenuComponent title={singleItem.title}description={singleItem.description}/>
                    </>
                )
            })}


        </>
    )

}
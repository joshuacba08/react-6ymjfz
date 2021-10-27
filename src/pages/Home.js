import React from 'react'
import Hero from '../components/Hero'
import ItemDetailContainer from '../components/ItemDetailContainer'
import ItemListContainer from '../components/ItemListContainer'

const Home = () => {
    return (
        <main>
            <Hero title="El Rey de la Cerveza" />
            <ItemListContainer />
            <ItemDetailContainer id={1} />    
        </main>
    )
}

export default Home

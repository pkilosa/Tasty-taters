import React, { useCallback, useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { fetchItem } from '../reducks/items/operations';
import { getItems } from '../reducks/items/selectors';
import Header from '../components/header';
import Footer from '../components/footer';
import Item from '../components/item'


const Home = ()=>{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchItem())
        
    },[])
    const items  = useSelector(getItems)
    console.log(items.items)
    return(
        <>
        <Header />
        <div class="container">
            {items.items && items.items.length > 0 && items.items.map(item=>(
                <Item  item={item} key= {item.id}/>
            ))}
            


    </div>
    <Footer />
    </>
    )
}
export default Home
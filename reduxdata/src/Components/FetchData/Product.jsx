import { Box,Grid, GridItem,Image,Text,Button, Select } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../../Redux/Action/FetchApi'
import "./Product.css"

const Product = () => {
 const dispatch=useDispatch()
 const fetchdata=useSelector((state)=>state.fetchdataapi.fetchdata)
// console.log(fetchdata);


const getdatafromapi=async()=>{
   const res= await fetch("https://dotandkey-api.vercel.app/posts")
   const data= await res.json()
   dispatch(fetchApi(data))
   console.log(data)
}
useEffect(()=>{
    getdatafromapi()
},[])

  return (
    <div >
   
                <Select placeholder='sort by price'>
                    <option value='lth'>Low to High</option>
                    <option value='htl'>High to Low</option>
                </Select>
    {fetchdata && fetchdata.map((el)=>{
        const {id,name,image,mrp,rating}=el
        return (
            <Box key={id} ml='20px'>
            
            <Grid templateColumns={'repeat(4,1fr'} >
             <GridItem>
             <Box key={id} className='grid-data' >
          <Image src={image} alt={name} />
          <Text>{name}</Text>
          <Box justifyContent={'space-evenly'}>
            <Text>{mrp}</Text>
            <Text>{rating}</Text>
          </Box>
          <Button>Add to cart</Button>
            </Box>
             </GridItem>
            </Grid>
            </Box>
           

          
        )
    })}
    </div>
  )
}

export default Product;
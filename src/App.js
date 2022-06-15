import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { increaseCounter } from './redux/action';
import './App.css'

function App() {
  const [cart, setCart] = useState([{ item: 0, product: 0 }]);
  const [totalItem, setTotalItem] = useState(0);
  const value = useSelector(state => state);
  const dispatch = useDispatch();

  // Increase Product
  const handleClick = () => {
    const add = {
      item: 0,
      product: 0
    }
    setCart([...cart, add])
    dispatch(increaseCounter([...cart, add]))

  }

  // Increase Item 
  const handleSetItem = (index) => {
    let bee;
    const item = [...cart];
    item[index].item = item[index].item + 1;
    setCart(item);
    dispatch(increaseCounter(item))
    var sum = item.reduce(function (a, b) {
      return a + b.item;
    }, 0);

    setTotalItem(sum)

  }

  // Remove Item
  const handleRemoveItem = (index) => {
    const item = [...cart];
    if (item[index].item > 0) {
      item[index].item = item[index].item - 1;
      setCart(item);
      dispatch(increaseCounter(item))
    }
  }


  // Remove Product
  const handlRemove = (index) => {
    const item = [...cart];
    const data = cart.filter((item, i) => i !== index);
    setCart(data)
    var sum = cart.reduce(function (a, b) {
      return a - b.item;
    }, 0);

    setTotalItem(sum)
    dispatch(increaseCounter(data))
  }

  const handleReset = () => {
    setCart([{ item: 0, product: 0 }]);
    setTotalItem(0)
    dispatch(increaseCounter([{ item: 0, product: 0 }]))
  }
  return (
    <>
      <div className='cartBox'>
        <ShoppingCartIcon style={{ width: '100px', height: '100px' }} />
        <div>
          <Stack direction="row" spacing={1}>
            <Chip label={cart.length} /> Product
            <Chip label={Math.abs(totalItem)} variant="outlined" /> Items
          </Stack>
        </div>
      </div>
      <div className='butt'>
        <Button variant="contained" color="success" onClick={() => handleReset()}>
          <AutorenewIcon />
        </Button>
        <Button style={{ marginLeft: '3px' }} variant="contained" href="#contained-buttons" onClick={() => handleClick()}>
          <AddCircleOutlineIcon />
        </Button>
      </div>
      {
        cart.map((list, i) => {
          return (
            <div style={{ display: 'flex', margin: '2px', justifyContent: 'center', marginTop: '10px' }}>
              <Button style={list.item === 0 ? { marginLeft: '3px', backgroundColor: '#FFD700' } : { marginLeft: '3px' }} variant="contained" href="#contained-buttons">
                {list.item}
              </Button>
              <Button style={{ marginLeft: '3px', backgroundColor: '#2C3539' }} variant="contained" href="#contained-buttons" onClick={() => handleSetItem(i)}>
                <AddCircleOutlineIcon />
              </Button>
              <Button style={{ marginLeft: '3px', backgroundColor: '#008B8B' }} variant="contained" href="#contained-buttons" onClick={() => handleRemoveItem(i)}>
                <RemoveCircleOutlineIcon />
              </Button>
              <Button style={{ marginLeft: '3px' }} color="error" variant="contained" href="#contained-buttons" onClick={() => handlRemove(i)}>
                <DeleteOutlineIcon />
              </Button>
            </div>
          )
        })
      }
    </>
  );
}

export default App;

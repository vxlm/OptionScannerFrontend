import React from 'react'
import { useState } from 'react'

export const AddOption = ({ onAdd }) => {
  const [ticker, setTicker] = useState('')
  const [strike, setStrike] = useState('')
  const [price, setPrice] = useState('')
  const onSubmit = e => {
    e.preventDefault()
    onAdd({ ticker, strike, price })
    setTicker('')
    setStrike('')
    setPrice('')
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Ticker</label>
        <input
          type='text'
          value={ticker}
          onChange={e => setTicker(e.target.value)}
          placeholder='Add Ticker'
        />
      </div>
      <div className='form-control'>
        <label>Strike</label>
        <input
          type='text'
          value={strike}
          onChange={e => setStrike(e.target.value)}
          placeholder='Add Strike'
        />
      </div>
      <div className='form-control'>
        <label>Price</label>
        <input
          type='text'
          value={price}
          onChange={e => setPrice(e.target.value)}
          placeholder='Add Price'
        />
      </div>
      <input type='submit' value='Save Option' />
    </form>
  )
}

export default AddOption

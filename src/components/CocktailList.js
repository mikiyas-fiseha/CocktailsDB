import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { loading, Cocktails } = useGlobalContext()
  console.log(Cocktails)
  if (loading) {
    return <Loading />
  }
  if (Cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      {Cocktails.id}
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {
          Cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />
          })
        }

      </div>
    </section>
  )
}

export default CocktailList

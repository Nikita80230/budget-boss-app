import React from 'react'
import dateSwitcherLeft from '../../img/dateSwitcherLeft.png'
import dateSwitcherRight from '../../img/dateSwitcherRight.png'
import { StyledCategoriesList } from './Styled'

const CategoriesList = () => (
  <StyledCategoriesList>
    <div className='transactionSwitcher'>
      <button className='transactionSwitcherLeft' type='button'>
        <img src={dateSwitcherLeft} alt='transactionSwitcherLeft' />
      </button>
      <span className='transactionSwitcherTitle'>Expenses</span>
      <span className='transactionSwitcherTitle' hidden>
        Income
      </span>
      <button className='transactionSwitcherRight' type='button'>
        <img src={dateSwitcherRight} alt='transactionSwitcherRight' />
      </button>
    </div>
    <div className='categoryList'>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>

        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
      <div className='categoryItem'>
        <span className='categoryItemValue'>1000 UAH</span>
        <div className='categoryItemImgThumb'>
          <img className='categoryItemImg' src='' alt='' />
        </div>
        <span className='categoryItemText'>Food</span>
      </div>
    </div>
  </StyledCategoriesList>
)

export default CategoriesList

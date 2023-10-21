import React from 'react'
import { StyledTransactionTable } from './Styled'
import removeIcon from '../../img/removeIcon.png'

const TransactionTable = () => (
  <StyledTransactionTable>
    <div className='table'>
      <div className='tableHead'>
        <div className='tableHeadBox date'>Date</div>
        <div className='tableHeadBox description'>Description</div>
        <div className='tableHeadBox category'>Category</div>
        <div className='tableHeadBox sum'>Sum</div>
        <div className='tableHeadBox removeItemBtn' />
      </div>
      <div className='tableBody'>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
        <div className='tableBodyRow'>
          <div className='tableBodyBox date'>26.12.1995</div>
          <div className='tableBodyBox description'>panda</div>
          <div className='tableBodyBox category'>Animals</div>
          <div className='tableBodyBox sum'>1000$</div>
          <div className='tableBodyBox removeItemBtn'>
            <button type='button'>
              <img src={removeIcon} alt='removeIcon' />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* <table className='table'>
      <thead className='thead'>
        <tr className='theadTr'>
          <th className='thDate'>Date</th>
          <th className='thDescription'>Description</th>
          <th className='thCategory'>Category</th>
          <th className='thSum'>Sum</th>
        </tr>
      </thead>

      <tbody className='tableBody'>
        <tr>
          <td>26.12.1995</td>
          <td>panda</td>
          <td>Animals</td>
          <td>1000$</td>
        </tr>
        <tr>
          <td>26.12.1995</td>
          <td>panda</td>
          <td>Animals</td>
          <td>1000$</td>
        </tr>
        <tr>
          <td>26.12.1995</td>
          <td>panda</td>
          <td>Animals</td>
          <td>1000$</td>
        </tr>
      </tbody>
    </table> */}
  </StyledTransactionTable>
)

export default TransactionTable

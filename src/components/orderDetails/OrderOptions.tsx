import { useState } from 'react'
import Ship from './Ship'
import Sit from './Sit'
import Take from './Take'

const OrderOptions = ({ theOption }: any) => {
    const [orderOptions, setOrderOptions] = useState('sit')
    const [orderOption, setOrderOption] = useState(Sit)

    return (
        <>
            <div className="d-flex mt-3 mb-3">
                <label htmlFor="orderOptions">אפשרויות הזמנה: &nbsp;</label>
                <select className='form-select w-25'
                    value={orderOptions}
                    name='orderOptions'
                    id='orderOptions'
                    onChange={(e) => {
                        const option = e.currentTarget.value;
                        setOrderOptions(option)
                        theOption(option)

                        switch (option) {
                            case 'sit': setOrderOption(Sit); break;
                            case 'take': setOrderOption(Take); break;
                            case 'ship': setOrderOption(Ship); break;
                        }
                    }}
                    style={{ backgroundColor: '#fbf8ee' }}
                >
                    <option value="sit">ישיבה במקום</option>
                    <option value="take">איסוף עצמי</option>
                    <option value="ship">משלוח</option>
                </select>
            </div>

            {orderOption}
        </>
    )
}

export default OrderOptions
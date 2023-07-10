import { FormEvent } from 'react';

import { QuantityProps } from '@/types/products';
import NumberInput from '../NumberInput/NumberInput';

const Quantity = (props: QuantityProps) => {
    const { id, quantity, updateCart } = props;

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const inputs = Array.from(currentTarget.elements);
        //@ts-ignore
        const quantityOfItem = inputs.find(input => input?.name === 'quantity')?.value;

        updateCart({
            price: id,
            quantity: quantity && parseInt(quantityOfItem),
        });
    };
    return (
        <form onSubmit={onSubmit}>
            {/* <input type="number" name="quantity" min={0} defaultValue={quantity} /> */}
            <NumberInput name={'quantity'} value={quantity} min={0} />
            {/* <button type="submit">Update</button> */}
        </form>
    );
};

export default Quantity;

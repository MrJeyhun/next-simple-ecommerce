import styles from '@/styles/number-input.module.css';
import { NumberInputProps } from '@/types/products';
import { useEffect, useState } from 'react';

export default function NumberInput(props: NumberInputProps) {
    const { name, value, min, max } = props;

    const stepperUp = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('increase');
        const target = e.target as HTMLInputElement;
        target?.parentNode?.parentNode?.querySelector('input')?.stepUp();
    };

    const stepperDown = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('decrease');

        const target = e.target as HTMLInputElement;
        const value = Number(target?.parentNode?.parentNode?.querySelector('input')?.value);
        const min = Number(target?.parentNode?.parentNode?.querySelector('input')?.min);
        if (value > min) {
            target?.parentNode?.parentNode?.querySelector('input')?.stepDown();
        }
    };

    return (
        <div className={styles.numInput}>
            <input className={styles.customInput} name={name} type="number" min={min} max={max} defaultValue={value} />
            <div className={styles.buttonWrapper}>
                <button onClick={e => stepperUp(e)}>
                    <i className={styles.material_icons}>+</i>
                </button>
                <button onClick={e => stepperDown(e)}>
                    <i className={styles.material_icons}>-</i>
                </button>
            </div>
        </div>
    );
}

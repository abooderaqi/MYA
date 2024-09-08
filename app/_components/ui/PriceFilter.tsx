"use client"

import { SfAccordionItem, SfCounter, SfIconChevronLeft, SfListItem, SfRadio } from '@storefront-ui/react';
import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const details = [
    { id: 'pr1', label: 'Under $24.99', value: '0-25', counter: 123 },
    { id: 'pr2', label: '$25.00 - $49.99', value: '25-49', counter: 100 },
    { id: 'pr3', label: '$50.00 - $99.99', value: '50-99', counter: 12 },
    { id: 'pr4', label: '$100.00 - $199.99', value: '100-199', counter: 3 },
    { id: 'pr5', label: '$200.00 and above', value: '100-9999', counter: 18 },
];

export default function PriceFilter() {
    const [opened, setOpened] = useState(true);
    const [price, setPrice] = useState<string | null>(null);
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
            if (value === undefined || value === "") return ""
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )
    useEffect(() => {
        if (price !== null)
            router.push(
                pathname + "?" + createQueryString("pricerange", price as string)
            )
    }, [price])
    return (
        <SfAccordionItem
            open={opened}
            onToggle={() => setOpened(!opened)}
            className="w-full md:max-w-[376px]"
            summary={
                <div className="flex justify-between p-2 mb-2">
                    <p className="mb-2 font-medium typography-headline-5">Price</p>
                    <SfIconChevronLeft className={classNames('text-neutral-500', `${opened ? 'rotate-90' : '-rotate-90'}`)} />
                </div>
            }
        >
            <fieldset name="radio-price">
                {details.map(({ label, value, counter }) => (
                    <SfListItem
                        key={value}
                        as="label"
                        size="sm"
                        disabled={counter === 0}
                        className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                            'font-medium': value === price,
                        })}
                        slotPrefix={
                            <SfRadio
                                disabled={counter === 0}
                                className="flex items-center"
                                value={value}
                                checked={price === value}
                                name="radio-price"
                                onChange={() => setPrice(price === value ? null : value)}
                            />
                        }
                    >
                        <p>
                            <span className="mr-2 text-sm">{label}</span>
                            <SfCounter size="sm">{counter}</SfCounter>
                        </p>
                    </SfListItem>
                ))}
            </fieldset>
        </SfAccordionItem>
    );
}
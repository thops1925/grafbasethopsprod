import Link from 'next/link'
import React from 'react'

type ColumnProps = {
    title: string,
    links: Array<string>
}
const FooterCol = ({ title, links }: ColumnProps) => (
    <div className=' flex-1 flex flex-col gap-3 text-sm min-w-max'>
        <h4 className='font-semibold'>{title}</h4>
        <ul className='flex flex-col gap-2 font-normal'>
            {links.map(item => (
                <Link href='/' key={item} > {item} </Link>
            ))}
        </ul>
    </div>
)

export default FooterCol
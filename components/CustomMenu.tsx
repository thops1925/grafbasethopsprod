import { Fragment } from 'react'
import { Menu } from '@headlessui/react'
import Image from 'next/image';

type Props = {
    title: string;
    filter: Array<string>;
    state: string;
    setState: (value: string) => void;


}
const CustomMenu = ({ title, state, setState, filter }: Props) => {
    return (
        <div className='flex justify-start flex-col items-start w-full gap-7 relative'>
            <label htmlFor={title} className='w-full text-gray-100'>
                {title}
            </label>
            <Menu as='div' className='self-start relative'>
                <div>
                    <Menu.Button
                        className='flex items-center justify-center gap-4 w-full rounded-md bg-light-white-100 p-4 text-base outline-none capitalize'>
                        {state || 'Select a Category'}
                        <Image
                            src='/arrow-down.svg'
                            width={10}
                            height={5}
                            alt='arrow down'
                        />
                    </Menu.Button>
                </div>
                <Menu.Items className="flex items-star justify-start  flex-col absolute left-0 mt-2 xs:min-w-[300px] w-fit max-h-64 origin-top-right rounded-xl bg-white border border-nav-border shadow-menu overflow-y-auto">
                    {filter.map((tag) => (
                        <Menu.Item key={tag}>
                            <button
                                type='button'
                                value={tag}
                                className='text-left w-full px-5 py-2 text-sm hover:bg-light-white-100 self-start whitespace-nowrap capitalize'
                                onClick={(e) => setState(e.currentTarget.value)}
                            >
                                {tag}
                            </button>
                        </Menu.Item>
                    ))}

                </Menu.Items>

            </Menu>
        </div>
    )
}

export default CustomMenu
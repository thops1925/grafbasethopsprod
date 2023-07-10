import React from 'react'

type Props = {
    type?: string;
    title: string;
    placeholder: string;
    state: string;
    isTextArea?: boolean;
    setState: (value: string) => void;


}
const FormField = ({ type, title, placeholder, state, isTextArea, setState }: Props) => {
    return (
        <div className='flex items-start justify-start flex-col w-full gap-4'>
            <label className='w-full text-gray-100 '>
                {title}
            </label>
            {isTextArea ? (
                <textarea
                    placeholder={placeholder}
                    value={state}
                    required className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    onChange={(e) => setState(e.target.value)}
                >

                </textarea>
            ) : (
                <input
                    type={type || "text"}
                    placeholder={placeholder}
                    value={state}
                    required className='w-full outline-0 bg-light-white-100 rounded-xl p-4'
                    onChange={(e) => setState(e.target.value)}
                />
            )}
        </div>
    )
}

export default FormField
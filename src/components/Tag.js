import React from 'react'

function Tag({ tag }) {
    return (
        <>
            <div className='py-2 bg-yellow-500 text-center text-slate-400 text-xs font-bold tracking-wide font-sans subpixel-antialiased'>{tag}</div>
        </>
    )
}

export default Tag
import React from 'react'

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto'>
            <div className='d-flex align-items-center w-100 mx-auto '>
                <div>
                    <p className='mb-2 text-uppercase'>
                        Error 404
                    </p>
                    <h1 className='mb-4 text-left'>
                        Oops! The page you're looking for isn't here.
                    </h1>
                    <p className='mb-5 text-left'>
                        You might have the wrong address, or the page may have moved.
                    </p>
                    <button className='w-50 mb-2 py-2 px-3 text-white mt-3 bg-primary '>
                        Back to homepage
                    </button>
                    <button className='w-50 mb-2 py-2 px-3 text-white mt-3 bg-primary'>
                        Contact us
                    </button>
                </div>
                <div>
                    <div className='w-full h-full bg-gray-200 rounded-lg'>
                        <img
                            src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound
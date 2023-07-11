import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Table from '../../components/table/table';
import Footer from '../../components/footer/Footer';


function Home() {
  return (
    <div className='w-full flex flex-col h-full' >
        <header className=' shadow-lg w-full'>
            <Navbar />
        </header>
        <section className='py-8 px-5 md:py-12 md:px-10 bg-blue-600'>
            <div className='w-full flex flex-row justify-center items-center text-center'>
                <h1 className='text-white font-bold'>BID OPPORTUNITIES</h1>
            </div>
        </section>
        <section className='p-5 md:p-10 bg-white'>
            <div className='w-full flex flex-row gap-4 first-letter:justify-center items-center h-auto'>
                <div className='w-4/5 text-center px-10 py-11 bg-blue-300 h-48'>
                    <p>Presented here are forthcoming prequalifications or bid opportunities 
                        from esteemed corporate members of Rivers State PPA, accompanied by concise 
                        description that have been thoughtfully provided. Kindly click on the respective 
                        business opportunities to access comprehensive details.
                    </p>
                </div>
                <div className='rounded-xl shadow-xl flex flex-col w-1/5 h-48'>
                    <button type="button" className='w-full bg-blue-100 hover:bg-blue-300 px-3 py-1 shadow-md rounded-t-xl text-blue-800 hover:text-white text-sm mb-1.5'>
                        Login
                    </button>
                    

                    <div className='w-full h-full flex flex-col justify-end items-center p-6 pt-11 corporate-reg rounded-b-xl '>
                        <div className='h-full flex flex-col items-center justify-center gap-3'>
                            <p className='text-white font-bold text-sm text-center'>
                                Contractor Registration
                            </p>
                            <button type="button" className='w-full bg-blue-100 hover:bg-blue-300 px-3 py-1 shadow-md rounded-xl text-blue-800 hover:text-white text-sm mb-1.5'>
                                Login
                            </button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
        <section className='p-5 md:p-10 bg-white h-auto'>
            <Table />
        </section>
        <footer className='p-5 md:p-10 bg-white'>
            <Footer />
        </footer>
       
    </div>
  )
}

export default Home
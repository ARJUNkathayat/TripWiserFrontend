import React from 'react'
import { CometCard } from './ui/CometCard'
import NavbarDemo from './resizable-navbar-demo'
import uk1st from '@/assets/uk1st.png'
import uk2nd from "@/assets/uk2nd.png"
import uk3rd from "@/assets/uk3rd.png"

const DetailInfo = () => {
  return (
    <div className='bg-purple-700 '>
        <NavbarDemo/>
        {/* first div */}
        <div className=' bg-red-400 h-[50rem] pl-10 pt-5'>
            <div className='flex justify-between h-[13rem]'>
                            <div className='w-[40%] bg-amber-500'> 
                                <h1 className='font-bold text-4xl'>Bali,Indonesia</h1>
                                <h3>An immersive island Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit. Tenetur, nihil magni, ullam aspernatur, quidem non officia impedit saepe facilis unde cumque possimus minima expedit
                                    a earum sit hic esse sint quibusdam.</h3>
                                
                                 </div>
                            <div className='w-[60%] bg-amber-300 pl-[4rem] py-3'>
                               
                    
                         <CometCard imageSrc={uk1st}   width={600} imageHeight='9rem'/>
                            </div>
            </div>

            <div className='bg-violet-500 h-[35rem] flex'>
                <div className='w-[75%] bg-amber-400 h-[95%] flex pt-5 pl-5'>
                   

                    
                         <CometCard imageSrc={uk2nd}   width={400} imageHeight='20rem'/>
                    <div className='gap-20 pl-5 '>
                     
                    
                         <CometCard imageSrc={uk3rd}   width={500} imageHeight='10rem'/>
                          <div className='mt-10'>
                            
                         <CometCard imageSrc={''}   width={500} imageHeight='10rem'/>
                          </div>
                         

                    </div>
                </div>
                <div>hhhhhh</div>

            </div>

        </div>
        {/* second div */}
        <div>
            {/* Header filter */}

            <div></div>
            {/* all cntent and card filter */}

            <div></div>
        </div>
        {/* third divv */}
        <div></div>
         
    </div>
   
  )
}

export default DetailInfo
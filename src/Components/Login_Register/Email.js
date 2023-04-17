import React from 'react'

const Email = (props) => {
  return (
    <div className='flex items-center justify-center flex-col w-full h-screen'>
    
     <div className="bg-green-100 dark:bg-gray-700 border-t-4 border-green-500 rounded-b text-green-950 px-4 py-3 mx-4 shadow-md" role="alert">
     <div className="flex">
       <div className="py-2"><svg className="fill-current h-6 w-6 text-green-500 mx-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
       <div>
         <p className="font-bold py-2">{props.t('mail.1')}</p>
         <p className="text-sm py-2">{props.t('mail.2')}</p>
       </div>
     </div>
     </div>
   </div>
  ) 
}

export default Email

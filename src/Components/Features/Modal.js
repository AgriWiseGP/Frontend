import React from 'react'
const Popup = (props) => {
  return (
    //    <Modal
    //     show={props.visible}
    //     onClose={()=>props.setVisible(false)}
    //     className="h-full w-full relative	"
    //   >
    //     <div className='top-50 left-50 -translate-x-2/4'>
    //     <Modal.Header>
    //       <p className="text-xl font-semibold text-gray-900 dark:text-white rtl:pl-8">
    //         {props.title}
    //       </p>
    //     </Modal.Header>
    //     <Modal.Body>
    //     <div className="py-2 space-y-6">
    //       <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-left rtl:text-right">
    //         your plant has disease ...
    //       </p>
    //     </div>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button onClick={()=>props.setVisible(false)}
    // className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm dark:bg-green-950 dark:hover:bg-green-700 dark:focus:ring-green-800">
    //         Done
    //         </Button>
    //     </Modal.Footer>
    //     </div>
    //   </Modal>
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
    >
      <div className="relative w-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {props.title}
            </h3>
            <button
              type="button"
              name="close"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-left rtl:text-right">
              {props.content}
            </p>
          </div>
          <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="defaultModal"
              type="button"
              name="done"
              className="bg-[#17A267] hover:bg-green-400 text-white focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {props.t("done.1")}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popup

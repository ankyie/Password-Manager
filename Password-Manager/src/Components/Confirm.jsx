import React, { useContext, useState, useEffect, useRef } from "react";
import { confirmContext } from "../context/confirm";

const Confirm = () => {
    const [graybg, setGraybg] = useState('')

    const Del = useContext(confirmContext)
    useEffect(() => {
        setGraybg('bg-[#00000066]')
    },)
    

    function DelYes(){
        Del.setYesOrNo(true)
        Del.setDelConfirm("hidden")
        setGraybg('')
    }
    
    function DelNo(){
        Del.setYesOrNo(false)
        Del.setDelConfirm("hidden")
        setGraybg('')
    }

    return (
        <div className={`confirm ${Del.DelConfirm}`}>
            <div className={`fixed z-30 w-screen h-screen ${graybg} fadeIn text-maintext`}>
                <div id="deleteModal" tabIndex="-1" aria-hidden="true" className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center w-full md:inset-0 h-modal md:h-full`}>
                    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative p-4 text-center bg-deletebg border-2 border-themeborder rounded-lg shadow sm:p-5 appear">
                            <button type="button" className="text-themetext absolute top-2.5 right-2.5 bg-transparent hover:bg-primarybg rounded-lg text-sm p-1.5 ml-auto inline-flex items-center duration-300" data-modal-toggle="deleteModal" onClick={() => DelNo()}>
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <svg className="text-themetext dark:text-themetext w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                            <p className="mb-4 text-bodytext">Are you sure you want to delete this item?</p>
                            <div className="flex justify-center items-center space-x-4">
                                <button data-modal-toggle="deleteModal" type="button" className="py-2 px-3 text-sm font-medium text-white hover:bg-black bg-zinc-900 rounded-lg border border-themeborder duration-300" onClick={() => DelNo()}>
                                    No, cancel
                                </button>
                                <button type="submit" className="py-2 px-3 text-sm font-medium text-center text-white bg-red-500 hover:bg-red-600 border border-themeborder rounded-lg duration-300" onClick={() => DelYes()}>
                                    Yes, I'm sure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirm;
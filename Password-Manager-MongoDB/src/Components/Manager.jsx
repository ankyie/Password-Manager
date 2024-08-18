import React, { useState, useEffect, useRef, useContext } from "react";
import Edit from '../assets/edit.svg'
import Delete from '../assets/delete.svg'
import Copy from '../assets/copy.svg'
import Show from '../assets/show.svg'
import Hide from '../assets/hide.svg'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmContext } from "../context/confirm";
import { themeContext } from "../context/theme";

const Manager = () => {

    const Form = useRef()
    const InputURL = useRef()
    const InputUsername = useRef()
    const InputPass = useRef()
    const SaveEdit = useRef()
    const DelID = useRef()

    const ShouldDelete = useContext(confirmContext)
    const Svg = useContext(themeContext)

    const [hidden, setHidden] = useState(true)
    const [passObj, setPassObj] = useState({
        url: "",
        username: "",
        password: "",
    })
    const [passList, setPassList] = useState(getList)
 
    async function getList() {
        let url = "http://localhost:3000/"
        let res = await fetch(url)
        const passwords = await res.json();
        let list = passwords;
        setPassList(list)
        // return list;
    }
    
    // useEffect(() => {
    //   getList();
    // }, [])

    
    // useEffect(() => {
    //     // localStorage.setItem('List', JSON.stringify(passList));
    //     getList()
    // }, [passObj]);

    function HandleHidden() {
        if (hidden) {
            setHidden(false)
            InputPass.current.type = "text";
        }
        else {
            setHidden(true)
            InputPass.current.type = "password";
        }
    }
    
    function HandleChange(e){
        setPassObj({...passObj, [e.target.name]:e.target.value})
    }
    
    // ###Alternate HandleChange 
    // function HandleChange(e) {
        //     // setPassObj({})
        //     if (InputURL.current.value.length>=3 && InputUsername.current.value.length>=3 && InputPass.current.value.length>=3){
            //         SaveEdit.current.style.cursor = "pointer"
    //     }
    //     else{
    //         SaveEdit.current.style.cursor = "not-allowed"
    //     }
    //     let changedvalue = {...passObj};
    //     changedvalue.url = InputURL.current.value;
    //     changedvalue.username = InputUsername.current.value;
    //     changedvalue.password = InputPass.current.value;
    //     RunPassObj(changedvalue);
    // }

    // ###Original HandleChange 
    // function HandleChange(e) {
    //     // setPassObj({})
    //     if (InputURL.current.value.length>=3 && InputUsername.current.value.length>=3 && InputPass.current.value.length>=3){
    //         SaveEdit.current.style.cursor = "pointer"
    //     }
    //     else{
    //         SaveEdit.current.style.cursor = "not-allowed"
    //     }
    //     let changedvalue = {...passObj};
    //     if (e.target.name === "url") {
    //         changedvalue.url = e.target.value
    //         setPassObj(changedvalue);
    //     }
    //     if (e.target.name === "username") {
    //         changedvalue.username = e.target.value
    //         setPassObj(changedvalue);
    //     }
    //     if (e.target.name === "password") {
    //         changedvalue.password = e.target.value
    //         console.log("Password change called")
    //         setPassObj(changedvalue);
    //     }
    // }

    // ###alternate HandlePaste
    // function HandlePaste(e){
    //     if (InputURL.current.value.length>=3 && InputUsername.current.value.length>=3 && InputPass.current.value.length>=3){
    //         SaveEdit.current.style.cursor = "pointer"
    //     }
    //     else{
    //         SaveEdit.current.style.cursor = "not-allowed"
    //     }
    //     let changedvalue = {...passObj};
    //     changedvalue.url = InputURL.current.value;
    //     changedvalue.username = InputUsername.current.value;
    //     changedvalue.password = InputPass.current.value;
    //     RunPassObj(changedvalue);
    // }

    // ###Original HandlePaste 
    // function HandlePaste(e){
    //     if (InputURL.current.value.length>=3 && InputUsername.current.value.length>=3 && InputPass.current.value.length>=3){
    //         SaveEdit.current.style.cursor = "pointer"
    //     }
    //     else{
    //         SaveEdit.current.style.cursor = "not-allowed"
    //     }
    //     let changedvalue = {...passObj};
    //     if (e.target.name === "url") {
    //         // changedvalue.url = e.target.value
    //         changedvalue.url = InputURL.current.value;
    //         setPassObj(changedvalue);
    //     }
    //     if (e.target.name === "username") {
    //         // changedvalue.username = e.target.value
    //         changedvalue.username = InputUsername.current.value;
    //         setPassObj(changedvalue);
    //     }
    //     if (e.target.name === "password") {
    //         // changedvalue.password = e.target.value
    //         changedvalue.password = InputPass.current.value;
    //         console.log("Password paste called")
    //         setPassObj(changedvalue);
    //     }
    // }

    // useEffect(() => {
    //   console.log(passObj)
    // }, [passObj])

    function HandleCopy(text) {
        // Get the text field
        let copyText = text;

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText);

        // Alert the copied text
        toast.info('Copied!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: { background: '#ff8c00' },
        });
    }

    async function saveList(Obj) {
        let url = "http://localhost:3000/"
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(Obj),
            headers: { "Content-Type": "application/json" },
        })
        getList()
    }

    async function deleteList(ID) {
        let url = "http://localhost:3000/"
        await fetch(url, {
            method: "DELETE",
            body: JSON.stringify({UID: ID}),
            headers: { "Content-Type": "application/json" },
        })
        getList()
    }

    function HandleSave() {
        // event.preventDefault();
        if (InputURL.current.value.length>=3 && InputUsername.current.value.length>=3 && InputPass.current.value.length>=3) {
            if (SaveEdit.current.innerHTML == "Save") {
                setPassObj({...passObj, UID: uuidv4()})
                saveList({...passObj, UID: uuidv4()})
                // setPassList(passList => [...passList, {...passObj, UID: uuidv4()}])
                toast.success('Password Saved 👍🏻', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                Form.current.reset();
                setPassObj({
                    url: "",
                    username: "",
                    password: "",
                })
            }
            else {
                // let AfterDeleteArray = passList.filter((items) => {
                //     return items.UID != DelID.current;
                // })
                // setPassList(AfterDeleteArray)
                deleteList(DelID.current)
                setPassObj({...passObj, UID: uuidv4()})
                saveList({...passObj, UID: uuidv4()})
                // setPassList(passList => [...passList, {...passObj, UID: uuidv4()}])
                toast.success('Password Edited 👍🏻', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                Form.current.reset();
                SaveEdit.current.innerHTML = "Save"
                SaveEdit.current.style.color = "rgba(var(--theme-text))";
                setPassObj({
                    url: "",
                    username: "",
                    password: "",
                })
            }
        }
    }

    function HandleConfirm(UID){
        // console.log(UID)
        DelID.current = UID;
        // console.log(DelID.current)
        ShouldDelete.setDelConfirm("")
    }
    
    useEffect(() => {
        if (ShouldDelete.YesOrNo) {
            HandleDelete();
        }
    }, [ShouldDelete.YesOrNo])
    

    function HandleDelete() {
        // let AfterDeleteArray = passList.filter((items) => {
        //     return items.UID != DelID.current;
        // })
        // setPassList(AfterDeleteArray)
        deleteList(DelID.current)
        ShouldDelete.setYesOrNo(false)
        toast.error('Password Deleted!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    function HandleEdit(UID) {
        // console.log(UID);
        let EditObj = passList.filter((items) => {
            return items.UID == UID;
        })[0];
        // console.log(EditObj.url, EditObj.username, EditObj.password,)
        InputURL.current.value = EditObj.url;
        InputUsername.current.value = EditObj.username;
        InputUsername.current.focus();
        InputPass.current.value = EditObj.password;
        DelID.current = EditObj.UID
        setPassObj({...EditObj, UID: uuidv4()});
        // console.log(SaveEdit.current.innerHTML)
        SaveEdit.current.innerHTML = "Edit";
        SaveEdit.current.style.color = "#61ff61";
    }

    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <main className="lg:w-[900px] sm:w-4/5 w=full mx-auto px-1 text-maintext">
                <form action="" className="flex flex-col justify-center gap-5 sm:my-12 my-4" ref={Form}>
                    <input type="text" name="url" placeholder="URL" className="px-5 py-2 rounded-full outline-primary bg-inputbg" ref={InputURL} value={passObj.url} onChange={(e) => HandleChange(e)}/>
                    <div className="credentials flex justify-between gap-4 max-sm:flex-col">
                        <div className="sm:w-[70%] w-full">
                            <input type="text" name="username" placeholder="username" className="w-full px-5 py-2 rounded-full outline-primary bg-inputbg" ref={InputUsername} value={passObj.username} onChange={(e) => HandleChange(e)}/>
                        </div>
                        <div className="sm:w-[30%] w-full relative">
                            <input type="password" name="password" placeholder="password" className={`w-full px-5 pr-12 py-2 rounded-full outline-primary bg-inputbg`} ref={InputPass} value={passObj.password} onChange={(e) => HandleChange(e)}/>
                            <img src={hidden ? Show : Hide} alt="show" onClick={HandleHidden} className={`w-8 p-1 absolute right-2 top-1 cursor-pointer ${Svg.invertSvg}`} />
                        </div>
                    </div>
                </form>
                <div className="submit flex justify-center">
                    <button className={`bg-primary px-7 py-2 rounded-full font-bold text-themetext duration-300 hover:bg-primarybg`} onClick={HandleSave} ref={SaveEdit}>Save</button>
                </div>
                <div>
                    <h2 className="font-bold text-2xl sm:mt-8 mt-4 mb-3 text-bodytext">Your Passwords</h2>
                </div>
                <div className="mb-12">
                    {passList.length==0 && <div className="text-gray-500">Your Passwords will show up here!</div>}
                    {passList.length>0 && <table className="w-full border border-themeborder">
                        <thead className="bg-primary h-10 border-b border-themeborder text-themetext max-sm:text-sm">
                            <tr>
                                <th className="border-r border-themeborder w-[30%]" scope="col">Website</th>
                                <th className="border-r border-themeborder w-[30%]" scope="col">Username</th>
                                <th className="border-r border-themeborder w-[30%]" scope="col">Password</th>
                                <th className="w-[10%]" scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="sm:text-center text-bodytext">
                            {passList.map(items => {
                                return <tr className="border-b border-themeborder" key={items.UID}>
                                    <td className="border-r border-themeborder relative p-1">
                                        <p className="sm:mx-auto w-[70%] break-all max-sm:text-sm"><a href={items.url} target="_blank">{items.url}</a></p>
                                        <button className="copy w-8 p-1 absolute right-0 top-1 rounded-full duration-300 hover:bg-[#ff8c008a]" onClick={() => HandleCopy(items.url)}><img src={Copy} alt="copy" className={`${Svg.BodySvg}`}/></button>
                                    </td>
                                    <td className="border-r border-themeborder relative p-1">
                                        <p className="sm:mx-auto w-[70%] break-all max-sm:text-sm">{items.username}</p>
                                        <button className="copy w-8 p-1 absolute right-0 top-1 rounded-full duration-300 hover:bg-[#ff8c008a]" onClick={() => HandleCopy(items.username)}><img src={Copy} alt="copy" className={`${Svg.BodySvg}`}/></button>
                                    </td>
                                    <td className="border-r border-themeborder relative p-1">
                                        <input type="password" className="tablePasswords sm:mx-auto sm:text-center bg-transparent w-[70%] break-all max-sm:text-sm" value={items.password} disabled />
                                        <button className="copy w-8 p-1 absolute right-0 top-1 rounded-full duration-300 hover:bg-[#ff8c008a]" onClick={() => HandleCopy(items.password)}><img src={Copy} alt="copy" className={`${Svg.BodySvg}`}/></button>
                                    </td>
                                    <td className="flex justify-evenly sm:p-1">
                                        <button className="rounded-full duration-300 hover:bg-[#00ff008f]"><img src={Edit} className={`w-8 p-1 ${Svg.BodySvg}`} alt="Edit" onClick={() => HandleEdit(items.UID)} /></button>
                                        <button className="rounded-full duration-300 hover:bg-[#ff000084]"><img src={Delete} className={`w-8 p-1 ${Svg.BodySvg}`} alt="Delete" onClick={() => HandleConfirm(items.UID)} /></button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </main>
        </div>
    )
}

export default Manager
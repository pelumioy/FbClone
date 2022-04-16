import { useRef, useState } from "react"
import Image from "next/image"
import { addDoc, collection, doc, serverTimestamp} from 'firebase/firestore/lite';
import { useSession } from "next-auth/react"
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid"
import { db } from "../firebase"

function InputBox() {
    const { data: session } = useSession()
    const [imageToPost, setImageToPost] = useState(null)
    const inputRef = useRef(null)
    const filePickerRef = useRef(null)

    const sendPost = (e) => {
        e.preventDefault()
        if (!inputRef.current.value) return;
        addDoc(collection(db, "posts"), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp()
        }).then(doc => {
            if (imageToPost) {
                const uploadTask = storage.ref(`posts/${doc.id}`).putString(imageToPost, 'data_url')

                removeImage()

                uploadTask.on('state_change', null, error => console.group(error),
                () => {
                    storage.ref('posts').child(doc.id).getDownloadUrl().then(url => {
                        db
                    })
                })
            }
        })
        inputRef.current.value = ""
    }

    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result)
        }
    }

    const removeImage = () => {
        setImageToPost(null)
    }

    return (
        <div className="bg-white p-2 shadow-md rounded-2xl text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image 
                   className="rounded-full"
                   src={session.user.image}
                   width={40}
                   height={40}
                   layout="fixed" 
                />
                <form className="flex flex-1">
                    <input className="rounded-full h-11 focus:outline-none flex-grow bg-gray-100 px-5 " 
                    type="text" 
                    ref={inputRef}
                    placeholder={`whats on your mind ${session.user.name}?`} />

                    <button hidden type="submit" onClick={sendPost}>submit</button>

                </form>
                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
                        <img  className="h-10 object-contain" src={imageToPost} alt="" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>
            <div className="flex justify-evenly border-t p-3">
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <VideoCameraIcon className="h-7 text-red-500"/>
                    <p className="text-sm sm:text-sm xl:text-base">Live Video</p>
                </div>
                <div onClick={() => filePickerRef.current.click()} className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <CameraIcon className="h-7 text-green-500"/>
                    <p className="text-sm sm:text-sm xl:text-base">Live Video</p>
                    <input ref={filePickerRef} onChange={addImageToPost} type="file" hidden  />
                </div>
                <div className="flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer">
                    <EmojiHappyIcon className="h-7 text-red-500"/>
                    <p className="text-sm sm:text-sm xl:text-base">Live Video</p>
                </div>

            </div>
        </div>
    )
}

export default InputBox

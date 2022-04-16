import Image from "next/image"
import {UserGroupIcon, ViewGridIcon, ChatIcon, ChevronDownIcon, HomeIcon, BellIcon} from "@heroicons/react/solid"
import {FlagIcon, PlayIcon, ShoppingCartIcon} from "@heroicons/react/outline"
import HeaderIcon from "./HeaderIcon"
import { useSession, signOut } from "next-auth/react"



function Header() {
    const { data: session } = useSession()
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* left */}
            <div className="flex items-center">
                <Image src="https://links.papareact.com/5me" 
                    height={40}
                    width={40}
                    layout="fixed" />
                
                <div className="flex ml-2 items-center rounded-full md:bg-gray-100 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                    </svg>
                    <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 placeholder:text-sm flex-shrink" type="text" placeholder="Search facebook" />
                </div>
            </div>

            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex md:space-x-2 space-x-6">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>

            {/*right*/}
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image 
                    onClick={() => signOut()}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"
                />
                <p className="whitespace-nowrap hidden md:inline-flex font-semibold pr-4">{session.user.name}</p>
                <ViewGridIcon className="icon"  />
                <ChatIcon className="icon" />
                <BellIcon className="icon"  />
                <ChevronDownIcon className="icon" />
            </div>

        </div>
    )
}

export default Header


function HeaderIcon({Icon, active}) {
    return (
        <div className="cursor-pointer md:px-8 sm:h-14 md:hover:bg-gray-100 flex items-center group rounded-xl active:border-b-2 border-blue-500">
          <Icon className={`md:h-5 group-hover:text-blue-500 mx-auto h-5 text-center text-gray-600 ${active && 'text-blue-600'}`}/>   
        </div>
    );
}

export default HeaderIcon;
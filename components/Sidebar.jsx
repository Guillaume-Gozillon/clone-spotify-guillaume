import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  HeartIcon
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='text-gray-500 p-5 text-sm border-r border-gray-900'>
      <div className='space-y-4'>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HomeIcon className='h-5 w-5' />
          <p>Accueil</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <SearchIcon className='h-5 w-5' />
          <p>Rechercher</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <LibraryIcon className='h-5 w-5' />
          <p>Bibliothèque</p>
        </button>

        <hr className='border-t-[2px] border-gray-900' />

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Créer une playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5' />
          <p>Titres likés</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5' />
          <p>Bibliothèque</p>
        </button>
        <hr className='border-t-[0.1px] border-gray-900' />

        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
        <p className='cursor-pointer hover:text-white'>Playliste name...</p>
      </div>
    </div>
  )
}

export default Sidebar

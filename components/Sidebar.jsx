import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div>
      <button>
        <HomeIcon className='h-5 w-5' />
        <p>Home</p>
      </button>
      <button>
        <SearchIcon className='h-5 w-5' />
        <p>Search</p>
      </button>
      <button>
        <LibraryIcon className='h-5 w-5' />
        <p>Your library</p>
      </button>
      <button>
        <PlusCircleIcon className='h-5 w-5' />
        <p>Home</p>
      </button>
    </div>
  )
}

export default Sidebar

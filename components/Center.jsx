import { signOut, useSession } from 'next-auth/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import { shuffle } from 'lodash'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playlistIdState, playlistState } from '../atoms/playlistAtom'
import useSpotify from '../hooks/useSpotify'
import { colors } from '../utils'
import Songs from './Songs'

function Center() {
  const { data: session } = useSession()
  const [color, setColor] = useState(null)
  const spotifyApi = useSpotify()
  const playlistsId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [playlistsId])

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistsId)
      .then(data => {
        setPlaylist(data.body)
      })
      .catch(err => console.log('Something went wrong', err))
  }, [spotifyApi, playlistsId])

  return (
    <div className='flex-grow h-screen overflow-y-scroll scrollbar-hide'>
      <header className='absolute top-5 right-8'>
        <div
          className='flex items-center bg-black text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2'
          onClick={signOut}
        >
          <img
            className='rounded-full w-10 h-10'
            src={session?.user.image}
            alt=''
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className='h-5 w-5' />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img
          className='h-44 w-44 shadow-2xl'
          src={playlist?.images?.[0].url}
          alt=''
        />
        <div>
          <p>Playlist</p>
          <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold'>
            {playlist?.name}
          </h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  )
}

export default Center

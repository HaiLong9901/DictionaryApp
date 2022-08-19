import React, { useEffect, useRef, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaSearch, FaVolumeUp } from 'react-icons/fa'
import { useGetWordQuery } from '../features/api/ApiSlice'
import ReactAudioPlayer from 'react-audio-player'
function Hero() {
  const [input, setInput] = useState('')
  const [word, setWord] = useState('')
  const inputSelect = useRef()
  const handleClick = () => {
    setWord(input)
    console.log(word)
    setInput('')
  }

  const { data: data1, isLoading, isSuccess, isError, error } = useGetWordQuery(word)

  let content

  if (isLoading) {
    if(word.length) content = <p className='text-3xl italic text-secondaryColor'>Loading...</p>
    
  } else if (isSuccess) {
    if (word.length) {
      const dataLoad = data1[0]
      console.log(dataLoad)
      content = (
        <>
          {dataLoad.meanings?.map((mean) => (
            <div className="flex flex-col gap-5 border-b-solid border-b-secondaryColor border-b-2 box-border p-[2rem]">
              <h3 className="text-3xl text-secondaryColor uppercase font-bold">{dataLoad.word}</h3>
              <span className="text-2xl text-primaryColor font-bold italic">{mean.partOfSpeech}</span>
              {dataLoad.phonetics?.map((phonetic) => {
                if (phonetic.sourceUrl) {
                  return (
                    <div className="w-full flex align-top justify-left gap-[4rem] items-center">
                      <span className="text-2xl">{phonetic.audio.search('uk') > 0 ? 'uk' : 'us'}</span>
                      <span className="text-2xl">{phonetic.text}</span>
                      <FaVolumeUp className="text-2xl" />
                      <ReactAudioPlayer className="w-[10rem]" src={phonetic.audio} autoPlay={false} controls />
                    </div>
                  )
                }
              })}
              {mean.definitions?.map((define) => (
                <ul>
                  <li className="list-disc text-2xl">Define: {define.definition}</li>
                  {define.example && <p className='text-2xl italic text-secondaryColor'>Example: {define.example}</p>}
                </ul>
              ))}
            </div>
          ))}
          {}
        </>
      )
    }
  } else if (isError) {
    if (word.length) {
      content = <p>{error.toString()}</p>
    }
  }
  return (
    <div className="text-white">
      <div className="max-w-[800px] my-10 w-full mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-primaryColor font-bold p-2 text-4xl">English new words app</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Learn new words more efficently</h1>
        <div className="flex justify-center md:gap-3 gap-1">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-secondaryColor">Let's try it to</p>
          <TypeAnimation
            sequence={[' learn new words', 2000, 'search words', 4000]}
            speed={45}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            className="md:text-5xl font-bold text-secondaryColor text-xl"
          />
        </div>

        <div className="w-full mt-10 relative">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            onKeyDown={e => {
              console.log(e.key)
              if(e.key === 'Enter') return handleClick()
            }}
            ref={inputSelect}
            type="text"
            className="w-[80%] rounded-[50px] py-4 px-8 text-2xl text-bgColor outline-none"
            placeholder="Type here to search words"
          />
          <button onClick={handleClick} className="text-primaryColor text-3xl absolute right-[6rem] top-4">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto flex flex-col gap-10">{content}</div>
    </div>
  )
}

export default Hero

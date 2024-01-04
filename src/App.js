import { useState, useRef } from "react"
import "./App.css"
// import imgicon from "./img.jpg"
import {
  FaSun,
  BsCloudsFill,
  BsFillCloudDrizzleFill,
  BsFillCloudHazeFill,
  FaCloudRain,
  FaWind,
  WiHumidity,
  IoMdClose,
  CiSearch,
} from "./constants"

function App() {
  const api = "b77d743614c6286f3d5a9c6c8bfd3c5f"

  const sun = <FaSun size={50} />
  const clouds = <BsCloudsFill size={50} />
  const rain = <FaCloudRain size={50} />
  const drizzle = <BsFillCloudDrizzleFill size={50} />
  const haze = <BsFillCloudHazeFill size={50} />

  const ref = useRef(null)
  const inputClick = (e) => {
    if (e.key === "Enter") {
      ref.current.focus()
    }
  }

  const [data, setData] = useState({
    temp: "-150",
    name: "Mars",
    humidity: "≈ 50",
    speed: "≈ 10",
    img: sun,
  })

  /* useEffect(() => {
    const urlfunc = async () => {
      try {
        const resp = await fetch(apiUrl)
        const json = await resp.json()
        setData({
          ...data,
          temp: json.main.temp,
          name: json.name,
          humidity: json.main.humidity,
          speed: json.wind.speed,
        })
        console.log(json)
        // console.log(json.main.temp)
      } catch (err) {
        console.log(err + "error !!!!")
      }
    }
    urlfunc()
  }, []) */

  const [name, setName] = useState("")

  const handleClick = () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${api}&units=metric&lang=ru`

    if (name !== "") {
      const urlfunc = async () => {
        try {
          const resp = await fetch(apiUrl)
          const json = await resp.json()

          /*  if (json.weather[0].main === "Clouds") {
            imgIcon = <BsCloudsFill />
          } else if (json.weather[0].main === "Clear") {
            imgIcon = <FaSun />
          } else if (json.weather[0].main === "Rain") {
            imgIcon = <FaCloudRain />
          } else if (json.weather[0].main === "Drizzle") {
            imgIcon = <BsFillCloudDrizzleFill />
          } else if ((json.weather[0].main === "Misl", "Haze")) {
            imgIcon = <BsFillCloudHazeFill />
          } else {
            imgIcon = <BsCloudsFill />
          } */

          let imgIcon = ""
          if (json.weather[0].main === "Clouds") {
            imgIcon = clouds
          } else if (json.weather[0].main === "Clear") {
            imgIcon = sun
          } else if (json.weather[0].main === "Rain") {
            imgIcon = rain
          } else if (json.weather[0].main === "Drizzle") {
            imgIcon = drizzle
          } else if ((json.weather[0].main === "Misl", "Haze")) {
            imgIcon = haze
          } else {
            imgIcon = clouds
          }

          setData({
            ...data,
            temp: json.main.temp,
            name: json.name,
            humidity: json.main.humidity,
            speed: json.wind.speed,
            img: imgIcon,
          })
          // setName('') что б после ввода города input был пуст
          console.log(json)
          // console.log(json.weather[0].main)
        } catch (err) {
          console.log(err + "error !!!!")
        }
      }
      urlfunc()
    }
  }

  //очистка поля ввода
  const handleClear = () => {
    setName("")
  }

  return (
    <div className='App'>
      <div className='bg-green-300 rounded-[20px] max-w-[500px] p-[20px]'>
        <div className='flex gap-2'>
          <div className=''>
            <div className='relative '>
              <input
                className='rounded-[80px] py-2  px-20 border-[#0000004d] border border-solid '
                type='text'
                placeholder='city, please'
                onChange={(e) => setName(e.target.value)}
                onKeyDown={inputClick}
                value={name}
              />
              <IoMdClose
                size={20}
                className='absolute right-3 top-3 cursor-pointer'
                onClick={handleClear}
              />
            </div>
          </div>
          <button
            onClick={handleClick}
            ref={ref}
          >
            <CiSearch size={40} />
          </button>
        </div>
        <div className='pt-6 '>
          <div className='w-full text-center'>
            <div className='inline-block '>{data.img}</div>
            <h1 className='text-3xl py-4'>{data.temp}°С</h1>
            <h2 className='text-4xl'>{data.name}</h2>
          </div>
          <div className=' flex  justify-between items-center'>
            <div className='flex gap-4 items-center'>
              <WiHumidity size={50} />
              <div>
                <p className='text-[20px]'>{data.humidity}%</p>
                {/* <phumidity</p> */}
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <FaWind size={30} />
              <div>
                <p className='text-[20px]'>{data.speed} м/с</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

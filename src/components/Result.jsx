import useWeather from "../hooks/useWeather"
export default function Result() {
    const { result } = useWeather()
    const { name, main } = result
    // Degrees Kelvin
    const kelvin = 273.15
  return (
    <div className="container weather">
          <h2>The climate of {name} is</h2>
          
          <p>
           {parseInt(main.temp-kelvin)} <span>&#x2103;</span>
          </p>
          <div className="temp_min_max">
          <p>
            High: {parseInt(main.temp_max-kelvin)} <span>&#x2103;</span>
        </p>
        <p>
            Low: {parseInt(main.temp_min-kelvin)} <span>&#x2103;</span>
          </p>
              </div>

    </div>
  )
}

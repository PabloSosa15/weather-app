import Formulary from "./Formulary";
import Result from "./Result";
import Spinner from "./Spinner";
import useWeather from "../hooks/useWeather";
export default function WeatherApp() {

  const { result, loading, noResult } = useWeather()
  
  return (
      <>
          <main className="two-columns">
        <Formulary />

        {
          loading ? <Spinner /> :
          result?.name ? <Result /> :
          noResult ? <p>{noResult}</p> :
          <p>The weather will be displayed here</p>
        }
      </main>
      </>
  )
}

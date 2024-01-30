import useWeather from "../hooks/useWeather";
import { useState } from "react";
export default function Formulary() {

  const [alert, setAlert] = useState('')
  const { find, dataFind, consultWeather } = useWeather()
  const { city, country } = find
  
  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(find).includes('')) {
      setAlert('All fields are required')
      return
    }
    setAlert('')
    consultWeather(find)
  }

  return (
    <div className="container">
      {alert && <p>{alert}</p>}
      <form
      onSubmit={handleSubmit}
      >
        <div className="camp">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city"  onChange={dataFind} value={city}/>
        </div>

        <div className="camp">
          <label htmlFor="country">Country:</label>
          <select name="country" id="country" onChange={dataFind} value={country}>
            <option value=""> Select a Country </option>
            <option value="US">United State</option>
            <option value="UK">United Kingdom</option>
            <option value="IL">Israel</option>
            <option value="AR">Argentina</option>
            <option value="MX">Mexico</option>
            <option value="CO">Colombia</option>
            <option value="es">Spain</option>
            <option value="PE">Peru</option>
          </select>
        </div>

        <input type="submit" value="Consult Weather"></input>
      </form>
    </div>
  );
}

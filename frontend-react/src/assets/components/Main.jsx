import {useContext} from 'react'
import Button from './Button'
import Footers from './Footers'
import Headers from './Headers'
import { AuthContext } from '../../AuthProvider';


const Main = () => {

  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

  return (
    <>    
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock prediction portal</h1>
        <p className='text-light lead'>This stock prediciton application utilizes mahcine learning techiniques, specifically employeing Keras, and LSTM model, integrated within the Django framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
        {isLoggedIn ? (
              <Button class='btn btn-info' text='Explore now' url='/dashboard' />
            ) : (
              <Button class='btn-info' text='Login' url='/dashboard' />
            )}
      </div>
    </div>
    </>
  )
}

export default Main
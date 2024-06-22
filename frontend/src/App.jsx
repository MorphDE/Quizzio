import './App.css';
import Loadingscreen from './components/Loadingscreen/Loadingscreen';
import AuthProvider from './Context/authProvider';
import AppRoutes from './AppRoutes';
import { useState } from 'react';
import { LoadingContext } from './Context/Context';

function App() {

  const [loading, setLoading] = useState(false);

  return (
      <div className='app'>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <AuthProvider>
            {loading ? (
                <AppRoutes/>
        ) : (
          <Loadingscreen />
        )}
        </AuthProvider>
      </LoadingContext.Provider>
    </div>
  )
}

export default App;

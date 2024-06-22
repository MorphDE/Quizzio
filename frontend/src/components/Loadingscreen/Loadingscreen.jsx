import "./Loadingscreen.css";
import { useContext, useEffect } from "react";
import { LoadingContext } from './../../Context/Context';

const Loadingscreen = () => {
    const { loading, setLoading } = useContext(LoadingContext);

    useEffect(() => {
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    }, []);
  
    return (
      <section className="loading-bg">
        <div className="loader"></div>
        <h1 className="loading-title">QUIZZIO</h1>
        <p className="loading-slogan">DIE ULTIMATIVE QUIZ APP</p>
      </section>
    );
  };
 
export default Loadingscreen;
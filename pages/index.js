import NameSearch from "../components/NameSearch";
import IdSearch from "../components/IdSearch";
import TypeSearch from "../components/TypeSearch";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../components/Style.module.css';

const Home = () => {
    return(
      <body className = {styles.body}>
        <Header/>
        <div className = {styles.container}>
          <NameSearch/>
          <IdSearch/>
          <TypeSearch/>
          <div id = "reportingArea" className = {styles.reportingArea}></div>
        </div>
        <Footer/>
      </body>
    );
  }

export default Home;
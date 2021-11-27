
import './App.css';
import Redbull from './images/12redbool.jpg' ;
import redbool from './images/123readbool.jpg';
import redbullVideo from './video/redbullVideo.mp4';
function App() {
  return (
    <div className="App">
  ;<>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">ali benaissa</h1>
    <br />
    <img src={Redbull} alt ="this is juice " style ={{
      margin:"0 auto",
      display: "block",
   height: "300px",}}/> 
    <br />
    <img src={redbool} alt ="this is soda"style ={{
      margin:"0 auto",
      display: "block",
   height: "300px",}} />
  </div>
  <video width={320} height={240} controls>
    <source src={redbullVideo} type="video/mp4" />
  </video>
</>
    </div>
  );
}

export default App;

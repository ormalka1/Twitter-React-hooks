import './App.css';
import profilePicture from './style/images/profile12.png';
import cover from './style/images/cover.jpeg';
import MyRouter from './Routes/MyRouter';

function App() {
  const currentUser = {
    username: "Or Malka",
    picture: profilePicture,
    cover: cover,
    bio: "Full Stack Developer",
    isLoggedIn: false
  };
  return (
    <div className="twitter-app">
      <MyRouter user={currentUser} />
    </div>
  );
}

export default App;
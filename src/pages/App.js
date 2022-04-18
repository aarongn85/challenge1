import Header from '../components/shared/header/header';
import Footer from '../components/shared/footer/footer';
import UserFilter from '../pages/users/users-filter';
import UserOutput from '../pages/users/users-output';
import '../pages/App.css';

function App() {
  return (
      <div>
        <Header />
          <main className="row">
            <UserFilter />
            <UserOutput />
          </main>
        <Footer />
      </div>
  );
}

export default App;

import { Provider } from 'react-redux';
import store from './redux/store';
import './App.scss';
import UserForm from './components/UserForm';
import UsersList from './components/UsersList';
import UsersStatistic from './components/UsersStatistic';

function App() {
  return (
    <Provider store={store}>
      <div className="container x">
        <UserForm />
        <UsersList />
        <UsersStatistic />
      </div>
    </Provider>
  );
}

export default App;

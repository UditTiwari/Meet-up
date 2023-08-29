import {Route,Switch} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewmeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigatin from './components/layout/MainNavigation';

function App() {
  return (
   <div>
    <MainNavigatin />
    <Switch>
      <Route path='/' exact>
        <AllMeetupsPage />
      </Route>
      <Route path='/new-meetup'>
        <NewmeetupPage />
      </Route>

      <Route path='/favorites'>
        <FavoritesPage />
      </Route>
    </Switch>
  </div>
  );
}

export default App;
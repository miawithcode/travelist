import Main from './components/Main';
import Sidebar from './components/Sidebar';
import ItemsContextProvider from './contexts/ItemsContextProvider';

const App = () => {
  return (
    <ItemsContextProvider>
      <Sidebar />
      <Main />
    </ItemsContextProvider>
  );
};

export default App;

import Counter from './components/Counter';
import RepeatText from './components/RepeatText';
import ToDoList from './components/ToDoList';
import NavegacaoAbas from './components/NavegacaoAbas';
import Notices from './components/Notices';
import RegistrationForm from './components/Form';

import { useState, createContext, useContext } from 'react';

const PreferencesContext = createContext();

function App() {

  const [ preferences, setPreferences ] = useState({ theme: 'light', language: 'en'});

  const toggleTheme = () => {
    setPreferences(currentTheme => ({
      ...currentTheme,
      theme: currentTheme.theme === 'light' ? 'dark' : 'light'
    }));
  }

  const changeLanguage = (language) => {
    setPreferences(currentLanguage => ({
      ...currentLanguage,
      language: language
    }))
  }

  return (
    <>
      <PreferencesContext.Provider value={{ preferences, toggleTheme, changeLanguage }}>
        <div>
          <Toolbar />
          <button onClick={toggleTheme}>Trocar o tema</button>
          <button onClick={() => changeLanguage('pt-br')}>Trocar o idioma = PT-BR</button>
          <button onClick={() => changeLanguage('en')}>Trocar o idioma - EN</button>
        </div>
      </PreferencesContext.Provider>
    </>
  )
}

function Toolbar() {
  const { preferences } = useContext(PreferencesContext);

  return (
    <div style={{ background: preferences.theme === 'dark' ? 'grey' : 'blue', color: preferences.theme === 'dark' ? 'white' : 'white'}}>
      Tema utilizado - {preferences.theme}, Idioma utilizado - {preferences.language}
    </div>
  )
}

export default App

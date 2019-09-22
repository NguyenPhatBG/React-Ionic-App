import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import React from 'react';
import { IonApp } from '@ionic/react';
import Routes from './Routes';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <IonApp>
      <Header />
      <Routes />
      <Footer />
    </IonApp>
  );
}

export default App;

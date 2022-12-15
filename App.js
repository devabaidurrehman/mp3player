import React from 'react';
import Navigation from './src/navigation/index';
import AudioProvider from './context/audioprovider'



export default function App() {
  return (
    <AudioProvider>
       <Navigation/>
    </AudioProvider>
 
  );
}

import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import avatar from './img/avatar-guilhermee.png';
import labenu from './img/labenu.png';
import assoweb from './img/assoweb.png';
import email from './img/mail.png';
import location from './img/location.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={avatar} 
          nome="Guilherme Emanuell" 
          descricao="Oi! Eu sou o Guilherme, Desenvolvedor Web Full Stack graças à Labenu! ;) Por aqui você verá os meus projetos mais recentes e poderá conhecer um pouco mais da minha jornada!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      
      <div className="page-section-container">
      <CardPequeno 
          imagem={email} 
          nome="Email: &nbsp;" 
          descricao=" britodg@gmail.com"
        />      
      </div>

      <div className="page-section-container">
      <CardPequeno 
          imagem={location} 
          nome="Endereço: &nbsp;" 
          descricao=" Rua Um Dois Três Quatro, # cinco"
        />      
      </div>

      <div className="page-section-container">
        <h2>Formação Acadêmica</h2>
        <CardGrande 
          imagem={labenu} 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={assoweb}
          nome="Assoweb" 
          descricao="Especialista em Inbound Marketing" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTopButton(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Adicione um ouvinte de evento para detectar quando a página é rolada
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove o ouvinte de evento quando o componente é desmontado
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Função para verificar se o botão deve ser visível ou não
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar de volta para o topo quando o botão é clicado
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Rolagem suave
    });
  };

  return (
    <Button
      variant="info" // Escolha a variante de botão desejada do React Bootstrap
      className={`scroll-top-button ${isVisible ? 'show-scroll-button' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="scroll-arrow"/>
    </Button>
  );
}

export default ScrollToTopButton;

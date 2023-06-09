// keeping specific stylings in here 
import styled from "styled-components"
import myAvatar from "/home/gustavo/Blog/gcsilva/src/assets/avatar.jpeg"

// Layout
export const BaseLayout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  flex-direction: column;
  width: 35%;
  margin: 0 auto;

  @media (max-width: 1500px) {
    width: 60%;
  }

  @media (max-width: 850px) {
    width: 90%;
  }

  @media (max-width: 450px) {
    width: 95%;
  }
`


// Container que contêm a barra de navegação
export const NavContainer = styled.nav`
  display: block;
  padding-top: 1rem;
  width: 100%;

  @media (max-width: 950px) {
    margin-bottom: 1em;
  }

  @media (max-width: 450px) {
    padding-top: 0.4rem;
  }
`

// Barra de Navegação
export const Navbar = styled.nav`
  padding-top: 0.5rem;
  height: 3rem;
  padding-top: 0.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

// Título do Site
export const TitleBar = styled.h3`
  cursor: pointer;
  color: #333;
  margin: 0;
  &:hover {
    color: #111;
  }

  @media (max-width: 800px) {
    font-size: 1em;
  }
`

// Lista de Links da Barra de Navegação
export const LinkList = styled.ul`
  list-style-type: none;
  display: flex;
  margin-top: 0px;
  flex-direction: row;

  @media (max-width: 450px) {
    justify-content: left;
  }
`

// Palavras únicas que possuem links
export const Item = styled.li`
  padding: 0 0.9rem;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.45);
  &:hover {
    color: #111;
  }

  @media (max-width: 450px) {
    padding: 0 0.4rem;
  }

  @media (max-width: 350px) {
    padding: 0 0.2rem;
  }
`

// conver on index page
export const Wrapper = styled.section`
  display: flex;
  padding: 2em;
  background: #f0f0f0;
  border-radius: 0.5em;
  margin-top: 1em;
  justify-content: center;
  width: 100%;
  @media (max-width: 1085px) {
    flex-direction: column;
    align-items: center;
    width: auto;
  }

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0.5em;
  }

  @media (max-width: 500px) {
  }
`

// avatar image
export const Avatar = styled.div`
  background-image: url(${myAvatar});
  height: 120px;
  width: 120px;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  border-radius: 50%;
`

// About on wrapper
export const About = styled.div`
  font-size: 0.9em;
  margin-left: 1.8em;
`

// Title on wrapper
export const Title = styled.h1`
  font-size: 2.1em;
  text-align: left;
  margin-top: 0;
  margin-left: 0.8em;

  @media (max-width: 950px) {
    margin: 0.2em;
    text-align: center;
  }
`
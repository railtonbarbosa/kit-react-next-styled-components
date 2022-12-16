import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

* {
  padding: 0px;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #ace7e7;
}
`

function App ({ Component, pageProps }) {
  return (
    <>
     <GlobalStyle />
     <Component {...pageProps} />
    </>
  )
}

export default App

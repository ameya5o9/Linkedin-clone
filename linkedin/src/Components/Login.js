import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
        <Nav>
            <a href="/">
                <img src="/images/login-logo.svg" alt="" />
            </a>

            <div>
              <Join>Join now</Join>
              <Signin>Sign in</Signin>

            </div>
        </Nav>

        <Section>
          <Pic>
            <h1>Welcome to your professional community</h1>
            <img src="/images/login-hero.svg" alt="" />
          </Pic>

          <Form>
            <Google>
              <img src="/images/google.svg" alt="" />Sign in with Google
            </Google>
          </Form>
        </Section>
    </Container>


  )
}
export default Login

const Container = styled.div`
padding: 0;
margin: 0;
`

const Nav = styled.nav`

max-width: 1120px;
padding: 10px;
margin: auto;
display: flex;
flex-direction: row;
align-items:center ;
justify-content: space-between;



img {
    width: 135px;
    height: 34px;
    

}

div{
  align-items: center;
  display: flex;

}

`

const Join = styled.div`
font-family: Arial, Helvetica, sans-serif;
color: #333333;
padding: 10px;
margin: 5px;
:hover{
background-color  : #e3e3e3;
color: black;
cursor: pointer;
border-radius: 30px
}


`

const Signin = styled.div`
font-family: Arial, Helvetica, sans-serif;
padding: 10px;
margin: 5px;
border-style: solid;
border-color: #004182;
border-width:1px;
border-radius:30px;
color: #004182;

:hover{
background-color  : #d7e6f5;
color: #04488c;
cursor: pointer;

}
`

const Section = styled.div`
margin-top: 30px;
`
const Pic = styled.div`
max-width: 1120px;
padding: 10px;
margin: auto;
h1{
  width: 50%;
  color: #8F5849;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: lighter;
  font-size: 56px;
  line-height: 67px;
}

img{
  position: absolute;
  width: 700px;
  right: 200px;
  top: 120px;

}
`

const Form = styled.div`
max-width: 1120px;
padding: 10px;
margin: auto;
`
const Google = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-weight: normal;
width:30%;
padding: 10px;
margin: 5px;
border:1px black solid ;
color: #363636;

:hover{
  color: black;
  background-color: #e0e0e0;
  cursor: pointer;
  transition: 100ms;

}


img{
  padding-right: 5px;
}
`
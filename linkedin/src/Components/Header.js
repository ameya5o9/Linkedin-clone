import styled from "styled-components"
const Header = () => {
  return (
    <Container>
        <Navnav>
            <Logo>
                <a href="">
                    <img src="/images/home-logo.svg" alt="" />
                </a>
            </Logo>

            <Search>
                <div>
                    <input type="text" placeholder="Search"/>
                </div>

                <Searchicon>
                    <img src="/images/search-icon.svg" alt="" />

                </Searchicon>

            </Search>


            <Nav>
                <Navwrap>
                    <Navlist className="active">
                        <a href="">
                            <img src="/images/nav-home.svg" alt="" />
                            <span>Home</span>
                        </a>
                    </Navlist>

                    <Navlist >
                        <a href="">
                            <img src="/images/nav-network.svg" alt="" />
                            <span>Network</span>
                        </a>
                    </Navlist>
                    <Navlist >
                        <a href="">
                            <img src="/images/nav-jobs.svg" alt="" />
                            <span>Jobs</span>
                        </a>
                    </Navlist>
                    <Navlist >
                        <a href="">
                            <img src="/images/nav-messaging.svg" alt="" />
                            <span>Messaging</span>
                        </a>
                    </Navlist>

                    <Navlist >
                        <a href="">
                            <img src="/images/nav-notifications.svg" alt="" />
                            <span>Notifications</span>
                        </a>
                    </Navlist>
            <User>        
              <a>
                <img src="/images/user.svg" alt="" />
                <span>Me</span>
                <img src="/images/down-icon.svg" alt="" />
              </a>

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>
                </Navwrap>
            </Nav>

        </Navnav>
    </Container>

    
  )
}

export default Header

const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0, 0, 0, 0.08);


`

const Navnav = styled.div`
margin: auto;
display: flex;
min-height: 100%;
max-width: 1120px;
`

const Logo = styled.div`

    align-items: center;
    justify-content: center;
display: flex;


`

const Search = styled.div`
div{
    display: flex;
    align-items: center;
    padding-left: 10px;
}
display: flex;
opacity: 1;


input{
    border-style:none;
    height: 25px;
    background-color: #d5e1ed;
    box-shadow:none;
    width: 200px;
    padding-left: 40px;
    border-color: #dce6f1;
}


`

const Searchicon = styled.div`
position: absolute;
width: 40px;
top: 14px;
display: flex;
justify-content: center;
align-items: center;


`

const Nav = styled.div`
width: 100%;
`

const Navwrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Navlist = styled.div`
display: flex;
flex-direction: column;

a{
    display: flex;
    padding-right:10px;
    padding-left: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
    text-decoration: none;
    text-decoration: none;
    color: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

img{
    width: 30px;
}

span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      font-size: 12px;

    }
`

const User = styled.div`
color: rgba(0, 0, 0, 0.6);
display: flex;
align-items: center;
font-size: 12px;
`

const SignOut = styled.div`
flex-direction: column;
display:   flex;
`

const Work = styled.div`
a{
color: rgba(0, 0, 0, 0.6);
display: flex;
flex-direction: column;
align-items: center;
font-size: 12px;

}

`
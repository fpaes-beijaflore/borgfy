import Container from '../Container';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const WhiteDropDownMenuWrapper = styled.div`
  #collasible-nav-dropdown {
    color: #fff;
    padding: 15px 30px;
  }

  .dropdown-menu {
    width: 448px;
    height: 290px;
    padding: 19px 28px 19px;
    -webkit-backdrop-filter: blur(8.7px);
    backdrop-filter: blur(8.7px);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: rgba(255, 255, 255, 0.88);
    transform: translate(28px, 16px);
    -webkit-border-bottom-right-radius: 20px;
    -webkit-border-bottom-left-radius: 20px;
    -moz-border-radius-bottomright: 20px;
    -moz-border-radius-bottomleft: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-radius: none;
    top: 77%;
  }

  .dropdown-item {
    height: 25px;
    margin: 13px 0 53px 0px;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    color: #2b2b2b;
  }

  .dropdown-item.active,
  .dropdown-item:active {
    background: none;
  }

  .dropdown-item:hover {
    background: none;
  }

  .dropdown-item p {
    margin-bottom: 0;
    padding-left: 25px;
  }
`;

const WhiteLink = styled.a`
  color: #ffffff;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: left;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 20px;

  p {
    margin-left: 20px;
    margin-bottom: 0;
  }

  &:hover {
    color: #ffffff;
    text-decoration: none;
    border: 1px solid #fff;
    border-radius: 20px;
  }
`;

const BlackLink = styled.a`
  color: #000000;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: left;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 20px;

  p {
    margin-left: 20px;
    margin-bottom: 0;
  }

  &:hover {
    color: #000000;
    text-decoration: none;
    border: 1px solid #000;
    border-radius: 20px;
  }
`;

const BlackDropDownMenuWrapper = styled.div`
  #collasible-nav-dropdown {
    color: #000000;
    padding: 15px 30px;
  }

  .dropdown-menu {
    width: 448px;
    height: 290px;
    padding: 19px 28px 19px;
    -webkit-backdrop-filter: blur(8.7px);
    backdrop-filter: blur(8.7px);
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: rgba(0, 0, 0, 0.88);
    transform: translate(28px, 16px);
    -webkit-border-bottom-right-radius: 20px;
    -webkit-border-bottom-left-radius: 20px;
    -moz-border-radius-bottomright: 20px;
    -moz-border-radius-bottomleft: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-radius: none;
    top: 77%;
  }

  .dropdown-item {
    height: 25px;
    margin: 13px 0 53px 0px;
    font-size: 1.2rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    text-align: left;
    color: #f3f3f3;
  }

  .dropdown-item.active,
  .dropdown-item:active {
    background: none;
  }

  .dropdown-item:hover {
    background: none;
  }

  .dropdown-item p {
    margin-bottom: 0;
    padding-left: 25px;
  }
`;

const NavBarWrapper = styled.div`
  .black {
    padding: 0.5rem 0;
    background: #000000;
    z-index: 3;
  }

  .navbar-toggler {
    background-color: #f0f0f0;
    height: 46px;
    margin-top: 5px;
  }

  .white {
    padding: 0.5rem 0;
    background: #ffffff;
    z-index: 3;
  }
`;

function Navigation({ navStyle }) {
  return (
    <NavBarWrapper>
      <Navbar collapseOnSelect expand="lg" className={navStyle}>
        <Container navStyle={navStyle}>
          <Navbar.Brand>
            <Nav.Link as={Link} href="/" style={{ padding: '.5rem 0' }}>
              <a>
                <Image src="/logo.jpg" alt="Logo" width={176} height={46} alt="logo.jpg" />
              </a>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle navstyle={navStyle} aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} href="/about">
                {navStyle === 'black' ? (
                  <WhiteLink>Who We Are</WhiteLink>
                ) : (
                  <BlackLink>Who We Are</BlackLink>
                )}
              </Nav.Link>
              {navStyle === 'black' ? (
                <WhiteDropDownMenuWrapper>
                  <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item
                      as={Link}
                      style={{ minWidth: '20rem', display: 'flex', alignItems: 'center' }}
                      href="/services#software"
                    >
                      <BlackLink>
                        <Image
                          style={{ marginRight: '25px' }}
                          src="/nav_dev.png"
                          alt="nav_dev.png"
                          width={52}
                          height={52}
                        />
                        <p>Software Development</p>
                      </BlackLink>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item
                      style={{ minWidth: '20rem', display: 'flex', alignItems: 'center' }}
                      as={Link}
                      href="/services#mobile_app"
                    >
                      <BlackLink>
                        <Image
                          style={{ marginRight: '25px' }}
                          src="/nav_mobile.png"
                          alt="nav_mobile.png"
                          width={52}
                          height={52}
                        />
                        <p>Mobile App</p>
                      </BlackLink>
                    </NavDropdown.Item> */}
                    <NavDropdown.Item
                      style={{ minWidth: '20rem', display: 'flex', alignItems: 'center' }}
                      as={Link}
                      href="/services#hardware"
                    >
                      <BlackLink>
                        <Image
                          style={{ marginRight: '25px' }}
                          src="/nav_hardware.png"
                          alt="nav_hardware.png"
                          width={52}
                          height={52}
                        />
                        <p>Hardware Development</p>
                      </BlackLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ minWidth: '20rem', display: 'flex', alignItems: 'center' }}
                      as={Link}
                      href="/services#graphics"
                    >
                      <BlackLink>
                        <Image
                          style={{ marginRight: '25px' }}
                          src="/nav_assembly.png"
                          alt="nav_assembly.png"
                          width={52}
                          height={52}
                        />
                        <p>Graphics</p>
                      </BlackLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </WhiteDropDownMenuWrapper>
              ) : (
                <BlackDropDownMenuWrapper>
                  <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item
                      style={{ minWidth: '20rem', display: 'flex', alignItems: 'center' }}
                      as={Link}
                      href="/services#software"
                    >
                      <WhiteLink>
                        <Image
                          style={{ marginRight: '25px' }}
                          src="/nav_dev.png"
                          alt="nav_dev.png"
                          width={52}
                          height={52}
                        />
                        <p>Software Development</p>
                      </WhiteLink>
                    </NavDropdown.Item>
                    {/* <NavDropdown.Item
                      style={{ minWidth: '20rem', display: 'flex', alignItems: 'center' }}
                      href="/services#mobile_app"
                      as={Link}
                    >
                      <WhiteLink>
                        <Image
                          style={{ marginRight: '25px' }}
                          src="/nav_mobile.png"
                          alt="nav_mobile.png"
                          width={52}
                          height={52}
                        />
                        <p>Mobile App</p>
                      </WhiteLink>
                    </NavDropdown.Item> */}
                    <NavDropdown.Item
                      style={{ minWidth: '20rem', display: 'flex', alignItems: 'center' }}
                      href="/services#hardware"
                      as={Link}
                    >
                      <WhiteLink>
                        <Image
                          style={{ marginRight: '25px' }}
                          src="/nav_hardware.png"
                          alt="nav_hardware.png"
                          width={52}
                          height={52}
                        />
                        <p>Hardware Development</p>
                      </WhiteLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ minWidth: '20rem', display: 'flex', alignItems: 'center' }}
                      href="/services#graphics"
                      as={Link}
                    >
                      <WhiteLink>
                        <Image
                          style={{ marginRight: '25px' }}
                          src="/nav_assembly.png"
                          alt="nav_assembly.png"
                          width={52}
                          height={52}
                        />
                        <p>Graphics</p>
                      </WhiteLink>
                    </NavDropdown.Item>
                  </NavDropdown>
                </BlackDropDownMenuWrapper>
              )}
              <Nav.Link as={Link} href="/blog">
                {navStyle === 'black' ? <WhiteLink>Blog</WhiteLink> : <BlackLink>Blog</BlackLink>}
              </Nav.Link>
              {/* <Nav.Link as={Link} href="/about#team">
                {navStyle === 'black' ? <WhiteLink>Team</WhiteLink> : <BlackLink>Team</BlackLink>}
              </Nav.Link> */}
              <Nav.Link as={Link} href="/portfolio">
                {navStyle === 'black' ? (
                  <WhiteLink>Portfolio</WhiteLink>
                ) : (
                  <BlackLink>Portfolio</BlackLink>
                )}
              </Nav.Link>
              <Nav.Link as={Link} href="/contact">
                {navStyle === 'black' ? (
                  <WhiteLink>Contact Us</WhiteLink>
                ) : (
                  <BlackLink>Contact Us</BlackLink>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </NavBarWrapper>
  );
}

export default Navigation;

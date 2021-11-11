import Link from "next/link";
import React from "react";
import { Icon } from "semantic-ui-react";
import styled, { css } from "styled-components";
import SearchBar from "./SearchBar";

const Header = () => {
  const currentUser = false;

  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <HeaderItem>
            <Link href="/">
              <Logo>LOGO</Logo>
            </Link>
          </HeaderItem>
          <HeaderItem>
            <SearchBar />
          </HeaderItem>
          <HeaderItem>
            <Link href="/cart">
              <a>
                <Icon name="cart" size={"large"} />
                Cart
              </a>
            </Link>
          </HeaderItem>
          <HeaderItem>
            {currentUser ? (
              <></>
            ) : (
              <>
                <Link href="/signup">
                  <a>Sign Up</a>
                </Link>
                <Line> | </Line>
                <Link href="/login">
                  <a>Log In</a>
                </Link>
              </>
            )}
          </HeaderItem>
        </HeaderWrapper>
      </StyledHeader>
    </>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;
  background-color: var(--background);
  box-shadow: 0px 10px 15px 0px rgba(0, 0, 0, 0.06);
`;

const Logo = styled.a`
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-text-primary);
`;

const HeaderWrapper = styled.ul`
  display: flex;
  align-items: center;
  max-width: 120rem;
  margin: 0 auto;
  height: 8rem;
  padding: 0 2rem;
  justify-content: space-around;
`;

const HeaderItem = styled.li`

`

const Line = styled.span`
  padding: 0 1rem;
`;

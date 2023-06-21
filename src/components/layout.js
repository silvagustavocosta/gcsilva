import * as React from 'react'
import { Link } from 'gatsby'

import {
    BaseLayout,
    NavContainer,
    Navbar,
    TitleBar,
    LinkList,
    Item,
} from "/home/gustavo/Blog/gcsilva/src/styles/styles"

const Layout = ({ pageTitle, children }) => {
    return (
        <BaseLayout>
            <div>
                <NavContainer>
                    <Navbar>
                        <TitleBar>
                            <Link to="/">
                                Gustavo Costa
                            </Link>
                        </TitleBar>

                        <LinkList>
                            <Link to="/about">
                                <Item>About</Item>
                            </Link>

                            <Link to="/posts">
                                <Item>Posts</Item>
                            </Link>
                        </LinkList>
                    </Navbar>
                </NavContainer>

                <main>
                    <h1>{pageTitle}</h1>
                    {children}

                    <div>
                        <footer>
                            <LinkList>
                                <a href="https://tinyletter.com/viniciuscosta">
                                    <Item>Github</Item>
                                </a>
                                <a href="https://tinyletter.com/viniciuscosta">
                                    <Item>Linkedin</Item>
                                </a>
                            </LinkList>
                        </footer>
                    </div>
                </main>
            </div>
        </BaseLayout>
    )
}

export default Layout
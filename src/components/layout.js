import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <nav>
                <Link to="/">
                    Gustavo Costa
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/posts">
                    Posts
                </Link>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}

                <div>
                    <footer>
                        <a href="https://tinyletter.com/viniciuscosta">
                            Github
                        </a>
                        <a href="https://tinyletter.com/viniciuscosta">
                            Linkedin
                        </a>
                        <p>
                            Brasília, Brasil
                        </p>
                    </footer>
                </div>
            </main>
        </div>


    )
}

export default Layout
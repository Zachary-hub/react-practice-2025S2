import { createRoot } from "react-dom/client"
// const root = createRoot(document.getElementById("root"))
import reactlogo from "./assets/react.svg"
import "./practice1.css"



/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */


/**
 * Challenge:
 *
 * Part 2:
 * - Add a <header> element with an <img /> element with the image of the React logo inside (src="react-logo.png")
 *   and make sure to set the width to something more manageable so it doesn't take up the whole screen.
 *   Also, as always, you should include some alt text on the image.
 *
 * - Add an <h1> with some text describing the page. (E.g. "Reasons I'm excited to learn React").
 *   Place it above the ordered list, then wrap the <h1> and <ol> inside a <main> element 
 *   to keep our semantic structure flowing well.
 *
 * - Add a <footer> after the list that says:
 *   "@ 20xx <last name here> development. All rights reserved."
 */

/** Mini Challenge:
 *
 * Move the `header` element from the Page component into
 * its own component called "Header"
 *
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

function Header() {
    return (
        <header className="header">
            <img src={reactlogo} alt="React logo" width={40} />
            <Navbar />
        </header>
    )
}

function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-list-item">Pricing</li>
                <li className="nav-list-item">About </li>
                <li className="nav-list-item">Contact</li>
            </ul>
        </nav>
    )
}

function MainContent() {
    return (
        <main>
            <h1>
                Reasons I'm Excited to Learn React
            </h1>
            <ol>
                <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer if I know React</li>
            </ol>

        </main>
    )

}

function Footer() {
    return (
        <footer>
            <small>@ 2025 Li development. All rights reserved.</small>
        </footer>
    )
}

function Page() {
    return (
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}
// root.render(
//     <Page />
// )
createRoot(document.getElementById("practice1")).render(<Page />)

export default function Header() {
    return (
        <header className="header">
            <img src={reactlogo} alt="React logo" width={40} />
            <Navbar />
        </header>
    )
}

export default function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-list-item">Pricing</li>
                <li className="nav-list-item">About</li>
                <li className="nav-list-item">Contact</li>
            </ul>
        </nav>
    )
}

const NavBar = ({ year, onYearChange }) => {
    return (
        <div className="nav-container">
            <div>
                <h1> 🎬 MainMovies </h1>
                <p style={{ color: '#fff' }}>By Tanitcha</p>
            </div>
            <select
                name="year-select"
                id="years"
                onChange={onYearChange}
                defaultValue={year}
                className="year-select"
            >
                {[...Array(125)].map((_, index) => {
                    const yearValue = 2024 - index;
                    return (
                        <option key={yearValue} value={yearValue}>
                            {yearValue}
                        </option>
                )
                })} //วนลูป
            </select>
        </div>
    )
}

export default NavBar;
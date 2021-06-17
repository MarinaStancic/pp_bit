import './Header.css'

function Header() {


    return (
        <header>
            <div className='header'>
                <p>Hero Team</p>
            </div>
            <div className='search'>
                <div className='left'>
                    <input type='text' name='search' placeholder='search' size='10'></input>
                    <button>go</button>
                </div>
                <div className='right'>My team</div>
            </div>

        </header>
    )
}
export default Header;

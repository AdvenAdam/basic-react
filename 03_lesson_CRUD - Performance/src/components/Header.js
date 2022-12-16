import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCount, getCounter } from '../features/posts/postsSlice';

function Header() {
    const dispatch = useDispatch()
    const count = useSelector(getCounter)
    return (
        <header className="Header">
            <h1>Redux simple Blog</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="post">Post</Link>
                    </li>
                    <li>
                        <Link to="user">User</Link>
                    </li>
                </ul>
                <button
                    onClick={() => {
                        dispatch(increaseCount())
                    }}
                >{count}</button>
            </nav>
        </header>
    );
}

export default Header;

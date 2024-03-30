
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom';

function Navbar({ handleSignOut, user }) {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          
          <a className="text-5xl">MyLogin</a>
        </div>

        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleSignOut}
              className="py-3 px-5 bg-rose-500 text-white rounded-3xl"
            >
              Sign Out
            </button>
          ) : (
            <Link
              onClick={handleSignOut}
              to="/login"
              className="py-3 px-5 bg-rose-500 text-white rounded-3xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.object,
  handleSignOut: PropTypes.func,
};

export default Navbar

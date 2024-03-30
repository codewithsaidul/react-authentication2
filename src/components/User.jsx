
import PropTypes from 'prop-types'

function User({user}) {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-64px)] gap-5 flex-wrap">
      <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-900 text-gray-100">
        <img
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user.displayName}
            </h2>
            <p className="px-5 text-xs sm:text-base text-gray-400">
              
              {user.email ? `E-Mail : ${user.email}` : "Not Found Email"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object
};

export default User

// arquivo Order.js
import React from 'react';
import PropTypes from 'prop-types'

class UserProfile extends React.Component {
  render() {
    const { name, email } = this.props.user;

    return (
        <li> {`${name} ${email}`} </li>
    );
  }
}

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
}
export default UserProfile;
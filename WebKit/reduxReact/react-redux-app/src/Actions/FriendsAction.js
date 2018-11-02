import { connect } from 'react-redux';
import FriendsComponent from '../Components/FriendsComponent';

const mapStateToProps = (state) => ({     
    frds: state.friendsReducer.frds
});

export default connect(mapStateToProps)(FriendsComponent);

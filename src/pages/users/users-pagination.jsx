import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../redux/store';
import { selectUsersPage } from '../../redux/actions/user-actions';
import './users-pagination.css';

export function UsersPagination ({state, totalFilteredUsers}) {
    const handleClick = (id) => {
        store.dispatch(selectUsersPage(id));
    }

    const pagesButtons = [];
    const totalUsers = totalFilteredUsers;
    const usersPerPage = state.usersPerPage;
    const currentPage = state.currentPage;

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pagesButtons.push(i);
    }

    return <div className="pagination col-sm-12">
        {pagesButtons.map(iteration => (
            <button onClick={() => handleClick(iteration)} className={(currentPage == iteration) ? "btn btn-primary" : "btn btn-secondary"}>{iteration}</button>
        ))}
    </div>;
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = () => dispatch => {
    return {
        selectUsersPage: id => selectUsersPage(id)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPagination)
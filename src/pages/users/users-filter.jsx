import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../redux/store';
import { setUserFilters } from '../../redux/actions/user-actions';
import './users-filter.css';

function UsersFilter ({userData}) {

    function updateUserFilters(event) {
        let filters = {
            usersPerPage: document.getElementById("users-per-page").value,
            genders: {
                male: document.getElementById("gender-male").checked,
                female:  document.getElementById("gender-female").checked,
                both:  document.getElementById("gender-both").checked
            },
            ages: document.getElementById("select-age").value
        }

        store.dispatch(setUserFilters(filters))
    }

    return <div className="users-filter col-sm-12 col-md-3">
        <div className="filter-wrapper">
            <div>
                <label htmlFor="uers-per-page">Users Per Page</label>
                <select id="users-per-page">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                </select>
            </div>
            <fieldset>
                <legend>Gender</legend>
                <div>
                    <input type="radio" id="gender-female" name="gender" value="female" />
                    <label htmlFor="gender-female">Female</label>
                </div>
                <div>
                    <input type="radio" id="gender-male" name="gender" value="female" />
                    <label for="gender-male">Male</label>
                </div>
                <div>
                    <input type="radio" id="gender-both" name="gender" value="both" />
                    <label for="gender-both">Show Both</label>
                </div>                
            </fieldset>
            <div>
                <label htmlFor="select-age">Age</label>
                <select id="select-age">
                    <option value="all">any age</option>
                    <option value="18-25">18 - 25</option>
                    <option value="26-33">26 - 33</option>
                    <option value="34-41">34 - 41</option>
                    <option value="42-up">&gt; 41</option>
                </select>
            </div>
            <div>
                <button id="update-filter-btn" onClick={() => updateUserFilters()} className="btn btn-primary">Update Filters</button>
            </div>
        </div>
    </div>;
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = () => dispatch => {
    return {
        setUserFilters: filters => setUserFilters(filters)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersFilter)
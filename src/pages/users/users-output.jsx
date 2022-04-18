import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/actions/user-actions';
import './users-output.css';
import UsersPagination from './users-pagination';

function UsersOutput ({userData, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])

    let userList = userData.users;
    if(userData.usersGenderFilter.both !== true) {
        userList = userList.filter(obj => {
            return (userData.usersGenderFilter.male) 
                ? obj.gender === "male" 
                : obj.gender === "female" 
        });
    }

    if(userData.usersAgeFilter !== "any age") {
        userList = userList.filter(obj => {
            let userAgeResult = false;
            let age = obj.dob.age;
            switch(userData.usersAgeFilter) {
                case "18-25":
                    userAgeResult = age >= 18 && age <= 25;
                break;
                case "26-33":
                    userAgeResult = age >= 26 && age <= 33;
                break;
                case "34-41":
                    userAgeResult = age >= 34 && age <= 41;
                break;
                case "42-up":
                    userAgeResult = age >= 41;
                break;
                default:
                    userAgeResult = true;    
                break;
            }
            return userAgeResult;
        });
    }

    let totalFilteredUsers = userList.length;
    let usersPerPage = userData.usersPerPage;
    let currentPage = userData.currentPage;
    let indexOfLastUser = currentPage * usersPerPage;
    let indexOfFirstUser = indexOfLastUser - usersPerPage;
    let usersOnPage = userList.slice(indexOfFirstUser, indexOfLastUser);

    let totalPagesDisplay = Math.ceil(totalFilteredUsers / usersPerPage);

    let genderDisplay = userData.usersGenderFilter.both
        ? "Both females and males"
        : userData.usersGenderFilter.female
            ? "Only females"
            : "Only males";

    let displayTextResults = "result" + (totalFilteredUsers < 2 ? "" : "s");
    let displayTextPages = "page" + (totalPagesDisplay < 2 ? "" : "s");

    let ageDisplay = "any age";
    if (userData.usersAgeFilter == "18-25")
        ageDisplay = "between 18 and 25";
    else if (userData.usersAgeFilter == "26-33")
        ageDisplay = "between 26 and 33";
    else if (userData.usersAgeFilter == "34-41")
        ageDisplay = "between 34 and 41";
    else if (userData.usersAgeFilter == "41-up")
        ageDisplay = "older than 41";

    return userData.loading ? (
        <div className="col-sm-12 col-md-9">
            <h2>Loading</h2>
        </div>
      ) : userData.error ? (
        <div className="col-sm-12 col-md-9">
            <h2>{userData.error}</h2>
        </div>
      ) : (
        <div className="member-display col-sm-12 col-md-9">
          <div className="page-header">
            <h1>Members</h1>
            <div className="result-string">Results: showing <span>{totalFilteredUsers}</span> {displayTextResults} on <span>{totalPagesDisplay}</span> {displayTextPages}</div>
            <div className="result-string">Filters:  <span>{genderDisplay}</span>, <span>{ageDisplay}</span>, <span>{usersPerPage}</span> results per page</div>
          </div>
            <div>
                <div className="member-cards row">
                    {usersOnPage.map((user, index) => 
                    <a href="javascript:alert('coming soon...');" className="col member-card">
                        <img src={user.picture.large} alt="" />
                        <div>{user.name.first}</div>
                        <div>{user.dob.age} years old</div>
                    </a>
                    )}
                </div>
            </div>
            <UsersPagination state={userData} totalFilteredUsers={totalFilteredUsers} />
        </div>
      )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersOutput)
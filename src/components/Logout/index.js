/* eslint-disable no-unused-vars */
// Write your code here
const Logout = props => {
  const {changeStatus} = props

  return (
    <button type="button" className="logout-button" onClick={changeStatus}>
      Login
    </button>
  )
}

export default Logout

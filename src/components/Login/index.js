// Write your code here

const Login = props => {
  const {changeStatus} = props

  return (
    <button type="button" className="login-button" onClick={changeStatus}>
      Logout
    </button>
  )
}

export default Login

import { useAuth } from '../utils/auth'

export default function Home() {
  const auth = useAuth()

  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <button onClick={() => auth.signout()}>Sign out</button>
    </div>
  ) : (
    <button onClick={() => auth.signinWithGitHub()}>Sign In</button>
  )
}

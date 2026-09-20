import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from './supabaseClient'
import { FiEye, FiEyeOff } from 'react-icons/fi'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      navigate('/board')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <form onSubmit={handleLogin}  className="flex flex-col gap-4 w-full max-w-sm p-4">
      <h2 className="text-3xl font-semibold text-gray-800">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-gray-100 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-700"
      />
     <div className="relative">
  <input
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
    className="w-full bg-gray-100 rounded-full px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-gray-700 pr-12"
  />
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
  >
    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
  </button>
</div>
      <button type="submit" className="w-full bg-gray-800 text-white rounded-full py-3 text-sm font-medium hover:bg-gray-700 transition">Login</button>
      <p className="text-sm text-red-500 text-center">{message}</p>
      <p className="text-sm text-gray-500 text-center">
  New account ? <Link to="/signup" className="font-semibold text-slate-800">Sign Up</Link>
</p>
    </form>
    </div>
  )
  
}

export default Login
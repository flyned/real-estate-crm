import dynamic from 'next/dynamic'

const AuthProvider = dynamic(
  () => import('@/contexts/AuthContext').then((mod) => ({ default: mod.AuthProvider })),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
)

export default AuthProvider
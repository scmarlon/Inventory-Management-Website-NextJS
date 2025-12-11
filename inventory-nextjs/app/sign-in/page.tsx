import { SignIn } from '@stackframe/stack'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-100 to-purple-200">
        <div className="max-w-md w-full space-y-8">
            <SignIn />
            <Link href="/" className="text-sm text-gray-700 hover:underline mt-4 block ">
                Back Home
            </Link>
        </div>
    </div>
  )
}

export default SignInPage
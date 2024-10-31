import React from 'react';
import { Mail, Lock, User } from 'lucide-react';

const formWidth = "w-[400px]";

export function LoginForm({ onSwitch }: { onSwitch: (form: string) => void }) {
  return (
    <div className={`neo-card ${formWidth}`}>
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Welcome Back</h2>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Mail size={18} />
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="neo-input w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Lock size={18} />
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="neo-input w-full"
          />
        </div>
        <button
          type="submit"
          className="neo-button w-full py-4 text-lg font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
        >
          Login
        </button>
      </form>
      <div className="mt-6 text-center">
        <button
          onClick={() => onSwitch('forgot')}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
        >
          Forgot Password?
        </button>
      </div>
      <div className="mt-6 text-center">
        <span className="text-gray-600 dark:text-gray-400">Don't have an account?</span>{' '}
        <button
          onClick={() => onSwitch('signup')}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 font-medium"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export function SignupForm({ onSwitch }: { onSwitch: (form: string) => void }) {
  return (
    <div className={`neo-card ${formWidth}`}>
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8">Create Account</h2>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <User size={18} />
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="neo-input w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Mail size={18} />
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="neo-input w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Lock size={18} />
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="neo-input w-full"
          />
        </div>
        <button
          type="submit"
          className="neo-button w-full py-4 text-lg font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
        >
          Sign Up
        </button>
      </form>
      <div className="mt-6 text-center">
        <span className="text-gray-600 dark:text-gray-400">Already have an account?</span>{' '}
        <button
          onClick={() => onSwitch('login')}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 font-medium"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export function ForgotPasswordForm({ onSwitch }: { onSwitch: (form: string) => void }) {
  return (
    <div className={`neo-card ${formWidth}`}>
      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Reset Password</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Enter your email address and we'll send you instructions to reset your password.
      </p>
      <form className="space-y-6">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <Mail size={18} />
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="neo-input w-full"
          />
        </div>
        <button
          type="submit"
          className="neo-button w-full py-4 text-lg font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500"
        >
          Send Reset Link
        </button>
      </form>
      <div className="mt-6 text-center">
        <button
          onClick={() => onSwitch('login')}
          className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-500 font-medium"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
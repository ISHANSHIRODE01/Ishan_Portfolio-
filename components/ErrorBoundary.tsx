"use client";

import React from 'react';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black-100 flex items-center justify-center flex-col text-white p-4">
          <h1 className="text-4xl font-bold text-purple mb-4">Something went wrong</h1>
          <p className="text-white-200 mb-8 text-center max-w-md">
            We encountered an unexpected error. Please try refreshing the page.
          </p>
          <MagicButton
            title="Refresh Page"
            icon={<FaLocationArrow />}
            position="right"
            handleClick={() => window.location.reload()}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
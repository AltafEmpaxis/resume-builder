import React, { Component, ErrorInfo, ReactNode } from 'react';

interface IErrorProps {
  children: ReactNode;
}

interface IErrorState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<IErrorProps, IErrorState> {
  public state: IErrorState = {
    hasError: false,
    errorMessage: '',
  };

  public static getDerivedStateFromError(error: Error): IErrorState {
    return { 
      hasError: true,
      errorMessage: error.message 
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center p-6 m-4 border border-resume-800 rounded-lg bg-white shadow-md">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-red-500 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
          <h2 className="text-xl font-semibold text-resume-800 mb-3">Something went wrong</h2>
          <p className="text-sm text-resume-700 text-center mb-4">{this.state.errorMessage || 'An unexpected error occurred'}</p>
          <button 
            className="px-5 py-2 bg-resume-600 text-white rounded-md hover:bg-resume-700 transition-colors focus:outline-none focus:ring-2 focus:ring-resume-500 focus:ring-opacity-50"
            onClick={() => this.setState({ hasError: false, errorMessage: '' })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import React from 'react'

type Props = Record<string, unknown> & {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

interface ErrorInfo {
  componentStack: string
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Uncaught error:', error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <h1>Oops! An error occured. Please try reloading the page.</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex justify-center items-center">

          <h1 className="text-3xl font-bold">

            Something went wrong.

          </h1>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
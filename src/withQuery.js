import React, { Component } from 'react'
function withQuery(WrappedComponent) {
  return class extends React.Component {
    getQueryObject() {
      const search = location.search.substring(1)
      return search.split('&').reduce(function (prev, curr, i, arr) {
        var p = curr.split('=')
        if (p[1]) {
          prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1])
        } else {
          prev[decodeURIComponent(p[0])] = undefined
        }
        return prev
      }, {})
    }
    render() {
      return <WrappedComponent {...this.props} query={this.getQueryObject()} />
    }
  }
}

export default withQuery
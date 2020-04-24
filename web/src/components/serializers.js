import Figure from './figure'
// const BlockContent = require('@sanity/block-content-to-react')
// import React from 'react'
import Code from './code'

const serializers = {
  types: {
    figure: Figure,
    code: Code
  }
}

export default serializers

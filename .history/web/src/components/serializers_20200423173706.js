import Figure from './figure'
// const BlockContent = require('@sanity/block-content-to-react')

const serializers = {
  types: {
    figure: Figure,
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

export default serializers

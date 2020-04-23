import Figure from './figure'

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

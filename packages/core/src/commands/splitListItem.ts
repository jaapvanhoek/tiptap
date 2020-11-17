import { splitListItem } from 'prosemirror-schema-list'
import { NodeType } from 'prosemirror-model'
import { Command } from '../types'
import getNodeType from '../utils/getNodeType'

export default (typeOrName: string | NodeType): Command => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema)

  return splitListItem(type)(state, dispatch)
}

import BaseLeaf from './Leaf'
import BaseTree from './Tree'
import { withAddButton } from './withHoc'
const sourceData = {
    leaf: ['apple', 'banana', 'pair'],
    tree: ['basketball','football' ]
}

const Leaf = withAddButton(BaseLeaf, sourceData, 'leaf');
const Tree = withAddButton(BaseTree, sourceData, 'tree');
export {
    Leaf,
    Tree
}


import React from 'react'
import { uuid } from 'uuidv4'
import { render } from 'react-dom'
import Loading from 'components/Loading'

const opened = []
let containerDomNode = null

const removeOpened = id => {
  const index = opened.indexOf(id)
  const hasItem = index > -1

  return hasItem && opened.splice(index, 1)
}

const hasOpened = () => opened.length > 0

const show = (options = {}) => {
  const uid = options.id || uuid()

  opened.push(uid)

  if (!containerDomNode) {
    containerDomNode = document.createElement('div')
    containerDomNode.id = 'loading'

    document.body.appendChild(containerDomNode)

    render(<Loading full />, containerDomNode)
  }

  return uid
}

const close = id => {
  removeOpened(id)

  if (!hasOpened()) {
    document.body.removeChild(containerDomNode)

    containerDomNode = null
  }
}

export default {
  show,
  close,
}

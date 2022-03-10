import { renderer } from '../utils/renderer'
import { useEffect } from 'react'

export function useRenderOnMount(name, callback, ...props) {
  useEffect(() => {
    renderer.setToRender(callback.bind(undefined, ...props), name)
    return () => renderer.removeFromRender(name)
  }, [])
}

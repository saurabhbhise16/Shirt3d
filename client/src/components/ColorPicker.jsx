// eslint-disable-next-line no-unused-vars
import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute
    left-full
    ml-3
    '>
    <SketchPicker
      color={snap.color}
      disableAlpha
      onChange={(color) => state.color = color.hex}
      presetColors={
          ["black", "white", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"]
      }
    />
    </div>
  )
}

export default ColorPicker
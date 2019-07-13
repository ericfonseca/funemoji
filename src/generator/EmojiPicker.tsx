import React, {useCallback, useState} from 'react';
import emojis from './emojis';
import cx from 'classnames';
import styles from './EmojiPicker.module.css';

interface Props {
  selectedEmojiTop: string,
  selectedEmojiBottom: string,
  onSelect: (emoji: string) => void,
}

export function EmojiPicker({selectedEmojiTop, selectedEmojiBottom, onSelect}: Props) {
  return (
    <div className={styles.picker}>
      {emojis.map(emoji => <div onClick={_ => onSelect(emoji)} className={cx(styles.cell, {
        [styles.selectedTop]: selectedEmojiTop === emoji,
        [styles.selectedBottom]: selectedEmojiBottom == emoji
      })}>{emoji}</div>)}
    </div>
  )
}

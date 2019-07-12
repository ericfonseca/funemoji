import React, {useCallback, useState} from 'react';
import emojis from './emojis';
import cx from 'classnames';
import styles from './EmojiPicker.module.css';

interface Props {
  selectedEmoji: string,
  onSelect: (emoji: string) => void,
}

export function EmojiPicker({selectedEmoji, onSelect}: Props) {
  return (
    <div className={styles.picker}>
      {emojis.map(emoji => <div onClick={_ => onSelect(emoji)} className={cx(styles.cell, {
        [styles.selected]: selectedEmoji === emoji
      })}>{emoji}</div>)}
    </div>
  )
}

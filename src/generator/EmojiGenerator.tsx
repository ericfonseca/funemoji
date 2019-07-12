import React, {useCallback, useState} from 'react';
import logo from './lol.png';
import { getEmojiURL } from './api';
import emojis from './emojis';
import styles from './EmojiGenerator.module.css';

import { EmojiPicker } from './EmojiPicker';

export function EmojiGenerator() {
  const [percentage, setPercentage] = useState(50);
  const [topEmoji, setTopEmoji] = useState('😁');
  const [bottomEmoji, setBottomEmoji] = useState('😘');
  const onPercentageChange = useCallback(e => setPercentage(e.target.value), [setPercentage]);
  const onTopEmojiChange = useCallback(e => setTopEmoji(e.target.value), [setTopEmoji]);
  const onBottomEmojiChange = useCallback(e => setBottomEmoji(e.target.value), [setBottomEmoji]);
  console.log(percentage, topEmoji, bottomEmoji);
  const [displayedEmoji, setDisplayedEmoji] = useState(logo);
  const fetchEmoji = useCallback(
    e => setDisplayedEmoji(getEmojiURL(topEmoji, bottomEmoji, percentage)),
    [topEmoji, bottomEmoji, percentage],
  );
  return (
    <>
      <EmojiPicker selectedEmoji={topEmoji} onSelect={setTopEmoji} />
      <img src={displayedEmoji} className={styles.spinEmoji} alt="logo" />
      <div>
        <select className = "App-button" name="top" id="top" value={topEmoji} onChange={onTopEmojiChange}>
          {emojis.map(emoji => <option value={emoji}>{emoji}</option>)}
        </select>

        <select className = "App-button" name="bottom" id="bottom" value={bottomEmoji} onChange={onBottomEmojiChange}>
          {emojis.map(emoji => <option value={emoji}>{emoji}</option>)}
        </select>

        <input
          type="number"
          min="0"
          max="100"
          className="App-button"
          value={percentage}
          onChange={onPercentageChange}
        />

        <button onClick={fetchEmoji}>YEEET</button>
      </div>
    </>
  )
}
import React, { useCallback, useState } from "react";
import logo from "./lol.png";
import { getEmojiURL } from "./api";
import emojis from "./emojis";
import styles from "./EmojiGenerator.module.css";

import { EmojiPicker } from "./EmojiPicker";

enum EmojiPart {
  TOP,
  BOTTOM
}

export function EmojiGenerator() {
  const [percentage, setPercentage] = useState(50);
  const [topEmoji, setTopEmoji] = useState("😁");
  const [bottomEmoji, setBottomEmoji] = useState("😘");
  const [displayedPicker, setDisplayedPicker] = useState(EmojiPart.TOP);
  const onPercentageChange = useCallback(e => setPercentage(e.target.value), [
    setPercentage
  ]);
  const onTopEmojiChange = useCallback(e => setTopEmoji(e.target.value), [
    setTopEmoji
  ]);
  const onBottomEmojiChange = useCallback(e => setBottomEmoji(e.target.value), [
    setBottomEmoji
  ]);
  const [displayedEmoji, setDisplayedEmoji] = useState(logo);
  const fetchEmoji = useCallback(
    e => setDisplayedEmoji(getEmojiURL(topEmoji, bottomEmoji, percentage)),
    [topEmoji, bottomEmoji, percentage]
  );
  return (
    <div className={styles.container}>
      <div className={styles.viewer}>
        <EmojiPicker
          selectedEmoji={
            displayedPicker === EmojiPart.TOP ? topEmoji : bottomEmoji
          }
          onSelect={
            displayedPicker === EmojiPart.TOP ? setTopEmoji : setBottomEmoji
          }
        />
        <div className={styles.controls}>
          <button
            className={styles.selectedEmoji}
            onClick={() => setDisplayedPicker(EmojiPart.TOP)}
          >
            {topEmoji}
          </button>
          <input
            className={styles.slider}
            type="range"
            min={0}
            max={100}
            value={percentage}
            onChange={onPercentageChange}
          />
          <button
            className={styles.selectedEmoji}
            onClick={() => setDisplayedPicker(EmojiPart.BOTTOM)}
          >
            {bottomEmoji}
          </button>
        </div>
        <img src={displayedEmoji} className={styles.spinEmoji} alt="logo" />
      </div>
      <button onClick={fetchEmoji}>YEEET</button>
    </div>
  );
}

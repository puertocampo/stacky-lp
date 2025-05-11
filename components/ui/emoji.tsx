import { CSSProperties } from "react";

type EmojiProps = {
  symbol: string; // 絵文字
  label?: string; // 説明（アクセシビリティ用）
  size?: number | string; // サイズ (px または rem, em, % など)
};

const Emoji: React.FC<EmojiProps> = ({ symbol, label, size = "1em" }) => {
  const style: CSSProperties = {
    fontSize: typeof size === "number" ? `${size}px` : size,
    fontFamily:
      "system-ui, Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif",
    lineHeight: 1,
    verticalAlign: "middle",
  };

  return (
    <span role="img" aria-label={label ?? ""} style={style}>
      {symbol}
    </span>
  );
};

export default Emoji;

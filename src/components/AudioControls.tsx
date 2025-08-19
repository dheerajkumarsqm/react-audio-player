import playSVG from "../icons/play-large-fill.svg";
import pauseSVG from "../icons/pause-large-fill.svg";
import skipBackSVG from "../icons/skip-back-line.svg";
import skipFwdSVG from "../icons/skip-forward-line.svg";
import { type ReactElement } from "react";

interface Props {
  isPlaying: boolean;
  allowSkip: boolean;
  onPlayClick: () => void;
  onPauseClick: () => void;
  onSkipForwardClick: () => void;
  onSkipBackwardClick: () => void;
}

const AudioControls = ({
  isPlaying,
  allowSkip,
  onPlayClick,
  onPauseClick,
  onSkipForwardClick,
  onSkipBackwardClick,
}: Props): ReactElement => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gridColumn: "2 / 2",
        gap: 15,
      }}
    >
      {/* skip backwards */}
      {allowSkip && (
        <img
          src={skipBackSVG}
          onClick={onSkipBackwardClick}
          title={"Skip backwards"}
          style={{
            cursor: "pointer",
            height: 16,
            width: 16,
          }}
          data-testid={"skip-back"}
        />
      )}
      <img
        src={isPlaying ? pauseSVG : playSVG}
        onClick={isPlaying ? onPauseClick : onPlayClick}
        title={isPlaying ? "Pause" : "Play"}
        style={{
          cursor: "pointer",
          height: "24px",
          width: "24px",
        }}
        data-testid={"play-pause"}
      />
      {/* skip forwards */}
      {allowSkip && (
        <img
          src={skipFwdSVG}
          onClick={onSkipForwardClick}
          title={"Skip forwards"}
          style={{
            cursor: "pointer",
            height: 16,
            width: 16,
          }}
          data-testid={"skip-forward"}
        />
      )}
    </div>
  );
};

export default AudioControls;
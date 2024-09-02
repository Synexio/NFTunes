import styled from "styled-components";

export const Container = styled.div<{ isFull: boolean }>`
  display: flex;
  justify-content: space-between; /* Distribute space between items */
  align-items: center; /* Center items vertically */
  background-color: #16171a;
  width: 100%;
  height: 14vh;
  position: fixed; /* Fix the player to the bottom */
  bottom: 0; /* Align to the bottom */
  left: 0;
  z-index: 1000; /* Ensure it's above other elements */
  box-shadow: 0px -1px 7px #16171aa0;

  .musicDiv {
    display: flex;
    align-items: center; /* Center items vertically */
    width: 400px; /* Fixed width for music details */
    margin-left: 10px; /* Add some margin on the left */
    cursor: pointer;
  }

  .music {
    display: flex;
    align-items: center; /* Center the image and text vertically */
    margin-left: 5px;

    img {
      width: 70px;
      height: 65px;
      margin-right: 10px; /* Space between image and text */
    }

    .musicDetails {
      display: flex;
      flex-direction: column; /* Stack the name and author vertically */
      color: #fff;

      h1 {
        font-size: 18px;
        margin: 0; /* Remove default margin */
      }
      h3 {
        font-size: 14px;
        color: #b5b5b5;
        margin: 0; /* Remove default margin */
      }
    }
  }

  .player {
    display: flex;
    justify-content: center; /* Center the progress bar and buttons */
    align-items: center;
    flex-grow: 1; /* Allow this to take up remaining space */
    margin: 0 20px; /* Add some margin on the sides */
  }

  .progressContainer {
    display: flex;
    align-items: center; /* Center items vertically */
  }

  .progressBar {
    display: flex;
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center the progress bar */

    .Pduration,
    .PcurrentTime {
      color: #fff;
      font-size: 14px;
    }
  }

  .buttons {
    margin-left: 10px; /* Space between progress bar and play button */
  }

  .volumeControls {
    display: flex;
    align-items: center; /* Center volume controls */
    margin-right: 10px; /* Add some margin on the right */
  }

  .volumeButton {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 5px; /* Space between button and range input */
  }

  .currentProgress {
    /* Styles for the progress bar */
    --seek-before-width: 0px;
    appearance: none;
    border-radius: 10px;
    width: 200px; /* Adjusted width for better responsiveness */
    background-color: #494a4d;
    height: 5px;
    outline: none;

    ::-webkit-slider-thumb {
      appearance: none;
      height: 14px;
      width: 14px;
      background-color: #fff;
      border-radius: 50%;
      border: none;
      cursor: pointer;
      position: relative;
      z-index: 3;
      box-sizing: border-box;
    }

    :active::-webkit-slider-thumb {
      transform: scale(1.2);
    }
  }

  @media only screen and (max-width: 575px) {
    /* Add any media queries as necessary */
  }
`;

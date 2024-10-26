import { Audio } from "expo-av";
import Toast from "react-native-toast-message";

// Create a persistent variable to track the current sound and play state
let currentSound: Audio.Sound | null = null;
let isPlaying = false; // This will track if the sound is currently playing

async function playSoundsFromPaths(paths: string[], loopCount: number = 1) {
  try {
    console.log("Loading Sounds");

    // Stop and unload the currently playing sound if it exists
    if (currentSound) {
      console.log("Stopping and unloading the current sound...");
      await currentSound.stopAsync();
      await currentSound.unloadAsync();
      currentSound = null; // Clear the reference
    }

    // Set isPlaying to true to indicate that the sound is playing
    isPlaying = true;

    // Loop for the specified number of times (loopCount)
    for (let loop = 0; loop < loopCount; loop++) {
      console.log(`Loop iteration: ${loop + 1}`);

      // Check if isPlaying is false, stop the loop immediately
      if (!isPlaying) {
        console.log("New verse pressed. Stopping current playback.");
        break;
      }

      // Iterate through the list of sound paths
      for (let i = 0; i < paths.length; i++) {
        const item = paths[i];

        if (!item) {
          console.log(`Skipping invalid audio path at index ${i}`);
          continue;
        }

        try {
          // Check if isPlaying is false, stop the loop immediately
          if (!isPlaying) {
            console.log("New verse pressed. Stopping current playback.");
            break;
          }

          // Load and create the sound
          const { sound, status } = await Audio.Sound.createAsync({
            uri: item,
          });

          // Keep track of the current sound
          currentSound = sound;

          // Play the sound
          await sound.playAsync();

          // Get the duration of the audio in milliseconds
          // @ts-ignore
          const duration = status.durationMillis;

          if (duration) {
            // Wait for the duration of the sound
            await new Promise((resolve) => setTimeout(resolve, duration));
          } else {
            console.log(`Unable to get duration for: ${item}`);
          }

          // Unload the sound to free resources
          await sound.unloadAsync();
          currentSound = null; // Clear the reference after unloading
        } catch (error) {
          Toast.show({
            type: "error",
            text1: `Error playing sound`,
            position: "bottom",
          });
        }
      }
    }

    // Reset isPlaying after finishing the loop
    isPlaying = false;
  } catch (error) {
    // console.error("Error playing sounds:", error);
  }
}

// Function to stop the current playback immediately
export function stopPlayback() {
  isPlaying = false;

  if (currentSound) {
    currentSound
      .stopAsync()
      .then(() => {
        currentSound?.unloadAsync();
        currentSound = null;
        console.log("Playback stopped and sound unloaded.");
      })
      .catch((error) => {
        console.error("Error stopping and unloading sound:", error);
      });
  }
}

export default playSoundsFromPaths;

import React from 'react';
import VideoRecorder from 'react-native-video-recorder';

<VideoRecorder
  ref={React.createRef('recorder')}
  onRecordingStarted={() => console.log('Started')}
  onRecordingFinished={e => console.log(e.nativeEvent.file)}
  onCameraAccessException={() => alert('No permission for camera')}
  onCameraFailed={() => alert('Camera failed')}
  type="front"
  videoEncodingBitrate={7000000}
  videoEncodingFrameRate={30}
/>;

this.refs.recorder.record();
this.refs.recorder.stop();

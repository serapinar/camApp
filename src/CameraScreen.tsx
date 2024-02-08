import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
const CameraScreen = () => {
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setPhotoUri(data.uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {photoUri ? (
        <View>
          <Text>Fotoğraf çekildi!</Text>
          <Text>{photoUri}</Text>
        </View>
      ) : (
        <RNCamera
          ref={cameraRef}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        >
          <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
            <TouchableOpacity onPress={takePicture} style={{ marginBottom: 20 }}>
              <Text style={{ fontSize: 20, marginBottom: 13, color: 'white' }}>Fotoğraf Çek</Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
      )}
    </View>
  );
};

export default CameraScreen;

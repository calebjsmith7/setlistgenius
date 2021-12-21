import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import Playsymbol from './play.js';
import Timesignature from './ts.js';

const Song = () => {

  const [key, setkey] = React.useState();
  const [bpm, setbpm] = React.useState();
  const [disp, setdisp] = React.useState(false);
  const [ts, setts] = React.useState('TS');
  const regex = /^[a-gA-G][#]?$/;





  return (
    <View style={styles.song}>
      <View style={{ width: '50%' }}>
        <TextInput
          style={[styles.input, { color: 'white' }]}
          keyboardType='default'
          keyboardAppearance='default'
          maxLength={25}
          placeholder="Song Title"
          placeholderTextColor="white"
        />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <TextInput
            style={[styles.bpms, { color: 'white' }]}
            onChangeText={(e) => { e <= 300 ? setbpm(e) : console.log('error setting bpm') }}
            value={bpm}
            keyboardType='numeric'
            keyboardAppearance='default'
            maxLength={25}
            placeholder="BPM"
            placeholderTextColor="white"
            returnKeyType='done'
          />
          <TextInput
            style={[styles.keys, { color: 'white' }]}
            onChangeText={(e) => { (e.toUpperCase() != 'E#' && e.toUpperCase() != 'B#' && regex.test(e)) || e === "" ? setkey(e.toUpperCase()) : console.log('error setting key') }}
            value={key}
            keyboardType='default'
            keyboardAppearance='default'
            maxLength={2}
            placeholder="Key"
            placeholderTextColor="white"
            returnKeyType='done'
          />
          <TouchableOpacity style={styles.tempos} onPress={() => setdisp(true)}><Text style={{ fontSize: 20, color: 'white' }}>{ts}</Text></TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '50%', height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '2%', marginTop: 'auto', marginBottom: 'auto', marginLeft: '7%' }}>
        <TouchableOpacity onPress={() => pauseclick()}><Text style={{ color: 'white', fontSize: 30, marginTop: 5, backgroundColor: '#16425b' }}>Click</Text></TouchableOpacity>
        <Playsymbol thekey={key} thebpm={bpm} thets={ts}/>
      </View>
      <Timesignature thedisp={disp} thesetdisp={setdisp} thesetts={setts} />
    </View>
  );
}

const styles = StyleSheet.create({

  song: {
    height: '12.5%',
    width: Dimensions.get('window').width,
    backgroundColor: '#1e2427',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1%',
    alignSelf: 'center',
    borderColor: 'white',
    borderBottomWidth: 4
  },
  input: {
    height: 40,
    margin: '1%',
    width: '100%',
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
    borderColor: 'transparent',
    fontSize: 20,
  },
  bpms: {
    height: 40,
    margin: '2%',
    width: '40%',
    borderWidth: 1,
    padding: 10,
    marginTop: 1,
    borderColor: 'transparent',
    fontSize: 20,
  },
  keys: {
    height: 40,
    margin: '1%',
    width: '20%',
    borderWidth: 1,
    marginTop: 1,
    borderColor: 'transparent',
    fontSize: 20,
  },
  tempos: {
    height: 40,
    margin: '7%',
    width: '20%',
    marginTop: '5%',
    fontSize: 40,
  }
});


export default Song;
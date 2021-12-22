import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import KeepAwake from 'react-native-keep-awake';

import logo from './images/setlistgenius.png';
import Song from './components/song.js';
import Sound from 'react-native-sound';
import Apad from './audio/APad1.wav';
import Ashpad from './audio/AshPad1.wav';
import Bpad from './audio/BPad1.wav';
import Cpad from './audio/CPad1.wav';
import Cshpad from './audio/CshPad1.wav';
import Dpad from './audio/DPad1.wav';
import Dshpad from './audio/DshPad1.wav';
import Epad from './audio/EPad1.wav';
import Fpad from './audio/FPad1.wav';
import Fshpad from './audio/FshPad1.wav';
import Gpad from './audio/GPad1.wav';
import Gshpad from './audio/GshPad1.wav';
import Nome from './audio/nome.wav';
import pause from './images/pausesymbol.png';
import _BackgroundTimer from 'react-native-background-timer';
import SplashScreen from 'react-native-splash-screen';

const App = () => {


  const apad = new Sound(Apad);
  const ashpad = new Sound(Ashpad);
  const bpad = new Sound(Bpad);
  const cpad = new Sound(Cpad);
  const cshpad = new Sound(Cshpad);
  const dpad = new Sound(Dpad);
  const dshpad = new Sound(Dshpad);
  const epad = new Sound(Epad);
  const fpad = new Sound(Fpad);
  const fshpad = new Sound(Fshpad);
  const gpad = new Sound(Gpad);
  const gshpad = new Sound(Gshpad);
  const nome = new Sound(Nome);
  const padArr = [apad, ashpad, bpad, cpad, cshpad, dpad, dshpad, epad, fpad, fshpad, gpad, gshpad];

  let current = undefined;
  let clickon = false;
  let speeds = null;


  React.useEffect(() => {
    SplashScreen.hide();
  });


  test = (song, speed) => {

    if (current == undefined) {
      // takes the passed key and plays it
      switch (song) {
        case 'A': { current = apad; thefadein(apad, speed); };
          break;
        case 'A#': { current = ashpad; thefadein(ashpad, speed); };
          break;
        case 'B': { current = bpad; thefadein(bpad, speed); };
          break;
        case 'C': { current = cpad; thefadein(cpad, speed); };
          break;
        case 'C#': { current = cshpad; thefadein(cshpad, speed); };
          break;
        case 'D': { current = dpad; thefadein(dpad, speed); };
          break;
        case 'D#': { current = dshpad; thefadein(dshpad, speed); };
          break;
        case 'E': { current = epad; thefadein(epad, speed); };
          break;
        case 'F': { current = fpad; thefadein(fpad, speed); };
          break;
        case 'F#': { current = fshpad; thefadein(fshpad, speed); };
          break;
        case 'G': { current = gpad; thefadein(gpad, speed); };
          break;
        case 'G#': { current = gshpad; thefadein(gshpad, speed); };
          break;
        default: console.log('there must be some mistake');
          break;
      }
    } else {
      // if there is currently a song playing
      for (let i = 0; i < padArr.length; i++) {
        current._filename == padArr[i]._filename ? fadeout(padArr[i]) : null;
      }

      //doesnt start new pad untill timeout is complete for fadeout
      setTimeout(() => {
        switch (song) {
          case 'A': { current = apad; thefadein(apad, speed); };
            break;
          case 'A#': { current = ashpad; thefadein(ashpad, speed); };
            break;
          case 'B': { current = bpad; thefadein(bpad, speed); };
            break;
          case 'C': { current = cpad; thefadein(cpad, speed); };
            break;
          case 'C#': { current = cshpad; thefadein(cshpad, speed); };
            break;
          case 'D': { current = dpad; thefadein(dpad, speed); };
            break;
          case 'D#': { current = dshpad; thefadein(dshpad, speed); };
            break;
          case 'E': { current = epad; thefadein(epad, speed); };
            break;
          case 'F': { current = fpad; thefadein(fpad, speed); };
            break;
          case 'F#': { current = fshpad; thefadein(fshpad, speed); };
            break;
          case 'G': { current = gpad; thefadein(gpad, speed); };
            break;
          case 'G#': { current = gshpad; thefadein(gshpad, speed); };
            break;
          default: console.log('there must be some mistake');
            break;
        }
      }, 2600);

    }

    // fadeout current pad then stops pad
    fadeout = (pad) => {
      _BackgroundTimer.stopBackgroundTimer();
      clickon = false;
      
      let invl3 = setInterval(() => {
        pad.setVolume(pad.getVolume() - .04);
        console.log(pad.getVolume());
      }, 100);

      setTimeout(() => {
        clearInterval(invl3);
        pad.setVolume(0);
        pad.stop();
        console.log(0);
      }, 2500);
    }
  }

  // fadein pad then set at 1 vol, panned to the right (+1), and looped
  thefadein = (pad, speed) => {
    // sets local var for speed of click so that pauseclick func works
    speeds = speed;
    goclick(speed);
    pad.setVolume(0);
    pad.setNumberOfLoops(-1);
    pad.setPan(1);
    pad.play(() => { });

    let invl4 = setInterval(() => {
      pad.setVolume(pad.getVolume() + .04);
      console.log(pad.getVolume());
    }, 100);

    setTimeout(() => {
      clearInterval(invl4);
      pad.setVolume(1);
      console.log(1);
    }, 2500);
  }

// click start func
  goclick = (speed) => {
    clickon = true;
    nome.setPan(-1);
    _BackgroundTimer.runBackgroundTimer(()=>{
      nome.stop();
      nome.play(()=>{});
    },(60/speed)*1000)
  }
  
  // pause click func   --NOTE THE CLICK BUTTON STILL NEEDS TO BE CONFIGURED TO PAUSE THIS CLICK. NOT CURRENTLY WORKING
  pauseclick = () => {
    if(clickon){
      _BackgroundTimer.stopBackgroundTimer();
      clickon = false;
    } else {
      if(speeds != null){
        _BackgroundTimer.runBackgroundTimer(()=>{nome.stop(); nome.play(()=>{});}, (60/speeds)*1000);
        clickon = true;
      } else { console.log('speeds equals null')};
    }
  }

  return (

    <SafeAreaView style={{ backgroundColor: '#16425b', height: Dimensions.get('window').height }}>
      <KeepAwake/>
      <View style={styles.container}>
        <Image source={logo} style={styles.header} />
      </View>
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
      <TouchableOpacity 
      style={styles.pause}
        onPress={() => {
          if (current != undefined) {
            for (let i = 0; i < padArr.length; i++) {
              current._filename == padArr[i]._filename ? fadeout(padArr[i]) : null;
            }
            _BackgroundTimer.stopBackgroundTimer();
            clickon = false;
            current = undefined;
          } else { null };
        }}>
        <Image source={pause} style={styles.pause}/>
      </TouchableOpacity>
    </SafeAreaView>
    

  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16425b',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '15%'
  },
  header: {
    height: 100,
    width: 340,
    marginTop: 7,
    marginBottom: 7,
    resizeMode: 'contain'
  },
  pause: {
    height: 80,
    width: 70,
    alignSelf: 'center',
    marginTop: 5
  },

});

export default App;
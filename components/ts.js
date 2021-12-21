import React from "react";

import {
    View,
    TouchableOpacity,
    Text
} from "react-native";



export default Timesignature = (props) => {


    return (
        <View style={{ position: 'absolute', width: '103%', height: '120%', backgroundColor: 'black', bottom: 0, borderColor: 'grey', borderWidth: 2, display: props.thedisp ? 'flex' : 'none' }}>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 'auto', marginBottom: 'auto' }}>
                <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={()=>{props.thesetdisp(false); props.thesetts('4/4')}}><Text style={{ color: 'white', fontSize: 25 }}>4/4</Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={()=>{props.thesetdisp(false); props.thesetts('3/4')}}><Text style={{ color: 'white', fontSize: 25 }}>3/4</Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={()=>{props.thesetdisp(false); props.thesetts('6/8')}}><Text style={{ color: 'white', fontSize: 25 }}>6/8</Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={()=>{props.thesetdisp(false); props.thesetts('2/4')}}><Text style={{ color: 'white', fontSize: 25 }}>2/4</Text></TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'black', borderColor: 'grey', borderWidth: 1 }} onPress={()=>{props.thesetdisp(false); props.thesetts('5/4')}}><Text style={{ color: 'white', fontSize: 25 }}>5/4</Text></TouchableOpacity>
            </View>
        </View>
    );

}
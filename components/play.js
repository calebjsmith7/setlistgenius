import React from "react";
import {
    TouchableOpacity,
    Text
} from "react-native";


export default Playsymbol = (props) => {

    let newbpm = null;

    if (props.thets == '6/8') {
        newbpm = props.thebpm * 2;
    } else {
        newbpm = props.thebpm;
    }


    return (

        <TouchableOpacity onPress={() => { props.thekey && props.thebpm && props.thets != 'TS' ? test(props.thekey, newbpm) : null }}>
            <Text style={{ color: 'white', fontSize: 40, marginBottom: 5, marginRight: 40 }}>▶</Text>
        </TouchableOpacity>

    );

}
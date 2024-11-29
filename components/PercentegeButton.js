import { TextButton } from "./TextButton";
import { View } from "react-native";
export default function PercentageButton(props){

    return(

     <TextButton title={props.percentage + '%'}
             onPress={() => props.onPress(props.percentage)}/>

        
);
}

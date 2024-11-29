import { View, Text, StyleSheet} from "react-native";
export default function Resultado(props)
{
    return(
        <View style={style.mainContainer}>
            <Text>{props.descripcion}</Text>
            <Text>{props.valor}</Text>
        </View>
    );
}
const style= StyleSheet.create(
    {
        mainContainer:{
            justifyContent: 'space-between',
            flexDirection:'row',
        },
    }
)
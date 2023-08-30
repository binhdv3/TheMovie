import Constants from "../Constants";
import Styles from "../Styles";
import {
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={Styles.header}>
            <TouchableOpacity>
                <Text style={Styles.backText}> <Icon name="chevron-left" size={20} color="black" /> Back</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Header;
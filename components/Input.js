import { View } from "react-native";

const Input = (props) => {
  
  return ( 
    <View>
      <Controller
        defaultValue=""
        control={control}
        rules={{
          required: {value: true, message:'name is required'}
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder="Item"
          />
          )}
          name="name"
          />
          {errors.name && <Text>This is required.</Text>}
    </View>
   );
}
 
export default Input;
import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

type Props = {
  placeholder: string;
  value: string;
  onChangeText: (input: string) => void;
  input2: boolean;
  error: string;
  style: object;
  onFocus: () => void;
};
const Input: React.FC<Props> = ({
  placeholder,
  value,
  input2,
  error,
  style,
  onChangeText = () => {},
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <View style={{height: wp(4)}}>
        {error ? (
          <Text
            style={{
              fontSize: wp(3),
              marginLeft: wp(3),
              color: 'red',
              marginBottom: wp(0.5),
            }}>
            {error}
          </Text>
        ) : null}
      </View>
      <View
        style={[
          style,
          {
            borderColor: isFocused ? '#a26a39' : error ? 'red' : null,
            borderWidth: error || isFocused ? wp(0.3) : wp(0.1),
          },
        ]}>
        <TextInput
          style={{fontSize: wp(4), flex: 1, fontStyle: 'italic'}}
          {...props}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};
export default Input;

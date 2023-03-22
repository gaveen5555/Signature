import React from 'react';
import {Text, TextStyle} from 'react-native';

interface Props {
  children: string;
  style: {
    text: TextStyle;
  } & TextStyle;
}

function TextHeading({children, style}: Props) {
  return <Text style={[style.text, style]}>{children}</Text>;
}

export default TextHeading;

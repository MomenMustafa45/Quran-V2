import { View, Text } from "react-native";
import React from "react";
import { TextStyle } from "react-native";

type TextRegProps = {
  children: React.ReactElement | string;
  styles?: TextStyle;
};

const TextReg = ({ children, styles }: TextRegProps) => {
  return <Text style={{ fontFamily: "cairoReg", ...styles }}>{children}</Text>;
};

export default TextReg;

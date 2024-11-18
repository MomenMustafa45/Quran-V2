import { View, Text, TextStyle } from "react-native";
import React from "react";

type TextBoldProps = {
  children: React.ReactElement | string;
  styles?: TextStyle;
};

const TextBold = ({ children, styles }: TextBoldProps) => {
  return <Text style={{ fontFamily: "cairoBold", ...styles }}>{children}</Text>;
};

export default TextBold;

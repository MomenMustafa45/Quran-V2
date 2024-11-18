import { View, Text } from "react-native";
import React from "react";
import { TextStyle } from "react-native";

type TextSemiBoldProps = {
  children: React.ReactElement | string;
  styles?: TextStyle;
};

const TextSemiBold = ({ children, styles }: TextSemiBoldProps) => {
  return (
    <Text style={{ fontFamily: "cairoSemiBold", ...styles }}>{children}</Text>
  );
};

export default TextSemiBold;

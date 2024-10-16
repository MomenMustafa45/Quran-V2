import { View, Text } from "react-native";
import React from "react";

type TextRegProps = {
  children: React.ReactElement | string;
  styles?: string;
};

const TextReg = ({ children, styles }: TextRegProps) => {
  return (
    <Text style={{ fontFamily: "cairoReg" }} className={`${styles}`}>
      {children}
    </Text>
  );
};

export default TextReg;

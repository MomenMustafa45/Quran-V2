import { View, Text } from "react-native";
import React from "react";

type TextBoldProps = {
  children: React.ReactElement | string;
  styles?: string;
};

const TextBold = ({ children, styles }: TextBoldProps) => {
  return (
    <Text style={{ fontFamily: "cairoBold" }} className={`${styles}`}>
      {children}
    </Text>
  );
};

export default TextBold;

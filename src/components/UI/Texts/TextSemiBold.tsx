import { View, Text } from "react-native";
import React from "react";

type TextSemiBoldProps = {
  children: React.ReactElement | string;
  styles?: string;
};

const TextSemiBold = ({ children, styles }: TextSemiBoldProps) => {
  return (
    <Text style={{ fontFamily: "cairoSemiBold" }} className={`${styles}`}>
      {children}
    </Text>
  );
};

export default TextSemiBold;

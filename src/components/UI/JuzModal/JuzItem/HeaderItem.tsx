import { View, Text } from "react-native";
import React from "react";
import TextReg from "../../Texts/TextReg";

const HeaderItem = ({ text }: { text: string }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextReg
        styles={{
          color: "white",
          fontSize: 10,
        }}
      >
        {text}
      </TextReg>
    </View>
  );
};

export default HeaderItem;

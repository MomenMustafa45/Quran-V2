import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TextReg from "../../Texts/TextReg";

type JuzItemProps = {
  item: {
    juzId: number;
    juzName: string;
    pageNumber: number;
    hezbs: {
      hezId: number;
      hezbName: string;
      pageNumber: number;
      quarters: {
        quarterName: string;
        pageNumber: number;
      }[];
    }[];
  };
  goToPage: (item: number) => void;
};

const JuzItem = ({ item, goToPage }: JuzItemProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
      key={item.juzId}
    >
      {/* second col */}
      <View style={{ flex: 3 }}>
        {item.hezbs.map((hezb, hezbIndex) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            key={hezb.hezId}
          >
            <View style={{ flex: 1 }}>
              {hezb.quarters.map((q, qIndex) => (
                <TouchableOpacity
                  key={q.quarterName}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    borderBottomWidth: 1,
                    paddingHorizontal: 5,
                  }}
                  onPress={() => {
                    goToPage(q.pageNumber);
                  }}
                >
                  <TextReg
                    styles={{
                      flex: 1,
                      textAlign: "center",
                      paddingVertical: 5,
                    }}
                  >
                    <>{q.pageNumber}</>
                  </TextReg>
                  <TextReg
                    styles={{
                      flex: 1,
                      borderLeftWidth: 1,
                      textAlign: "center",
                      paddingVertical: 5,
                    }}
                  >
                    <>{qIndex + 1}</>
                  </TextReg>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: hezbIndex % 2 == 0 ? "gray" : "green",
                flex: 1,
                height: "100%",
                borderBottomWidth: 1,
              }}
              onPress={() => {
                goToPage(hezb.pageNumber);
              }}
            >
              <TextReg>
                <>{hezb.hezId}</>
              </TextReg>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* first col */}
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
        }}
        onPress={() => {
          goToPage(item.pageNumber);
        }}
      >
        <TextReg>
          <>{item.juzId}</>
        </TextReg>
      </TouchableOpacity>
    </View>
  );
};

export default JuzItem;

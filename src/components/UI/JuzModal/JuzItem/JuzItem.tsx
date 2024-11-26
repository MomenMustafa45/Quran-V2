import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import TextReg from "../../Texts/TextReg";
import { MushafJuzs } from "../JuzModal";

type JuzItemProps = {
  item: MushafJuzs;
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
      <View style={{ flex: 4 }}>
        {item.hezbs.map((hezb, hezbIndex) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
            key={hezb.hezId}
          >
            <View style={{ flex: 2 }}>
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
                  <View
                    style={{
                      flex: 1,
                      paddingVertical: 5,
                      alignItems: "center",
                    }}
                  >
                    <TextReg styles={{ fontSize: 10 }}>
                      {q.end.ayah.toString()}
                    </TextReg>
                    <TextReg styles={{ fontSize: 10 }}>{q.end.surah}</TextReg>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      paddingVertical: 5,
                      alignItems: "center",
                      borderLeftWidth: 1,
                    }}
                  >
                    <TextReg styles={{ fontSize: 10 }}>
                      {q.start.ayah.toString()}
                    </TextReg>
                    <TextReg styles={{ fontSize: 10 }}>{q.start.surah}</TextReg>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "center",
                      borderLeftWidth: 1,
                    }}
                  >
                    <TextReg>
                      <>{qIndex + 1}</>
                    </TextReg>
                  </View>
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

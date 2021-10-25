import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const API_KEY = "254cf5e35a92db305509644d6bf10686";

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;

const { height: SCEEN_HEIGHT } = Dimensions.get("window");

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = () => {
  const getNowPlaying = () => {
    fetch(`https://api..org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR
    `);
  };
  return (
    <Container>
      <Swiper
        loop
        timeout={3.5}
        controlsEnabled={false}
        containerStyle={{ width: "100%", height: SCEEN_HEIGHT / 4 }}
      >
        <View style={{ backgroundColor: "red" }}></View>
        <View style={{ backgroundColor: "blue" }}></View>
        <View style={{ backgroundColor: "red" }}></View>
        <View style={{ backgroundColor: "blue" }}></View>
      </Swiper>
    </Container>
  );
};

export default Movies;

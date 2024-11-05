export type Color =
  | "primary"
  | "white"
  | "background"
  | "lineGray"  ;

export type TitleSize = "title1" | "title2" | "title3" | "title4";
export type TextSize = "text1" | "text2" | "text3";
export type FontFamily = "en" | "kor";

export interface Theme {
  color: Record<Color, string>;
  title: {
    [key in TitleSize]: string;
  };
  text: {
    [key in TextSize]: string;
  };
  fontFamily: {
    [key in FontFamily]: string;
  };
}

export const theme: Theme = {
  color: {
    primary: "#006AD7",
    white: "#FFFFFF",
    background: "#F5F5F5",
    lineGray: 'B3B3B3',
  },
  title: {
    title1: "60px",
    title2: "50px",
    title3: "40px",
    title4: "30px",
  },
  text: {
    text1: "16px",
    text2: "14px",
    text3: "12px",
  },
  fontFamily: {
    en: "Poppins",
    kor: "Nanum Gothic",
  },
};
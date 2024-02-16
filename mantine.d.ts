import {
  type DefaultMantineColor,
  type MantineColorsTuple,
} from "@mantine/core";

type ExtendedCustomColors =
  | "primaryColorName"
  | "secondaryColorName"
  | "poopyGreen"
  | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

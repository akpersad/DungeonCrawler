import { createGlobalStyle } from "styled-components";
import MinecraftFont from "../assets/fonts/Minecraft.ttf";
import Grass from "../assets/images/grass.jpg";
import Rock from "../assets/images/rock.png";
import Tree from "../assets/images/tree.png";
import Chest from "../assets/images/chest.png";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Minecraft";
    font-style: normal;
    font-weight: 400;
    src:
      url('${MinecraftFont}') format("truetype")
  }

  .chest {
    &:last-of-type {
      background-image:url('${Chest}');
    }
  }
  
  .grass {
    background-image:url('${Grass}');
  }
  
  .rock {
    background-image:url('${Rock}');
  }

  .tree {
    background-image:url('${Tree}');
  }
  `;

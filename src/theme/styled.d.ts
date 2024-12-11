import 'styled-components';
import { CustomTheme } from '.';

declare module 'styled-components/native' {
  export interface DefaultTheme extends CustomTheme {}
}

import mintsConfig from '@mints/eslint-config';
import storybook from 'eslint-plugin-storybook';

export default [...mintsConfig, ...storybook.configs['flat/recommended']];

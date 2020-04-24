import { action } from '@storybook/addon-actions';
import { ExampleComponentComponent } from './example-component.component';
import { withKnobs, text, boolean, number, color } from '@storybook/addon-knobs';

const clicked = (e: Event) => {
  e.preventDefault();
  action('exampleComponent:clicked')(e.target);
};

export default {
  title: 'Example Component',
  component: ExampleComponentComponent,
  decorators: [withKnobs]
};

export const Default = () => ({
  component: ExampleComponentComponent,
  props: {
    text: text('text', 'Hello Storybook'),
    color: color('color', '#000000'),
    clicked
  }
});

export const Red = () => ({
  component: ExampleComponentComponent,
  props: {
    color: color('color', '#ff0000'),
    clicked
  }
});

export const CustomText = () => ({
  component: ExampleComponentComponent,
  props: {
    text: text('text', 'Hello Storybook'),
    clicked
  }
});

export const BlueCustomText = () => ({
  component: ExampleComponentComponent,
  props: {
    text: text('text', 'Hello Human'),
    color: color('color', '#0000ff'),
    clicked
  }
});


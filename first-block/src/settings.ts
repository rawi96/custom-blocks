import { Color, DropdownSize, IconEnum } from '@frontify/arcade';
import { BlockSettings, Bundle } from '@frontify/guideline-blocks-settings';

export const DEFAULT_BORDER_COLOR: Color = { r: 213, g: 214, b: 214, a: 1, name: 'Light Grey', };
export const DEFAULT_BACKGROUND_COLOR: Color = { r: 35, g: 113, b: 213, a: 1, name: 'Mariner', };
export const DEFAULT_SHOW_BORDER_VALUE: boolean = true;

const settings: BlockSettings = {
    main: [
        {
            id: 'main-dropdown',
            type: 'dropdown',
            defaultValue: 'customizable_rectangle',
            size: DropdownSize.Large,
            disabled: true,
            choices: [
                {
                    value: 'customizable_rectangle',
                    icon: IconEnum.Snippet,
                    label: 'Customizable Rectangle',
                },
            ],
        },
    ],
    style: [
        {
            id: 'showBorder',
            type: 'switch',
            label: 'Show Border',
            defaultValue: DEFAULT_SHOW_BORDER_VALUE,
            on: [
                {
                    id: 'borderColor',
                    label: 'Border Color',
                    type: 'colorInput',
                    defaultValue: DEFAULT_BORDER_COLOR,
                },
            ],
        },
        {
            id: 'backgroundColor',
            label: 'Background Color',
            type: 'colorInput',
            defaultValue: DEFAULT_BACKGROUND_COLOR
        },
    ],
};

export default settings;

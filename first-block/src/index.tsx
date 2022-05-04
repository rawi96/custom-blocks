import { AppBridgeNative, useBlockSettings } from '@frontify/app-bridge';
import { Color } from '@frontify/arcade';
import { FC } from 'react';

import { DEFAULT_BACKGROUND_COLOR, DEFAULT_BORDER_COLOR, DEFAULT_SHOW_BORDER_VALUE } from './settings';

type Settings = {
    borderColor: Color,
    backgroundColor: Color,
    showBorder: boolean
};

type Props = {
    appBridge: AppBridgeNative;
}

const toRgbaString = (color: Color): string => {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`
}

const toReadableString = (color: Color): string => {
    return color.name ? color.name : toRgbaString(color);
}

const CustomizableRectangle: FC<Props> = ({ appBridge }) => {
    const [blockSettings] = useBlockSettings<Settings>(appBridge);
    const { borderColor = DEFAULT_BORDER_COLOR, backgroundColor = DEFAULT_BACKGROUND_COLOR, showBorder = DEFAULT_SHOW_BORDER_VALUE } = blockSettings;

    return (
        <>
            <div style={{
                borderColor: toRgbaString(borderColor),
                backgroundColor: toRgbaString(backgroundColor),
                border: showBorder ? '5px solid' : '',
                width: '100%',
                height: '100px'
            }} />
            {showBorder &&
                <p>Border Color: <i>{toReadableString(borderColor)}</i></p>
            }
            <p>Background Color: <i>{toReadableString(backgroundColor)}</i></p>
        </>
    );
}

export default CustomizableRectangle;

import {Text, TouchableOpacity, Image, TextStyle} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants/index';
import {IconTextButtonInterface} from '../../types/IconTextButtonInterface';

const IconTextButton = ({
  label,
  icon,
  containerStyle,
  onPress,
}: IconTextButtonInterface) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...containerStyle,
      }}
      onPress={onPress}>
      {/* image */}
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 20,
          height: 20,
        }}
      />

      {/* text */}
      <Text
        style={{
          marginLeft: SIZES.base,
          ...FONTS.h3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default IconTextButton;

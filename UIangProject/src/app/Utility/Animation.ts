import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
export const Animation= LoadingModule.forRoot({
    animationType: ANIMATION_TYPES.threeBounce,
    backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
    backdropBorderRadius: '1px',
    primaryColour: '#ff0000', 
    secondaryColour: '#cc6609', 
    tertiaryColour: 'blue'
  })
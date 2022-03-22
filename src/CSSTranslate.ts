export default (position: number, metric: 'px' | '%', axis: 'horizontal' | 'vertical') => {
    // const positionPercent = position === 0 ? position : position + metric;
    
    //to handle center mode on landscape for android and iOS
    const positionPercent = position === 0 ? position: axis === 'horizontal' ? position + metric : position + 15 + metric;
    const positionCss = axis === 'horizontal' ? [positionPercent, 0, 0] : [0, positionPercent, 0];
    const transitionProp = 'translate3d';

    const translatedPosition = '(' + positionCss.join(',') + ')';

    return transitionProp + translatedPosition;
};

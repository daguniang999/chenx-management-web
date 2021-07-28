var getHeightByRef = (ref) => {
    let divHeight = window.getComputedStyle(ref).getPropertyValue('height');
      divHeight = divHeight.substring(0, divHeight.length - 2);
      return divHeight;
}

export default {
  getHeightByRef
};
var getContentHeightByRef = (ref) => {
    // this.$refs[refName].
    let result = 0;
    let divHeight = window.getComputedStyle(ref).getPropertyValue('height');
      divHeight = divHeight.substring(0, divHeight.length - 2);
      if (parseInt(divHeight) + 158 < screen.height) {
        let height = 0;
        height = screen.height - 158;
        result = height + "px";
      } else {
        result = divHeight + "px";
      }      
      return result;
}

export default {
    getContentHeightByRef
};
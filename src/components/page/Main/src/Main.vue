<template>
  <div ref="content" :style="'padding: 10px; height:' + mainHeight" >
    main
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmainmain
        main
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv

    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainmaiv
    mainmainmainmainmainmainmain
    mainmainmainmainmainmainmain
    mainmainmamain    main
    mainmainmainmainman
    mainmainm
  </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        mainHeight: 10,
      }
    },
    activated() {
      
    },
    mounted() {
      this.mainHeight = this.$windows.getContentHeightByRef(this.$refs["content"]);
      // let divHeight = window.getComputedStyle(this.$refs["content"]).getPropertyValue('height');
      // divHeight = divHeight.substring(0, divHeight.length - 2);
      // if (parseInt(divHeight) + 158 < screen.height) {
      //   let height = 0;
      //   height = screen.height - 158;
      //   this.mainHeight = height + "px";
      // } else {
      //   this.mainHeight = divHeight + "px";
      // }      
    }
  }
</script>